import { useCallback, useEffect, useRef, useState } from 'react'
import { getLessonOneSlideId, lessonOneSlideHash } from '../routes'

const NEXT_KEYS = ['ArrowRight', 'PageDown', ' ', 'Enter']
const PREVIOUS_KEYS = ['ArrowLeft', 'PageUp', 'Backspace']
const WHEEL_THRESHOLD = 42
const WHEEL_COOLDOWN = 650
const MIN_SWIPE_DISTANCE = 52

function clamp(value: number, maximum: number) {
  return Math.min(Math.max(value, 0), maximum)
}

export function useSlideNavigation(slideIds: string[]) {
  const indexFromUrl = useCallback(() => {
    const slideId = getLessonOneSlideId()
    const foundIndex = slideId ? slideIds.indexOf(slideId) : -1
    return foundIndex >= 0 ? foundIndex : 0
  }, [slideIds])

  const [index, setIndex] = useState(indexFromUrl)
  const wheelDelta = useRef(0)
  const wheelLocked = useRef(false)
  const touchStart = useRef({ x: 0, y: 0 })

  const goTo = useCallback((requestedIndex: number, replace = false) => {
    const nextIndex = clamp(requestedIndex, slideIds.length - 1)
    const hash = lessonOneSlideHash(slideIds[nextIndex])

    setIndex(nextIndex)

    if (window.location.hash === hash) return

    if (replace) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${hash}`)
      return
    }

    window.location.hash = hash.slice(1)
  }, [slideIds])

  useEffect(() => {
    const slideId = getLessonOneSlideId()
    if (!slideId || !slideIds.includes(slideId)) goTo(0, true)

    const handleHashChange = () => setIndex(indexFromUrl())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [goTo, indexFromUrl, slideIds])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (NEXT_KEYS.includes(event.key)) {
        event.preventDefault()
        goTo(index + 1)
        return
      }

      if (PREVIOUS_KEYS.includes(event.key)) {
        event.preventDefault()
        goTo(index - 1)
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
        return
      }

      if (event.key.toLowerCase() === 'f') {
        event.preventDefault()
        void document.documentElement.requestFullscreen?.()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goTo, index, slideIds.length])

  useEffect(() => {
    let resetTimer: number | undefined
    let unlockTimer: number | undefined

    const handleWheel = (event: WheelEvent) => {
      if (wheelLocked.current || Math.abs(event.deltaY) < 1) return

      event.preventDefault()
      wheelDelta.current += event.deltaY

      window.clearTimeout(resetTimer)
      resetTimer = window.setTimeout(() => {
        wheelDelta.current = 0
      }, 180)

      if (Math.abs(wheelDelta.current) < WHEEL_THRESHOLD) return

      goTo(index + (wheelDelta.current > 0 ? 1 : -1))
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
    }
  }, [goTo, index])

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.changedTouches[0]
      touchStart.current = { x: touch.clientX, y: touch.clientY }
    }

    const handleTouchEnd = (event: TouchEvent) => {
      const touch = event.changedTouches[0]
      const deltaX = touch.clientX - touchStart.current.x
      const deltaY = touch.clientY - touchStart.current.y

      if (Math.abs(deltaX) <= Math.abs(deltaY) || Math.abs(deltaX) < MIN_SWIPE_DISTANCE) return
      goTo(index + (deltaX < 0 ? 1 : -1))
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goTo, index])

  return {
    index,
    goTo,
    next: () => goTo(index + 1),
    previous: () => goTo(index - 1),
  }
}
