import { useEffect, useState } from 'react'
import { COURSE_TITLE } from '../data/course'
import { copyText } from '../utils/clipboard'

const STORAGE_KEY = 'curso-criativos-ia:briefing:v1'

type BriefingData = {
  business: string
  location: string
  audience: string
  products: string
  differential: string
}

const EMPTY_BRIEFING: BriefingData = {
  business: '',
  location: '',
  audience: '',
  products: '',
  differential: '',
}

const fields: Array<{ key: keyof BriefingData; label: string; placeholder: string }> = [
  { key: 'business', label: 'Datos del negocio', placeholder: '¿Qué negocio es y qué hace?' },
  { key: 'location', label: 'Localización', placeholder: 'Ciudad, barrio o zona donde trabaja.' },
  { key: 'audience', label: 'Público objetivo', placeholder: '¿A qué tipo de personas quiere llegar?' },
  { key: 'products', label: 'Productos y servicios', placeholder: '¿Qué vende u ofrece?' },
  { key: 'differential', label: 'Diferencial', placeholder: '¿Qué lo hace distinto o más conveniente?' },
]

function readStoredBriefing(): BriefingData {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return EMPTY_BRIEFING

    const parsed = JSON.parse(stored) as Partial<BriefingData>
    return {
      business: typeof parsed.business === 'string' ? parsed.business : '',
      location: typeof parsed.location === 'string' ? parsed.location : '',
      audience: typeof parsed.audience === 'string' ? parsed.audience : '',
      products: typeof parsed.products === 'string' ? parsed.products : '',
      differential: typeof parsed.differential === 'string' ? parsed.differential : '',
    }
  } catch {
    return EMPTY_BRIEFING
  }
}

function formatBriefing(data: BriefingData) {
  return [
    'BRIEFING',
    '',
    `Datos del negocio:\n${data.business.trim()}`,
    '',
    `Localización:\n${data.location.trim()}`,
    '',
    `Público objetivo:\n${data.audience.trim()}`,
    '',
    `Productos y servicios:\n${data.products.trim()}`,
    '',
    `Diferencial:\n${data.differential.trim()}`,
  ].join('\n')
}

type BriefingPageProps = {
  onBack: () => void
}

export function BriefingPage({ onBack }: BriefingPageProps) {
  const [briefing, setBriefing] = useState<BriefingData>(readStoredBriefing)
  const [message, setMessage] = useState('Se guarda automáticamente en este dispositivo.')

  useEffect(() => {
    document.title = `Briefing · ${COURSE_TITLE}`
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(briefing))
      setMessage('Guardado automáticamente en este dispositivo.')
    } catch {
      setMessage('No fue posible guardar en este navegador.')
    }
  }, [briefing])

  const handleCopy = async () => {
    try {
      await copyText(formatBriefing(briefing))
      setMessage('Briefing copiado. Ahora podés pegarlo en ChatGPT.')
    } catch {
      setMessage('No fue posible copiar. Seleccioná el texto manualmente.')
    }
  }

  const handleClear = () => {
    if (!window.confirm('¿Querés borrar todo el briefing guardado en este dispositivo?')) return
    setBriefing(EMPTY_BRIEFING)
    setMessage('Briefing eliminado.')
  }

  return (
    <main className="briefing-shell">
      <button className="briefing-back" type="button" onClick={onBack}>
        <span aria-hidden="true">←</span>
        Inicio
      </button>

      <section className="briefing-page">
        <header className="briefing-header">
          <div className="portal-mark">IA</div>
          <p className="portal-eyebrow">Práctica de la clase</p>
          <h1>Briefing del negocio</h1>
          <p>Completá los cinco campos. La información queda guardada solamente en este celular y navegador.</p>
        </header>

        <div className="briefing-fields">
          {fields.map((field) => (
            <label className="briefing-field" key={field.key}>
              <span>{field.label}</span>
              <textarea
                value={briefing[field.key]}
                placeholder={field.placeholder}
                onChange={(event) => setBriefing((current) => ({
                  ...current,
                  [field.key]: event.target.value,
                }))}
              />
            </label>
          ))}
        </div>

        <footer className="briefing-actions">
          <p aria-live="polite">{message}</p>
          <div>
            <button className="briefing-secondary" type="button" onClick={handleClear}>Limpiar</button>
            <button className="briefing-primary" type="button" onClick={() => void handleCopy()}>Copiar briefing</button>
          </div>
        </footer>
      </section>
    </main>
  )
}
