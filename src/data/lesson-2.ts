import type { SlideDeck } from '../types/slide'

const DESIGN_PROJECT_PROMPT = `Eres un diseñador experimentado, con formación publicitaria y conectado con el mercado actual. Odias la monotonía y repetir tendencias: generas tendencias y casos relevantes a partir de tu experiencia. En este proyecto recibirás un briefing. Consulta las fuentes del proyecto para identificar el logo y el lenguaje visual.

Usa las referencias de las fuentes del proyecto para orientar tu creación y la generación de imágenes, manteniendo siempre la paleta de verdes del logo y el logo original de la empresa, que también se encuentra en las fuentes.

Aplica el lenguaje visual y el logo, usando el briefing para crear la pieza solicitada.

# PROCESO
1. Recibe el briefing.
2. Verifica en las fuentes del proyecto el logo y el lenguaje visual de referencia.
3. Valida lo que vas a hacer con un subagente 10/10, enviándole todas las instrucciones recibidas (incluidas las instrucciones del proyecto).
4. Usa el logo y el lenguaje visual como input para generar la pieza solicitada en el briefing.

## Recomendaciones
- Ejecuta el 100% usando tu capacidad de generación de imágenes.
- Si se solicita más de una imagen, genera cada una de forma independiente.
- Usa el logo y los colores solicitados.`

const CHAT_CAROUSEL_PROMPT = `Necesito que generes las imágenes del carrusel a continuación utilizando como input el logo que te envié y la referencia de diseño. Utiliza tonos verdes, al igual que el logo.

---

[BRIEFING]

---

Crea una sola imagen por vez. Empecemos con la primera imagen.`

export const lessonTwoSlides = [
  {
    id: 'portada',
    eyebrow: 'Clase 02',
    title: 'Diseño con IA',
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
  {
    id: 'sistema-creativo',
    eyebrow: 'Después del agendamiento',
    title: 'Vamos a montar nuestro sistema creativo.',
    subtitle: 'Usaremos la investigación y el briefing de la clase anterior para darle contexto a la IA.',
    time: '20–25 min',
    density: 'compact',
    kind: 'bullets',
    bullets: [
      'Reunir las instrucciones, la investigación y el briefing.',
      'Configurar un proyecto para el negocio.',
      'Pedir las primeras líneas creativas y los primeros copies.',
    ],
    highlight: 'Con Work automatizamos más. Con Chat avanzamos paso a paso.',
  },
  {
    id: 'referencias-visuales',
    eyebrow: 'Antes de crear',
    title: 'Buscá referencias, no plantillas para copiar.',
    subtitle: 'Explorá distintas fuentes y guardá solamente lo que ayuda a orientar la pieza.',
    time: '25–30 min',
    kind: 'resources',
    references: [
      {
        name: 'Behance',
        url: 'https://www.behance.net/galleries/advertising',
        focus: 'Campañas completas',
        description: 'Identidad, dirección de arte y aplicación de una idea en varias piezas.',
      },
      {
        name: 'Dribbble',
        url: 'https://dribbble.com/shots/popular',
        focus: 'Soluciones visuales',
        description: 'Composición, estilos, tipografía y recursos gráficos para explorar.',
      },
      {
        name: 'Ads of the World',
        url: 'https://www.adsoftheworld.com/',
        focus: 'Publicidad real',
        description: 'Campañas, conceptos y ejecuciones publicadas por marcas y agencias.',
      },
      {
        name: 'Pinterest',
        url: 'https://www.pinterest.com/',
        focus: 'Moodboards',
        description: 'Referencias de color, fotografía, formato y atmósfera visual.',
      },
    ],
  },
  {
    id: 'work-vs-chat',
    eyebrow: 'Dos caminos',
    title: 'Work entrega más consistencia. Chat exige más conducción.',
    subtitle: 'La diferencia no es si se puede hacer, sino cuánto contexto y control debemos aportar.',
    time: '30–40 min',
    kind: 'comparison',
    comparison: [
      {
        label: 'Cuenta con Work',
        title: 'GPT Work',
        tone: 'accent',
        items: [
          'Proyecto con instrucciones que se mantienen.',
          'Investigación, briefing y referencias reunidos como fuentes.',
          'Puede planificar y resolver varias etapas con el mismo contexto.',
          'Menos repetición y resultados más consistentes.',
        ],
        footer: 'Mejor resultado con menos conducción.',
      },
      {
        label: 'Cuenta gratuita',
        title: 'GPT Chat',
        tone: 'neutral',
        items: [
          'Empezamos un chat con el contexto disponible.',
          'Trabajamos de forma progresiva: una etapa por vez.',
          'Hay que revisar, corregir y pedir explícitamente el siguiente paso.',
          'Lleva más trabajo manual, pero el proceso sigue siendo viable.',
        ],
        footer: 'Más trabajo, pero sin contratar un diseñador.',
      },
    ],
  },
  {
    id: 'prompt-disenador',
    eyebrow: 'Instrucciones del proyecto',
    title: 'Prompt para configurar GPT Work.',
    subtitle: 'Copialo y pegalo en las instrucciones del proyecto.',
    time: '40–45 min',
    kind: 'statement',
    copyText: {
      label: 'Copiar prompt',
      successLabel: 'Prompt copiado',
      content: DESIGN_PROJECT_PROMPT,
    },
  },
  {
    id: 'prompt-chat',
    eyebrow: 'Instrucción progresiva',
    title: 'Prompt para GPT Chat.',
    subtitle: 'Pegá el briefing y avanzá con una imagen por vez.',
    time: '45–50 min',
    kind: 'statement',
    copyText: {
      label: 'Copiar prompt',
      successLabel: 'Prompt copiado',
      content: CHAT_CAROUSEL_PROMPT,
    },
  },
] satisfies SlideDeck
