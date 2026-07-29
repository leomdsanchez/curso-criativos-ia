import { lessonOneSlides, type Slide } from './data/lesson-1'
import { useSlideNavigation } from './navigation/useSlideNavigation'

const slideIds = lessonOneSlides.map((slide) => slide.id)

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

function SlideHeading({ slide }: { slide: Slide }) {
  return (
    <header className="slide-heading">
      <p className="eyebrow">{slide.eyebrow}</p>
      <h2>{slide.title}</h2>
      {slide.subtitle && <p className="lead">{slide.subtitle}</p>}
    </header>
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
        <SlideHeading slide={slide} />
        <div className="pillar-summary">
          {slide.pillars.map((pillar) => <span key={pillar.title}>{pillar.title}</span>)}
        </div>
      </div>
    )
  }

  if (slide.kind === 'case') {
    return (
      <div className="case-layout">
        <section>
          <SlideHeading slide={slide} />
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
      <SlideHeading slide={slide} />
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
  const { index, next, previous } = useSlideNavigation(slideIds)
  const slide = lessonOneSlides[index]
  const progress = ((index + 1) / lessonOneSlides.length) * 100

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
            <strong>{String(index + 1).padStart(2, '0')} / {lessonOneSlides.length}</strong>
          </div>

          <div className="navigation-controls">
            <button aria-label="Diapositiva anterior" disabled={index === 0} onClick={previous}>
              <ArrowIcon direction="left" />
            </button>
            <button aria-label="Pantalla completa" onClick={() => void toggleFullscreen()}>
              <FullscreenIcon />
            </button>
            <button aria-label="Próxima diapositiva" disabled={index === lessonOneSlides.length - 1} onClick={next}>
              <ArrowIcon direction="right" />
            </button>
          </div>

          <div className="keyboard-hint">← → para navegar · F pantalla completa</div>
        </div>
      </footer>
    </main>
  )
}
