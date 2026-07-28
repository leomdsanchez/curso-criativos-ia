import { useEffect, useState } from 'react'
import { App } from './App'
import './portal.css'

type View = 'home' | 'lesson-1'

type Lesson = {
  number: string
  title: string
  description: string
  status: 'available' | 'soon'
  meta: string
}

const lessons: Lesson[] = [
  {
    number: '01',
    title: 'De la atención al briefing',
    description: 'Función del anuncio, mercado de la atención, cuatro pilares y construcción del primer briefing.',
    status: 'available',
    meta: '2 horas · Disponible',
  },
  {
    number: '02',
    title: 'Copy y líneas creativas',
    description: 'Desarrollo de enfoques creativos usando el briefing y los cuatro pilares fundamentales.',
    status: 'soon',
    meta: 'Próximamente',
  },
  {
    number: '03',
    title: 'Creación de piezas con IA',
    description: 'Transformación de la línea creativa en anuncios consistentes para distintos formatos.',
    status: 'soon',
    meta: 'Próximamente',
  },
]

function getViewFromHash(): View {
  return window.location.hash === '#aula-1' ? 'lesson-1' : 'home'
}

export function CoursePortal() {
  const [view, setView] = useState<View>(getViewFromHash)

  useEffect(() => {
    const handleHashChange = () => setView(getViewFromHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const openLessonOne = () => {
    window.location.hash = 'aula-1'
  }

  const goHome = () => {
    window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`)
    setView('home')
  }

  if (view === 'lesson-1') {
    return (
      <div className="lesson-view">
        <button className="lesson-home-button" onClick={goHome} type="button">
          <span aria-hidden="true">←</span>
          Inicio
        </button>
        <App />
      </div>
    )
  }

  return (
    <main className="portal-shell">
      <div className="portal-ambient portal-ambient-one" />
      <div className="portal-ambient portal-ambient-two" />

      <section className="portal-content">
        <header className="portal-header">
          <div className="portal-mark">IA</div>
          <p className="portal-eyebrow">Material de consulta</p>
          <h1>Criativos con IA</h1>
          <p>
            Accedé a las clases, repasá los conceptos y retomá el contenido cuando lo necesites.
          </p>
        </header>

        <section className="lesson-grid" aria-label="Clases del curso">
          {lessons.map((lesson) => {
            const isAvailable = lesson.status === 'available'

            return (
              <article className={`lesson-card ${isAvailable ? 'is-available' : 'is-locked'}`} key={lesson.number}>
                <div className="lesson-card-topline">
                  <span className="lesson-number">Aula {lesson.number}</span>
                  <span className={`lesson-status ${isAvailable ? 'is-available' : ''}`}>
                    {isAvailable ? 'Disponible' : 'En breve'}
                  </span>
                </div>

                <div>
                  <h2>{lesson.title}</h2>
                  <p>{lesson.description}</p>
                </div>

                <div className="lesson-card-footer">
                  <span>{lesson.meta}</span>
                  {isAvailable ? (
                    <button onClick={openLessonOne} type="button">
                      Abrir clase
                      <span aria-hidden="true">→</span>
                    </button>
                  ) : (
                    <span className="lesson-disabled-action">Todavía no disponible</span>
                  )}
                </div>
              </article>
            )
          })}
        </section>

        <footer className="portal-footer">
          El contenido se va a actualizar a medida que avance el curso.
        </footer>
      </section>
    </main>
  )
}
