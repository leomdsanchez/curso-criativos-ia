import { createRoot } from 'react-dom/client'
import { hasSurveySheetUrl, surveyConfig } from './data/survey'
import './admin.css'

export function AdminApp() {
  const isReady = hasSurveySheetUrl()

  return (
    <main className="admin-shell">
      <section className="admin-card">
        <p className="admin-eyebrow">Panel del profesor</p>
        <h1>Respuestas de la encuesta.</h1>
        <p>
          {isReady
            ? 'La planilla está protegida por los permisos que configuraste en Google Drive.'
            : 'Agregá el enlace de la planilla privada en src/data/survey.ts para habilitar el acceso.'}
        </p>
        {isReady && (
          <a className="admin-link" href={surveyConfig.sheetUrl} rel="noreferrer" target="_blank">
            Abrir respuestas <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>
    </main>
  )
}

const root = document.getElementById('root')

if (!root) {
  throw new Error('No se encontró el contenedor de administración.')
}

createRoot(root).render(<AdminApp />)
