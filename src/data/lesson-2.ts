import type { SlideDeck } from '../types/slide'

export const lessonTwoSlides = [
  {
    id: 'portada',
    eyebrow: 'Clase 02',
    title: 'Copy y líneas creativas',
    subtitle: 'Primero vamos a cerrar el proceso anterior con una automatización.',
    time: '00–05 min',
    kind: 'cover',
  },
  {
    id: 'revision',
    eyebrow: 'Revisión rápida',
    title: '¿Qué aprendimos en la clase anterior?',
    time: '05–10 min',
    kind: 'bullets',
    bullets: [
      'La función del anuncio es generar flujo hacia el negocio.',
      'Antes de vender, el anuncio compite en el mercado de la atención.',
      'Los cuatro pilares: romper el patrón, conectar, comunicar el resultado y dirigir hacia una acción.',
    ],
  },
  {
    id: 'ia-trabajando-sola',
    eyebrow: 'IA trabajando sola',
    title: 'Vos definís la tarea. La IA la ejecuta.',
    subtitle: 'Puede repetir un proceso sin que tengas que iniciarlo cada vez.',
    time: '10–15 min',
    kind: 'statement',
    highlight: 'Puede trabajar aunque no estés usando ChatGPT.',
  },
  {
    id: 'tarea-programada',
    eyebrow: 'Agendamiento',
    title: 'Vamos a crear una tarea programada.',
    subtitle: 'Definimos qué debe hacer, cuándo y con qué frecuencia.',
    time: '15–20 min',
    kind: 'statement',
    highlight: 'Ejemplo: cada lunes, traer nuevas ideas.',
  },
] satisfies SlideDeck
