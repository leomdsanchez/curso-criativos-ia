export type CourseView = 'home' | 'lesson-1-overview' | 'lesson-1'

export const LESSON_ONE_OVERVIEW_HASH = '#aula-1'
const LESSON_ONE_SLIDE_PREFIX = '#aula-1/'

export function lessonOneSlideHash(slideId: string) {
  return `${LESSON_ONE_SLIDE_PREFIX}${slideId}`
}

export function getLessonOneSlideId(hash = window.location.hash) {
  if (!hash.startsWith(LESSON_ONE_SLIDE_PREFIX)) return null
  return decodeURIComponent(hash.slice(LESSON_ONE_SLIDE_PREFIX.length))
}

export function getCourseView(hash = window.location.hash): CourseView {
  if (getLessonOneSlideId(hash)) return 'lesson-1'
  if (hash === LESSON_ONE_OVERVIEW_HASH) return 'lesson-1-overview'
  return 'home'
}
