import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { getLessonSlideId, lessonSlideHash } from '../routes'
import { isInteractiveTarget } from '../utils/events'

const NEXT_KEYS = ['ArrowRight', 'PageDown', ' ', 'Enter']
const PREVIOUS_KEYS = ['ArrowLeft', 'PageUp', 'Backspace']
const WHEEL_THRESHOLD = 42
const WHEEL_COOLDOWN = 650
const MIN_SWIPE_DISTANCE = 52
const MAX_SWIPE_DURATION = 700
const SCROLL_EDGE_TOLERANCE = 4

type SlideNavigationOptions = {
  lessonNumber: number
  slideIds: readonly string[]
  scrollContainerRef: RefObject<HTMLElement | null>
}

type TouchStart = {
  x: number
  y: number
  startedAt: number
  startedAtTop: boolean
  startedAtBottom: boolean
  canScroll: boolean
}

function clamp(value: number, maximum: number) {
  return Math.min(Math.max(value, 0), maximum)
}

function getScrollState(element: HTMLElement | null) {
  if (!element) {
    return { canScroll: false, atTop: true, atBottom: true }
  }

  const maximum = element.scrollHeight - element.clientHeight
  const canScroll = maximum > SCROLL_EDGE_TOLERANCE

  return {
    canScroll,
    atTop: !canScroll || element.scrollTop <= SCROLL_EDGE_TOLERANCE,
    atBottom: !canScroll || element.scrollTop >= maximum - SCROLL_EDGE_TOLERANCE,
  }
}

function canScrollInDirection(element: HTMLElement | null, delta: number) {
  const state = getScrollState(element)
  if (!state.canScroll) return false
  return delta > 0 ? !state.atBottom : !state.atTop
}

export function useSlideNavigation({
  lessonNumber,
  slideIds,
  scrollContainerRef,
}: SlideNavigationOptions) {
  const indexFromUrl = useCallback(() => {
    const slideId = getLessonSlideId(lessonNumber)
    const foundIndex = slideId ? slideIds.indexOf(slideId) : -1
    return foundIndex >= 0 ? foundIndex : 0
  }, [lessonNumber, slideIds])

  const [index, setIndex] = useState(indexFromUrl)
  const indexRef = useRef(index)
  const wheelDelta = useRef(0)
  const wheelLocked = useRef(false)
  const touchStart = useRef<TouchStart>({
    x: 0,
    y: 0,
    startedAt: 0,
    startedAtTop: true,
    startedAtBottom: true,
    canScroll: false,
  })

  const setCurrentIndex = useCallback((nextIndex: number) => {
    indexRef.current = nextIndex
    setIndex(nextIndex)
  }, [])

  const goTo = useCallback((requestedIndex: number, replace = false) => {
    const nextIndex = clamp(requestedIndex, slideIds.length - 1)
    const hash = lessonSlideHash(lessonNumber, slideIds[nextIndex])

    setCurrentIndex(nextIndex)

    if (window.location.hash === hash) return

    if (replace) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${hash}`)
      return
    }

    window.location.hash = hash.slice(1)
  }, [lessonNumber, setCurrentIndex, slideIds])

  useEffect(() => {
    const slideId = getLessonSlideId(lessonNumber)
    if (!slideId || !slideIds.includes(slideId)) goTo(0, true)

    const handleHashChange = () => setCurrentIndex(indexFromUrl())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [goTo, indexFromUrl, lessonNumber, setCurrentIndex, slideIds])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return
      if (isInteractiveTarget(event.target)) return

      if (NEXT_KEYS.includes(event.key)) {
        event.preventDefault()
        goTo(indexRef.current + 1)
        return
      }

      if (PREVIOUS_KEYS.includes(event.key)) {
        event.preventDefault()
        goTo(indexRef.current - 1)
        return
      }

      if (event.key === 'Home') {
        event.preventDefault()
        goTo(0)
        return
      }

      if (event.key === 'End') {
        event.preventDefault()
        goTo(slideIds.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goTo, slideIds.length])

  useEffect(() => {
    let resetTimer: number | undefined
    let unlockTimer: number | undefined

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || wheelLocked.current || Math.abs(event.deltaY) < 1) return

      if (canScrollInDirection(scrollContainerRef.current, event.deltaY)) {
        wheelDelta.current = 0
        return
      }

      event.preventDefault()
      wheelDelta.current += event.deltaY

      window.clearTimeout(resetTimer)
      resetTimer = window.setTimeout(() => {
        wheelDelta.current = 0
      }, 180)

      if (Math.abs(wheelDelta.current) < WHEEL_THRESHOLD) return

      goTo(indexRef.current + (wheelDelta.current > 0 ? 1 : -1))
      wheelDelta.current = 0
      wheelLocked.current = true
      unlockTimer = window.setTimeout(() => {
        wheelLocked.current = false
      }, WHEEL_COOLDOWN)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.clearTimeout(resetTimer)
      window.clearTimeout(unlockTimer)
      wheelDelta.current = 0
      wheelLocked.current = false
    }
  }, [goTo, scrollContainerRef])

  useEffect(() => {
    const resetTouch = () => {
      touchStart.current.startedAt = 0
    }

    const handleTouchStart = (event: TouchEvent) => {
      resetTouch()
      if (isInteractiveTarget(event.target)) return

      const touch = event.changedTouches[0]
      const scrollState = getScrollState(scrollContainerRef.current)

      touchStart.current = {
        x: touch.clientX,
        y: touch.clientY,
        startedAt: Date.now(),
        startedAtTop: scrollState.atTop,
        startedAtBottom: scrollState.atBottom,
        canScroll: scrollState.canScroll,
      }
    }

    const handleTouchMove = (event: TouchEvent) => {
      const start = touchStart.current
      if (!start.startedAt) return

      const touch = event.changedTouches[0]
      const deltaX = touch.clientX - start.x
      const deltaY = touch.clientY - start.y
      const horizontal = Math.abs(deltaX) > Math.abs(deltaY)

      if (horizontal) {
        event.preventDefault()
        return
      }

      const swipingUp = deltaY < 0
      const shouldCapture = !start.canScroll
        || (swipingUp ? start.startedAtBottom : start.startedAtTop)

      if (shouldCapture) event.preventDefault()
    }

    const handleTouchEnd = (event: TouchEvent) => {
      const start = touchStart.current
      if (!start.startedAt) return

      const touch = event.changedTouches[0]
      const deltaX = touch.clientX - start.x
      const deltaY = touch.clientY - start.y
      const duration = Date.now() - start.startedAt
      resetTouch()

      if (duration > MAX_SWIPE_DURATION) return

      const horizontal = Math.abs(deltaX) > Math.abs(deltaY)
      const distance = horizontal ? Math.abs(deltaX) : Math.abs(deltaY)
      if (distance < MIN_SWIPE_DISTANCE) return

      if (horizontal) {
        goTo(indexRef.current + (deltaX < 0 ? 1 : -1))
        return
      }

      const swipingUp = deltaY < 0
      const canNavigate = !start.canScroll
        || (swipingUp ? start.startedAtBottom : start.startedAtTop)

      if (!canNavigate) return
      goTo(indexRef.current + (swipingUp ? 1 : -1))
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('touchcancel', resetTouch, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('touchcancel', resetTouch)
    }
  }, [goTo, scrollContainerRef])

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo])
  const previous = useCallback(() => goTo(indexRef.current - 1), [goTo])

  return { index, goTo, next, previous }
}
