let lastDirection: 1 | -1 = 1
let skippingProcessSlide = false

const textReplacements = new Map<string, string>([
  ['Su función principal es generar tráfico: llevar personas hacia el negocio.', 'Su función principal es generar flujo: llevar personas hacia el negocio.'],
  ['¿Cómo genera tráfico un anuncio?', '¿Cómo genera flujo un anuncio?'],
  ['Las empresas no compiten solamente por clientes.', 'El mercado de la atención'],
])

function updateVisibleContent() {
  document.querySelectorAll<HTMLElement>('h1, h2, h3, p').forEach((element) => {
    const replacement = textReplacements.get(element.textContent?.trim() ?? '')
    if (replacement) element.textContent = replacement
  })

  const thirdPillarTitle = document.querySelector<HTMLElement>('.pillar-grid .pillar-card:nth-child(3) h3')
  if (thirdPillarTitle) thirdPillarTitle.textContent = 'Comunicar'

  const currentTitle = document.querySelector<HTMLElement>('.slide-frame h2')?.textContent?.trim()
  if (currentTitle !== 'Vamos a trabajar dentro de GPT en tres etapas.' || skippingProcessSlide) return

  skippingProcessSlide = true
  window.setTimeout(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', {
      key: lastDirection === 1 ? 'ArrowRight' : 'ArrowLeft',
      bubbles: true,
    }))
    window.setTimeout(() => {
      skippingProcessSlide = false
    }, 100)
  }, 0)
}

window.addEventListener('keydown', (event) => {
  if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(event.key)) lastDirection = 1
  if (['ArrowLeft', 'PageUp', 'Backspace'].includes(event.key)) lastDirection = -1
}, true)

window.addEventListener('wheel', (event) => {
  if (Math.abs(event.deltaY) > 1) lastDirection = event.deltaY > 0 ? 1 : -1
}, true)

window.addEventListener('click', (event) => {
  const button = (event.target as Element | null)?.closest('button')
  const label = button?.getAttribute('aria-label')
  if (label === 'Próxima diapositiva') lastDirection = 1
  if (label === 'Diapositiva anterior') lastDirection = -1
}, true)

new MutationObserver(updateVisibleContent).observe(document.documentElement, {
  childList: true,
  subtree: true,
})

updateVisibleContent()
