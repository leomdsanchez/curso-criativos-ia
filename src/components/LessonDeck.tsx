import { useEffect, useMemo, useRef, useState } from 'react'
import { useFullscreen } from '../navigation/useFullscreen'
import { useSlideNavigation } from '../navigation/useSlideNavigation'
import type { CopyLinkAction, CopyTextAction, Slide, SlideDeck } from '../types/slide'
import { copyText } from '../utils/clipboard'

type LessonDeckProps = {
  lessonNumber: number
  slides: SlideDeck
  courseTitle?: string
}

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

function CopyLinkButton({ action }: { action: CopyLinkAction }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      const url = new URL(action.hash, window.location.href).toString()
      await copyText(url)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button className="slide-copy-link" type="button" onClick={() => void handleCopy()}>
      {copied ? 'Enlace copiado' : action.label}
    </button>
  )
}

function CopyTextButton({ action }: { action: CopyTextAction }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await copyText(action.content)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button className="slide-copy-link" type="button" onClick={() => void handleCopy()}>
      {copied ? action.successLabel ?? 'Texto copiado' : action.label}
    </button>
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

function SlideContent({ slide }: { slide: Slide }) {
  if (slide.kind === 'cover') {
    return (
      <div className="cover-layout">
        <div>
          <div className="course-mark">IA</div>
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          {slide.subtitle && <p className="lead">{slide.subtitle}</p>}
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

  if (slide.kind === 'briefing') {
    return (
      <div className="briefing-slide-layout">
        <SlideHeading slide={slide} />
        <section className="briefing-slide-card">
          <ul>
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
      {slide.copyLink && <CopyLinkButton action={slide.copyLink} />}
      {slide.copyText && <CopyTextButton action={slide.copyText} />}
    </div>
  )
}

export function LessonDeck({ lessonNumber, slides, courseTitle = 'IA aplicada al marketing' }: LessonDeckProps) {
  const slideIds = useMemo(() => slides.map((slide) => slide.id), [slides])
  const stageRef = useRef<HTMLElement>(null)
  const { index, next, previous } = useSlideNavigation({
    lessonNumber,
    slideIds,
    navigationRef: stageRef,
  })
  const toggleFullscreen = useFullscreen()
  const slide = slides[index]
  const progress = ((index + 1) / slides.length) * 100

  useEffect(() => {
    stageRef.current?.scrollTo({ top: 0, behavior: 'auto' })
    document.title = `${slide.title} · ${courseTitle}`
  }, [courseTitle, slide.title])

  useEffect(() => () => {
    document.title = courseTitle
  }, [courseTitle])

  return (
    <main className="deck-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="deck-stage" aria-live="polite" ref={stageRef}>
        <div className="slide-frame" key={slide.id}><SlideContent slide={slide} /></div>
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
            <button type="button" aria-label="Diapositiva anterior" disabled={index === 0} onClick={previous}>
              <ArrowIcon direction="left" />
            </button>
            <button type="button" aria-label="Pantalla completa" onClick={() => void toggleFullscreen()}>
              <FullscreenIcon />
            </button>
            <button type="button" aria-label="Próxima diapositiva" disabled={index === slides.length - 1} onClick={next}>
              <ArrowIcon direction="right" />
            </button>
          </div>

          <div className="keyboard-hint">← → para navegar · F pantalla completa</div>
        </div>
      </footer>
    </main>
  )
}
