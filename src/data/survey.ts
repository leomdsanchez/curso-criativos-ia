export const surveyConfig = {
  // Ruta de la encuesta dentro del sitio.
  formUrl: '#encuesta',
  // Web App de Apps Script que registra y devuelve las respuestas.
  appScriptUrl: 'https://script.google.com/macros/s/AKfycbyoibcWZGydrwNvrwLOCmUBXZGJpP1vK_cxmYmyzSzzbOvzEveXbXPNloa8DoRQOmo-/exec',
  // Enlace de respaldo para abrir la pestaña de respuestas en Google Sheets.
  sheetUrl: 'https://docs.google.com/spreadsheets/d/1ejKX6cVpZPCN1KhLHjS1BY8HGRzGCvLy0jSpCJyiNH4/edit?gid=0#gid=0',
} as const

export const surveyQuestions = [
  {
    question: '¿Cuál es la función principal de un anuncio?',
    options: ['Generar flujo hacia el negocio.', 'Cerrar una venta inmediatamente.', 'Conseguir seguidores sin contexto.', 'Reemplazar el trabajo del negocio.'],
  },
  {
    question: '¿Qué necesitamos antes de trabajar una idea con IA?',
    options: ['Un briefing claro.', 'Una imagen terminada.', 'Un carrusel publicado.', 'Un listado de seguidores.'],
  },
  {
    question: '¿Qué debe generar el prompt corregido de la clase 1?',
    options: ['Solamente ideas creativas.', 'Copy, imágenes y publicación final.', 'Una pieza lista para publicar.', 'Un carrusel completo.'],
  },
  {
    question: '¿Qué recibe el proyecto de Copy para empezar?',
    options: ['Una idea creativa ya seleccionada.', 'Una imagen terminada.', 'Solo el logo.', 'Una referencia sin contexto.'],
  },
  {
    question: '¿Qué incluye la planificación creativa?',
    options: ['Formato, textos, descripción visual y CTA.', 'Solo el logo y los colores.', 'Únicamente la descripción de la publicación.', 'Todas las imágenes generadas.'],
  },
  {
    question: '¿Cuántas opciones propone el proyecto de Copy?',
    options: ['Tres opciones dentro del mismo concepto.', 'Una única opción definitiva.', 'Diez imágenes terminadas.', 'Dos anuncios sin copy.'],
  },
  {
    question: 'Si el formato no está informado, ¿qué debe preguntar Copy?',
    options: ['Si será Feed, Stories o ambos; y si será una pieza o carrusel.', 'Qué filtro tiene la foto.', 'Qué música se usará.', 'Qué día se publicará.'],
  },
  {
    question: 'Después de aprobar una opción de Copy, ¿qué se prepara?',
    options: ['La descripción de la publicación.', 'Las imágenes finales.', 'Un logo nuevo.', 'Una nueva investigación.'],
  },
  {
    question: '¿En cuántos bloques de código se entrega el resultado final de Copy?',
    options: ['Dos: planificación creativa y descripción de la publicación.', 'Uno: una lista de ideas.', 'Tres: investigación, logo y diseño.', 'Cuatro: una imagen por formato.'],
  },
  {
    question: '¿Qué llevamos desde Copy al proyecto de Diseño?',
    options: ['La planificación creativa.', 'La publicación ya subida.', 'Todas las opciones sin elegir.', 'El briefing vacío.'],
  },
  {
    question: '¿Para qué sirven las referencias visuales?',
    options: ['Para orientar el lenguaje visual de una pieza propia.', 'Para copiar una campaña completa.', 'Para reemplazar el logo.', 'Para evitar el briefing.'],
  },
  {
    question: '¿Qué fuentes deben estar disponibles en el proyecto de Diseño?',
    options: ['Logo original y referencias visuales.', 'Solo un texto de ejemplo.', 'Fotos personales del alumno.', 'Las respuestas de la encuesta.'],
  },
  {
    question: '¿Qué prompt se usa en GPT Work y GPT Chat?',
    options: ['El mismo prompt del proyecto.', 'Un prompt totalmente diferente en cada uno.', 'Ningún prompt en GPT Chat.', 'Solo un prompt de imágenes.'],
  },
  {
    question: 'En GPT Chat, antes de pegar la planificación creativa, ¿qué preguntamos?',
    options: ['¿Cuáles son las fuentes y las instrucciones de este proyecto?', '¿Podés generar todo el carrusel en un archivo?', '¿Podés cambiar el concepto?', '¿Cuántos seguidores tiene la cuenta?'],
  },
  {
    question: '¿Qué hacemos después de que GPT Chat responda sobre las fuentes e instrucciones?',
    options: ['Pegamos la planificación creativa.', 'Creamos otro briefing desde cero.', 'Pedimos todas las imágenes juntas.', 'Descartamos las referencias.'],
  },
  {
    question: '¿Cómo se genera un carrusel?',
    options: ['Una imagen independiente por cada página.', 'Todas las páginas dentro de una sola imagen.', 'Una imagen sin planificación.', 'Solo con texto, sin imagen.'],
  },
  {
    question: '¿Cómo avanzamos al generar varias imágenes?',
    options: ['Revisamos una y luego pedimos la siguiente.', 'Pedimos todas al mismo tiempo.', 'Publicamos la primera sin revisar.', 'Cambiamos el concepto en cada página.'],
  },
  {
    question: '¿Qué tipo de ajustes hacemos sobre una imagen generada?',
    options: ['Cambios puntuales.', 'Un concepto totalmente nuevo en cada ajuste.', 'Ninguna revisión.', 'Otra investigación de mercado.'],
  },
  {
    question: '¿Para qué adaptamos una pieza?',
    options: ['Para usarla en Feed o Stories manteniendo el concepto.', 'Para cambiar el logo de la empresa.', 'Para eliminar la planificación.', 'Para evitar usar referencias.'],
  },
  {
    question: '¿Para qué sirve programar una tarea?',
    options: ['Para organizar una acción que se repetirá en un momento definido.', 'Para generar imágenes sin instrucciones.', 'Para reemplazar el briefing.', 'Para omitir la revisión del resultado.'],
  },
] as const

export function hasSurveySheetUrl() {
  return surveyConfig.sheetUrl.trim().length > 0
}
