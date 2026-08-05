import { describe, expect, it } from 'vitest'
import {
  BRIEFING_HASH,
  getCourseView,
  getLessonSlideId,
  lessonOverviewHash,
  lessonSlideHash,
  SURVEY_HASH,
} from './routes'
import { surveyAnswerKey, surveyQuestions } from './data/survey'

describe('course routes', () => {
  it('builds overview and encoded slide hashes', () => {
    expect(lessonOverviewHash(2)).toBe('#aula-2')
    expect(lessonSlideHash(2, 'abertura prática')).toBe('#aula-2/abertura%20pr%C3%A1tica')
  })

  it('reads valid slide IDs and rejects malformed hashes', () => {
    expect(getLessonSlideId(1, '#aula-1/presentacion')).toBe('presentacion')
    expect(getLessonSlideId(1, '#aula-2/portada')).toBeNull()
    expect(getLessonSlideId(1, '#aula-1/%E0%A4%A')).toBeNull()
  })

  it('maps hashes to the correct portal views', () => {
    expect(getCourseView('')).toBe('home')
    expect(getCourseView(BRIEFING_HASH)).toBe('briefing')
    expect(getCourseView(SURVEY_HASH)).toBe('survey')
    expect(getCourseView('#aula-1')).toBe('lesson-1-overview')
    expect(getCourseView('#aula-1/portada')).toBe('lesson-1')
    expect(getCourseView('#aula-2')).toBe('lesson-2')
    expect(getCourseView('#aula-2/portada')).toBe('lesson-2')
  })

  it('keeps the final survey concrete and balances correct alternatives', () => {
    expect(surveyQuestions).toHaveLength(20)
    expect(surveyAnswerKey).toHaveLength(20)
    expect(surveyAnswerKey).toEqual(expect.arrayContaining(['A', 'B', 'C', 'D']))

    for (const letter of ['A', 'B', 'C', 'D']) {
      expect(surveyAnswerKey.filter((answer) => answer === letter)).toHaveLength(5)
    }
  })
})
