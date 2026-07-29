export type CourseView = 'home' | 'lesson-1-overview' | 'lesson-1'

const LEGACY_LESSON_ONE_CONTENT_HASH = '#aula-1-contenido'

export function lessonOverviewHash(lessonNumber: number) {
  return `#aula-${lessonNumber}`
}

export function lessonSlideHash(lessonNumber: number, slideId: string) {
  return `${lessonOverviewHash(lessonNumber)}/${encodeURIComponent(slideId)}`
}

export function getLessonSlideId(lessonNumber: number, hash = window.location.hash) {
  const prefix = `${lessonOverviewHash(lessonNumber)}/`
  if (!hash.startsWith(prefix)) return null

  const encodedSlideId = hash.slice(prefix.length)
  if (!encodedSlideId) return null

  try {
    return decodeURIComponent(encodedSlideId)
  } catch {
    return null
  }
}

export function getCourseView(hash = window.location.hash): CourseView {
  if (hash === LEGACY_LESSON_ONE_CONTENT_HASH || getLessonSlideId(1, hash)) return 'lesson-1'
  if (hash === lessonOverviewHash(1)) return 'lesson-1-overview'
  return 'home'
}
