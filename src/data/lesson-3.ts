import type { SlideDeck } from '../types/slide'

export const lessonThreeSlides = [
  {
    id: 'portada',
    eyebrow: 'Clase 03 · Automatización',
    title: 'Hoy vamos a construir la máquina.',
    subtitle: 'Ya aprendimos a crear ideas, escribir el copy y diseñar las piezas. Ahora vamos a conectar esas etapas para convertirlas en un sistema de trabajo.',
    time: '00–02 min',
    kind: 'cover',
  },
  {
    id: 'cuatro-formas',
    eyebrow: 'Evolución del uso de la IA',
    title: 'Cuatro formas de utilizar la inteligencia artificial.',
    subtitle: 'La evolución no consiste solamente en obtener mejores respuestas. Consiste en delegar más partes del trabajo.',
    time: '02–09 min',
    kind: 'concept-grid',
    cards: [
      {
        label: '01',
        title: 'Conversacional',
        description: 'Hacemos una pregunta. La inteligencia artificial responde.',
        icon: 'message',
      },
      {
        label: '02',
        title: 'Por tareas',
        description: 'Solicitamos una tarea concreta, pero seguimos indicando cada paso.',
        icon: 'task',
      },
      {
        label: '03',
        title: 'Delegada',
        description: 'Entregamos un objetivo. El agente planifica, ejecuta y revisa.',
        icon: 'agent',
      },
      {
        label: '04',
        title: 'Integrada',
        description: 'El agente actúa dentro de nuestras aplicaciones, archivos y procesos.',
        icon: 'network',
      },
    ],
  },
  {
    id: 'ia-versus-agente',
    eyebrow: 'Concepto clave',
    title: 'La inteligencia artificial es el motor.',
    subtitle: 'Un agente es ese motor dentro de un sistema que le permite trabajar con mayor autonomía.',
    time: '09–12 min',
    kind: 'agent-comparison',
    cards: [
      {
        label: 'Motor',
        title: 'Inteligencia artificial',
        description: 'Interpreta información, razona y genera respuestas.',
        icon: 'brain',
      },
      {
        label: 'Sistema',
        title: 'Agente',
        description: 'Combina la IA con un objetivo, contexto, capacidades, decisiones y permisos.',
        icon: 'machine',
      },
    ],
    highlight: 'La IA genera una respuesta. El agente trabaja para alcanzar un objetivo.',
  },
  {
    id: 'ciclo-agente',
    eyebrow: 'Autonomía en acción',
    title: 'Un agente trabaja en ciclos.',
    subtitle: 'No necesita recibir una nueva instrucción después de cada paso.',
    time: '12–17 min',
    kind: 'agent-cycle',
    steps: [
      {
        title: 'Comprender',
        description: 'Interpreta el objetivo y el contexto.',
      },
      {
        title: 'Planificar',
        description: 'Decide qué necesita hacer y en qué orden.',
      },
      {
        title: 'Actuar',
        description: 'Ejecuta el próximo paso.',
      },
      {
        title: 'Observar',
        description: 'Analiza el resultado de la acción.',
      },
      {
        title: 'Ajustar',
        description: 'Corrige el plan y continúa trabajando.',
      },
    ],
    highlight: 'Cuando alcanza el objetivo, entrega el resultado. Este ciclo es gestionado por un sistema llamado agent harness.',
  },
  {
    id: 'entorno-agente',
    eyebrow: 'El entorno del agente',
    title: 'El modelo piensa. El entorno le permite trabajar.',
    subtitle: 'Para actuar con autonomía, el agente necesita un sistema que defina qué sabe, qué puede hacer y hasta dónde puede llegar.',
    time: '17–20 min',
    kind: 'agent-environment',
    cards: [
      {
        title: 'Objetivo e instrucciones',
        description: 'Definen qué debe hacer y cuáles son sus límites.',
        icon: 'instructions',
      },
      {
        title: 'Skills',
        description: 'Le enseñan cómo realizar determinados trabajos.',
        icon: 'skill',
      },
      {
        title: 'Herramientas',
        description: 'Le permiten ejecutar acciones concretas.',
        icon: 'tool',
      },
      {
        title: 'MCP y plugins',
        description: 'Lo conectan con aplicaciones y fuentes de información.',
        icon: 'plug',
      },
      {
        title: 'Agendamientos y webhooks',
        description: 'Determinan cuándo debe comenzar una tarea.',
        icon: 'trigger',
      },
      {
        title: 'Permisos y aprobaciones',
        description: 'Definen qué puede hacer solo y qué necesita autorización.',
        icon: 'approval',
      },
    ],
  },
] satisfies SlideDeck
