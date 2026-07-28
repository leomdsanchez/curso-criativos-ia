import { useEffect, useState } from 'react'
import { App } from './App'
import './portal.css'
import './overview.css'

type View = 'home' | 'lesson-1-overview' | 'lesson-1'

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
  if (window.location.hash === '#aula-1-contenido') {
    return 'lesson-1'
  }

  if (window.location.hash === '#aula-1') {
    return 'lesson-1-overview'
  }

  return 'home'
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

  const startLessonOne = () => {
    window.location.hash = 'aula-1-contenido'
  }

  const goHome = () => {
    window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`)
    setView('home')
  }

  if (view === 'lesson-1-overview') {
    return (
      <main className="overview-shell">
        <div className="overview-ambient overview-ambient-one" />
        <div className="overview-ambient overview-ambient-two" />

        <button className="lesson-home-button" onClick={goHome} type="button">
          <span aria-hidden="true">←</span>
          Inicio
        </button>

        <section className="overview-content">
          <header className="overview-heading">
            <div className="portal-mark">IA</div>
            <p className="portal-eyebrow">Panorama del curso</p>
            <h1>Vamos a construir una máquina para generar creativos.</h1>
            <p className="overview-lead">
              Un proceso sencillo dentro de ChatGPT para desarrollar piezas que generen flujo hacia el negocio.
            </p>
          </header>

          <ul className="overview-list">
            <li>Aprender a elaborar y desarrollar creativos orientados a atraer personas hacia el negocio.</li>
            <li>Montar en ChatGPT un proceso simple, repetible y adaptado a cada marca.</li>
            <li>Trabajar con más cuidado en la etapa inicial para mejorar la calidad de las salidas.</li>
            <li>Terminar con una máquina de contenido que simplifique y acelere el trabajo cotidiano.</li>
          </ul>

          <div className="overview-footer">
            <p>
              Simple no significa automático: la calidad del resultado depende del contexto, el criterio y el cuidado que ponemos al comienzo.
            </p>
            <button onClick={startLessonOne} type="button">
              Comenzar la clase
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      </main>
    )
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
