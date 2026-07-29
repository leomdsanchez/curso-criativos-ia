import { useCallback, useEffect, useRef, useState } from 'react'
import { getLessonSlideId, lessonSlideHash } from '../routes'
import { isInteractiveTarget } from '../utils/events'

const NEXT_KEYS = ['ArrowRight', 'PageDown', ' ', 'Enter']
const PREVIOUS_KEYS = ['ArrowLeft', 'PageUp', 'Backspace']
const WHEEL_THRESHOLD = 42
const WHEEL_COOLDOWN = 650
const MIN_SWIPE_DISTANCE = 52
const MAX_SWIPE_DURATION = 700

type SlideNavigationOptions = {
  lessonNumber: number
  slideIds: readonly string[]
}

function clamp(value: number, maximum: number) {
  return Math.min(Math.max(value, 0), maximum)
}

export function useSlideNavigation({ lessonNumber, slideIds }: SlideNavigationOptions) {
  const indexFromUrl = useCallback(() => {
    const slideId = getLessonSlideId(lessonNumber)
    const foundIndex = slideId ? slideIds.indexOf(slideId) : -1
    return foundIndex >= 0 ? foundIndex : 0
  }, [lessonNumber, slideIds])

  const [index, setIndex] = useState(indexFromUrl)
  const indexRef = useRef(index)
  const wheelDelta = useRef(0)
  const wheelLocked = useRef(false)
  const touchStart = useRef({ x: 0, y: 0, startedAt: 0 })

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
  }, [goTo])

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      if (isInteractiveTarget(event.target)) return

      const touch = event.changedTouches[0]
      touchStart.current = { x: touch.clientX, y: touch.clientY, startedAt: Date.now() }
    }

    const handleTouchEnd = (event: TouchEvent) => {
      if (!touchStart.current.startedAt) return

      const touch = event.changedTouches[0]
      const deltaX = touch.clientX - touchStart.current.x
      const deltaY = touch.clientY - touchStart.current.y
      const duration = Date.now() - touchStart.current.startedAt
      touchStart.current.startedAt = 0

      if (duration > MAX_SWIPE_DURATION) return
      if (Math.abs(deltaX) <= Math.abs(deltaY) || Math.abs(deltaX) < MIN_SWIPE_DISTANCE) return

      goTo(indexRef.current + (deltaX < 0 ? 1 : -1))
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goTo])

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo])
  const previous = useCallback(() => goTo(indexRef.current - 1), [goTo])

  return { index, goTo, next, previous }
}
