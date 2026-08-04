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
    id: 'cierre-clase-anterior',
    eyebrow: 'Cierre del proceso anterior',
    title: 'Lo que hicimos una vez, la IA puede repetirlo.',
    subtitle: 'En la clase anterior construimos el contexto y el proceso para generar ideas. Ahora vamos a convertirlo en una tarea recurrente para que la inteligencia artificial pueda ejecutarlo por sí sola.',
    time: '10–15 min',
    kind: 'statement',
    highlight: 'El objetivo: transformar un ejercicio manual en una rutina automática.',
  },
  {
    id: 'que-vamos-a-hacer',
    eyebrow: 'Objetivo de esta práctica',
    title: 'Vamos a crear una tarea programada.',
    subtitle: 'Vamos a enseñarle a ChatGPT qué debe hacer y cuándo debe repetirlo.',
    time: '15–20 min',
    kind: 'bullets',
    bullets: [
      'Definir qué debe hacer la inteligencia artificial.',
      'Indicar cuándo y con qué frecuencia debe hacerlo.',
      'Incluir en la instrucción el contexto necesario.',
      'Revisar y activar la tarea programada.',
    ],
  },
] satisfies SlideDeck
