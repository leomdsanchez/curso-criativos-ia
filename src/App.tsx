import { useEffect, useMemo, useState } from 'react'

type Pillar = {
  title: string
  description: string
  accent: string
}

type Slide = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  time: string
  kind: 'cover' | 'statement' | 'bullets' | 'pillars' | 'process' | 'case' | 'practice'
  bullets?: string[]
  highlight?: string
  pillars?: Pillar[]
  process?: Array<{ step: string; title: string; description: string }>
}

const pillars: Pillar[] = [
  {
    title: 'Romper el patrón',
    description: 'Interrumpir el desplazamiento con una imagen, frase o recurso visual que llame la atención.',
    accent: '01',
  },
  {
    title: 'Conectar',
    description: 'Hacer que la persona sienta que el mensaje fue pensado para ella y para su situación.',
    accent: '02',
  },
  {
    title: 'Comunicar el resultado',
    description: 'Mostrar la consecuencia positiva que genera la oferta, no solamente sus características.',
    accent: '03',
  },
  {
    title: 'Dirigir',
    description: 'Indicar con claridad cuál es la próxima acción mediante un llamado a la acción.',
    accent: '04',
  },
]

const slides: Slide[] = [
  {
    id: 'portada',
    eyebrow: 'Clase 01 · 2 horas',
    title: 'De la atención al briefing',
    subtitle: 'Cómo construir la base de un anuncio que tenga sentido.',
    time: '00–05 min',
    kind: 'cover',
  },
  {
    id: 'presentacion',
    eyebrow: 'Presentación',
    title: 'Antes de empezar, necesitamos contexto.',
    subtitle: 'Cada participante se presenta para conectar el curso con una necesidad real.',
    time: '05–10 min',
    kind: 'bullets',
    bullets: ['Nombre.', 'Negocio o área en la que trabaja.', 'Qué problema busca resolver con el curso.'],
  },
  {
    id: 'pregunta-funcion',
    eyebrow: 'Concepto básico',
    title: '¿Cuál es la función de un anuncio?',
    time: '10–12 min',
    kind: 'statement',
  },
  {
    id: 'funcion',
    eyebrow: 'Concepto básico',
    title: 'La función del anuncio no es vender directamente.',
    subtitle: 'Su función principal es generar tráfico: llevar personas hacia el negocio.',
    time: '12–20 min',
    kind: 'statement',
    highlight: 'El anuncio abre la puerta. La venta ocurre después.',
  },
  {
    id: 'atencion',
    eyebrow: 'La pregunta clave',
    title: '¿Cómo genera tráfico un anuncio?',
    subtitle: 'Primero necesita conquistar algo mucho más escaso que el dinero: la atención.',
    time: '20–25 min',
    kind: 'statement',
    highlight: 'Sin atención, no hay mensaje. Sin mensaje, no hay acción.',
  },
  {
    id: 'mercado',
    eyebrow: 'Mercado de la atención',
    title: 'Las empresas no compiten solamente por clientes.',
    subtitle: 'Compiten contra videos, mensajes, noticias, entretenimiento y cientos de estímulos al mismo tiempo.',
    time: '25–30 min',
    kind: 'statement',
    highlight: 'El primer adversario de tu anuncio es la indiferencia.',
  },
  {
    id: 'pilares',
    eyebrow: 'Los cuatro pilares',
    title: 'Un buen anuncio necesita cumplir cuatro funciones.',
    time: '30–35 min',
    kind: 'pillars',
    pillars,
  },
  {
    id: 'romper',
    eyebrow: 'Pilar 01',
    title: 'Romper el patrón',
    subtitle: 'La persona está desplazándose. El anuncio necesita interrumpir ese movimiento sin depender de exageración vacía.',
    time: '35–40 min',
    kind: 'bullets',
    bullets: [
      'Una imagen inesperada o visualmente fuerte.',
      'Un titular que abra una tensión o una pregunta.',
      'Un contraste claro con lo que aparece alrededor.',
    ],
  },
  {
    id: 'conectar',
    eyebrow: 'Pilar 02',
    title: 'Conectar',
    subtitle: 'Después de mirar, la persona necesita reconocer que el anuncio tiene relación con su realidad.',
    time: '40–45 min',
    kind: 'bullets',
    bullets: ['“Esto es para mí”.', '“Estoy viviendo este problema”.', '“Necesito resolver esto”.'],
  },
  {
    id: 'comunicar',
    eyebrow: 'Pilar 03',
    title: 'Comunicar el resultado',
    subtitle: 'Las personas no compran solamente un producto. Compran la consecuencia que esperan generar en su vida.',
    time: '45–50 min',
    kind: 'statement',
    highlight: 'No vendas el objeto. Haz visible el cambio.',
  },
  {
    id: 'dirigir',
    eyebrow: 'Pilar 04',
    title: 'Dirigir',
    subtitle: 'El anuncio necesita dejar claro qué debe hacer la persona después de entender la propuesta.',
    time: '50–55 min',
    kind: 'bullets',
    bullets: ['Enviar un mensaje.', 'Reservar un horario.', 'Visitar el local o ingresar al sitio.', 'Comprar o solicitar información.'],
    highlight: 'CTA: Call to Action · llamado a la acción.',
  },
  {
    id: 'proceso',
    eyebrow: 'Visión general',
    title: 'Vamos a trabajar dentro de GPT en tres etapas.',
    subtitle: 'Cada etapa transforma información en una salida más concreta.',
    time: '55–65 min',
    kind: 'process',
    process: [
      {
        step: '01',
        title: 'Investigación y briefing',
        description: 'Definir público, contexto, objetivo y la información relevante para el anuncio.',
      },
      {
        step: '02',
        title: 'Líneas creativas',
        description: 'Desarrollar enfoques aplicando los cuatro pilares fundamentales.',
      },
      {
        step: '03',
        title: 'Creación del anuncio',
        description: 'Transformar la línea elegida en una pieza consistente y lista para usar.',
      },
    ],
  },
  {
    id: 'etapa-1',
    eyebrow: 'Etapa 01',
    title: 'Investigación y briefing',
    subtitle: 'No se trata de juntar la mayor cantidad posible de información, sino la información que realmente cambia la pieza.',
    time: '65–75 min',
    kind: 'bullets',
    bullets: [
      'Quién es el público objetivo.',
      'Qué producto o servicio estamos comunicando.',
      'Cuál es el contexto y el objetivo del anuncio.',
      'Qué problema, deseo o situación es relevante.',
    ],
  },
  {
    id: 'etapa-2',
    eyebrow: 'Etapa 02',
    title: 'Líneas creativas',
    subtitle: 'Usamos el briefing para desarrollar distintas formas de presentar la misma oferta.',
    time: '75–80 min',
    kind: 'bullets',
    bullets: [
      'Variar el gancho y la forma de romper el patrón.',
      'Explorar diferentes conexiones con el público.',
      'Comunicar resultados concretos.',
      'Definir una acción clara.',
    ],
  },
  {
    id: 'etapa-3',
    eyebrow: 'Etapa 03',
    title: 'Creación del anuncio',
    subtitle: 'GPT ayuda a volver el proceso semiautomático y mantener consistencia entre piezas.',
    time: '80–85 min',
    kind: 'statement',
    highlight: 'La herramienta acelera. El criterio decide.',
  },
  {
    id: 'case',
    eyebrow: 'Manos a la obra',
    title: 'Caso: pet shop con retiro y entrega a domicilio.',
    subtitle: 'Un servicio fácil de entender, con un problema claro y un resultado visualmente demostrable.',
    time: '85–95 min',
    kind: 'case',
    bullets: [
      'Problema: falta de tiempo o dificultad para trasladar a la mascota.',
      'Servicio: baño, peluquería, retiro y entrega.',
      'Resultado: mascota limpia, cuidada y de vuelta en casa.',
    ],
    highlight: 'El dueño resuelve el cuidado sin perder tiempo.',
  },
  {
    id: 'practica',
    eyebrow: 'Práctica guiada',
    title: 'Vamos a construir el briefing del caso.',
    subtitle: 'La salida de esta clase será la materia prima para desarrollar las líneas creativas en la próxima etapa.',
    time: '95–115 min',
    kind: 'practice',
    bullets: [
      'Objetivo del anuncio.',
      'Contexto del negocio y del servicio.',
      'Público objetivo.',
      'Ubicación geográfica.',
      'Problema, deseo y resultado esperado.',
    ],
  },
  {
    id: 'cierre',
    eyebrow: 'Cierre',
    title: 'Un buen creativo comienza antes del diseño.',
    subtitle: 'Comienza cuando entendemos a quién hablamos, qué resultado importa y qué acción queremos provocar.',
    time: '115–120 min',
    kind: 'statement',
    highlight: 'Atención → conexión → resultado → acción.',
  },
]

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
    </svg>
  )
}

function FullscreenIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
}

function renderSlide(slide: Slide) {
  if (slide.kind === 'cover') {
    return (
      <div className="cover-layout">
        <div>
          <div className="course-mark">IA</div>
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <p className="lead">{slide.subtitle}</p>
        </div>
        <div className="cover-orbit" aria-hidden="true"><span /><span /><span /></div>
      </div>
    )
  }

  if (slide.kind === 'pillars' && slide.pillars) {
    return (
      <div className="slide-content">
        <header className="slide-heading">
          <p className="eyebrow">{slide.eyebrow}</p>
          <h2>{slide.title}</h2>
        </header>
        <div className="pillar-grid">
          {slide.pillars.map((pillar, index) => (
            <article className="pillar-card" key={pillar.title} style={{ animationDelay: `${index * 90}ms` }}>
              <span>{pillar.accent}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    )
  }

  if (slide.kind === 'process' && slide.process) {
    return (
      <div className="slide-content">
        <header className="slide-heading">
          <p className="eyebrow">{slide.eyebrow}</p>
          <h2>{slide.title}</h2>
          <p className="lead">{slide.subtitle}</p>
        </header>
        <div className="process-grid">
          {slide.process.map((item, index) => (
            <article className="process-card" key={item.step} style={{ animationDelay: `${index * 120}ms` }}>
              <span className="process-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    )
  }

  if (slide.kind === 'case') {
    return (
      <div className="case-layout">
        <section className="slide-heading">
          <p className="eyebrow">{slide.eyebrow}</p>
          <h2>{slide.title}</h2>
          <p className="lead">{slide.subtitle}</p>
          {slide.highlight && <div className="highlight-box">{slide.highlight}</div>}
        </section>
        <section className="case-card">
          <div className="pet-visual" aria-hidden="true">🐕</div>
          <ul className="bullet-list">
            {slide.bullets?.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </section>
      </div>
    )
  }

  return (
    <div className={`slide-content ${slide.kind === 'practice' ? 'practice-slide' : ''}`}>
      <header className="slide-heading">
        <p className="eyebrow">{slide.eyebrow}</p>
        <h2>{slide.title}</h2>
        {slide.subtitle && <p className="lead">{slide.subtitle}</p>}
      </header>
      {slide.bullets && (
        <ul className="bullet-list large-list">
          {slide.bullets.map((bullet, index) => (
            <li key={bullet} style={{ animationDelay: `${index * 95}ms` }}>{bullet}</li>
          ))}
        </ul>
      )}
      {slide.highlight && <div className="highlight-box">{slide.highlight}</div>}
    </div>
  )
}

export function App() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]
  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index])

  const goTo = (nextIndex: number) => {
    setIndex(Math.min(Math.max(nextIndex, 0), slides.length - 1))
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(event.key)) {
        event.preventDefault()
        goTo(index + 1)
      }

      if (['ArrowLeft', 'PageUp', 'Backspace'].includes(event.key)) {
        event.preventDefault()
        goTo(index - 1)
      }

      if (event.key === 'Home') {
        event.preventDefault()
        goTo(0)
      }

      if (event.key === 'End') {
        event.preventDefault()
        goTo(slides.length - 1)
      }

      if (event.key.toLowerCase() === 'f') {
        event.preventDefault()
        void document.documentElement.requestFullscreen?.()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [index])

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen()
      return
    }
    await document.documentElement.requestFullscreen?.()
  }

  return (
    <main className="deck-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="deck-stage" aria-live="polite">
        <div className="slide-frame" key={slide.id}>{renderSlide(slide)}</div>
      </section>

      <footer className="deck-controls">
        <div className="progress-track" aria-hidden="true">
          <div className="progress-value" style={{ width: `${progress}%` }} />
        </div>

        <div className="control-row">
          <div className="slide-meta">
            <span>{slide.time}</span>
            <strong>{String(index + 1).padStart(2, '0')} / {slides.length}</strong>
          </div>

          <div className="navigation-controls">
            <button aria-label="Diapositiva anterior" disabled={index === 0} onClick={() => goTo(index - 1)}>
              <ArrowIcon direction="left" />
            </button>
            <button aria-label="Pantalla completa" onClick={() => void toggleFullscreen()}>
              <FullscreenIcon />
            </button>
            <button aria-label="Próxima diapositiva" disabled={index === slides.length - 1} onClick={() => goTo(index + 1)}>
              <ArrowIcon direction="right" />
            </button>
          </div>

          <div className="keyboard-hint">← → para navegar · F pantalla completa</div>
        </div>
      </footer>
    </main>
  )
}
