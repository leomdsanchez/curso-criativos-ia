export type Pillar = {
  title: string
}

export type Slide = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  time: string
  kind: 'cover' | 'statement' | 'bullets' | 'pillars' | 'case' | 'practice'
  bullets?: readonly string[]
  highlight?: string
  pillars?: readonly Pillar[]
}

export type SlideDeck = readonly [Slide, ...Slide[]]

const pillars = [
  { title: 'Romper el patrón' },
  { title: 'Conectar' },
  { title: 'Comunicar' },
  { title: 'Dirigir' },
] satisfies readonly Pillar[]

export const lessonOneSlides = [
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
    subtitle: 'Su función principal es generar flujo: llevar personas hacia el negocio.',
    time: '12–20 min',
    kind: 'statement',
    highlight: 'El anuncio abre la puerta. La venta ocurre después.',
  },
  {
    id: 'atencion',
    eyebrow: 'La pregunta clave',
    title: '¿Cómo genera flujo un anuncio?',
    subtitle: 'Primero necesita conquistar algo mucho más escaso que el dinero: la atención.',
    time: '20–25 min',
    kind: 'statement',
    highlight: 'Sin atención, no hay mensaje. Sin mensaje, no hay acción.',
  },
  {
    id: 'mercado',
    eyebrow: 'Mercado de la atención',
    title: 'El mercado de la atención',
    subtitle: 'Las empresas compiten contra videos, mensajes, noticias, entretenimiento y cientos de estímulos al mismo tiempo.',
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
    id: 'etapa-1',
    eyebrow: 'Etapa 01',
    title: 'Investigación y briefing',
    subtitle: 'No se trata de juntar la mayor cantidad posible de información, sino la información que realmente cambia la pieza.',
    time: '55–70 min',
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
    time: '70–80 min',
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
] satisfies SlideDeck
