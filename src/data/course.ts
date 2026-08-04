export type LessonSummary = {
  number: string
  title: string
  description: string
  status: 'available' | 'soon'
}

export const COURSE_TITLE = 'IA aplicada al marketing'

export const courseLessons = [
  {
    number: '01',
    title: 'De la atención al briefing',
    description: 'Atención, anuncios y construcción del briefing.',
    status: 'available',
  },
  {
    number: '02',
    title: 'Copy y líneas creativas',
    description: 'Automatización, ideas, enfoques y textos para las piezas.',
    status: 'available',
  },
  {
    number: '03',
    title: 'Creación de piezas con IA',
    description: 'Diseño y adaptación a distintos formatos.',
    status: 'soon',
  },
] satisfies readonly LessonSummary[]
