let touchStartX = 0
let touchStartY = 0
let touchStartedAt = 0

const MIN_SWIPE_DISTANCE = 52
const MAX_SWIPE_DURATION = 700

function dispatchNavigation(key: 'ArrowRight' | 'ArrowLeft') {
  window.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }))
}

window.addEventListener('touchstart', (event) => {
  if (window.location.hash !== '#aula-1-contenido') return
  const touch = event.changedTouches[0]
  touchStartX = touch.clientX
  touchStartY = touch.clientY
  touchStartedAt = Date.now()
}, { passive: true })

window.addEventListener('touchend', (event) => {
  if (window.location.hash !== '#aula-1-contenido') return
  const touch = event.changedTouches[0]
  const deltaX = touch.clientX - touchStartX
  const deltaY = touch.clientY - touchStartY
  const duration = Date.now() - touchStartedAt

  if (duration > MAX_SWIPE_DURATION) return

  const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY)
  if (!isHorizontalSwipe || Math.abs(deltaX) < MIN_SWIPE_DISTANCE) return

  dispatchNavigation(deltaX < 0 ? 'ArrowRight' : 'ArrowLeft')
}, { passive: true })
