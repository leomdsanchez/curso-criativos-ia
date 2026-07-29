let accumulatedDelta = 0
let locked = false
let resetTimer: number | undefined

const RESET_DELAY = 180
const NAVIGATION_COOLDOWN = 650
const DELTA_THRESHOLD = 42

function resetAccumulation() {
  accumulatedDelta = 0
  window.clearTimeout(resetTimer)
  resetTimer = undefined
}

function handleWheel(event: WheelEvent) {
  if (window.location.hash !== '#aula-1-contenido') return
  if (locked || Math.abs(event.deltaY) < 1) return

  event.preventDefault()
  accumulatedDelta += event.deltaY

  window.clearTimeout(resetTimer)
  resetTimer = window.setTimeout(resetAccumulation, RESET_DELAY)

  if (Math.abs(accumulatedDelta) < DELTA_THRESHOLD) return

  const key = accumulatedDelta > 0 ? 'ArrowRight' : 'ArrowLeft'
  window.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }))

  resetAccumulation()
  locked = true
  window.setTimeout(() => {
    locked = false
  }, NAVIGATION_COOLDOWN)
}

window.addEventListener('wheel', handleWheel, { passive: false })
