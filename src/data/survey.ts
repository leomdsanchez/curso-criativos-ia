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
    question: '¿Cuál es la función principal de un briefing antes de crear una pieza de comunicación?',
    options: ['Elegir automáticamente la tipografía y los colores finales.', 'Reunir objetivo, público, mensaje, contexto y entrega esperada.', 'Publicar la pieza en redes sociales.', 'Reemplazar la investigación de referencias.'],
  },
  {
    question: '¿Qué es un prompt en el trabajo con inteligencia artificial?',
    options: ['Un archivo que guarda imágenes generadas.', 'Una herramienta para programar publicaciones.', 'Un formato obligatorio para carruseles.', 'Una instrucción que indica a la IA qué tarea debe realizar y con qué criterios.'],
  },
  {
    question: '¿Qué información debe definirse al agendar una publicación?',
    options: ['La fecha y la hora de publicación.', 'El nombre de la persona que verá el anuncio.', 'La cantidad de fuentes dentro del proyecto.', 'El tipo de cuenta de ChatGPT del público.'],
  },
  {
    question: '¿Para qué se crea primero el proyecto de Copy?',
    options: ['Para generar la imagen final del anuncio.', 'Para almacenar únicamente el logo de la marca.', 'Para convertir una idea elegida en copy y planificación creativa.', 'Para publicar la pieza directamente en redes sociales.'],
  },
  {
    question: '¿Qué debe estar disponible en el proyecto de Diseño para mantener coherencia con la marca?',
    options: ['Solo la idea inicial escrita en una frase.', 'El logo original, referencias visuales e instrucciones del proyecto.', 'Únicamente el texto de la publicación.', 'Una lista de horarios de publicación.'],
  },
  {
    question: 'Al trabajar con GPT Chat en el proyecto de Diseño, ¿qué se debe preguntar antes de pegar la planificación creativa?',
    options: ['¿Cuál es la red social más popular?', '¿Podés crear todas las imágenes en un único archivo?', '¿Qué día debería publicar la pieza?', '¿Cuáles son las fuentes y las instrucciones de este proyecto?'],
  },
  {
    question: '¿Cuál es la diferencia práctica principal entre GPT Work y GPT Chat dentro de este flujo?',
    options: ['GPT Work solo sirve para texto y GPT Chat solo sirve para imágenes.', 'GPT Chat no puede trabajar con proyectos.', 'GPT Work puede trabajar de forma más autónoma con el contexto del proyecto; en GPT Chat se debe guiar el proceso paso a paso.', 'No existe ninguna diferencia en la forma de trabajar.'],
  },
  {
    question: '¿Para qué se buscan referencias visuales antes de diseñar?',
    options: ['Para orientar la dirección visual de la pieza sin copiar una solución.', 'Para evitar usar el logo de la marca.', 'Para reemplazar el briefing.', 'Para decidir la fecha de publicación.'],
  },
  {
    question: '¿Cuál es el orden correcto del flujo de trabajo enseñado?',
    options: ['Diseño → idea → publicación → copy.', 'Copy → publicación → referencias → idea.', 'Referencias → publicación → idea → diseño.', 'Idea → copy → planificación creativa → diseño.'],
  },
  {
    question: 'Antes de desarrollar el copy, ¿qué se debe tener definido?',
    options: ['La imagen final ya generada.', 'Una idea creativa seleccionada.', 'La planilla de respuestas de la encuesta.', 'El horario exacto de publicación.'],
  },
  {
    question: 'Si todavía no se definió el formato de una pieza, ¿qué debe confirmar el proyecto de Copy?',
    options: ['El nombre de quien diseñará la pieza.', 'La plataforma donde se buscarán referencias.', 'Si será Feed 4:5, Stories 9:16 o ambos, y si será pieza única o carrusel.', 'La contraseña del proyecto.'],
  },
  {
    question: 'Después de aprobar una opción de copy y propuesta visual, ¿qué se prepara antes de entregar los bloques finales?',
    options: ['La descripción final que acompañará la publicación.', 'Un nuevo briefing desde cero.', 'Una segunda investigación de público obligatoria.', 'Todas las imágenes del carrusel en un solo archivo.'],
  },
  {
    question: '¿Qué contenido se lleva del proyecto de Copy al proyecto de Diseño?',
    options: ['La lista de enlaces de redes sociales.', 'La planificación creativa aprobada.', 'La encuesta completada por los alumnos.', 'El calendario de la próxima semana.'],
  },
  {
    question: 'Si el briefing solicita un carrusel de varias páginas, ¿cómo deben generarse las imágenes?',
    options: ['Como una sola imagen que contenga todas las páginas.', 'Solo se genera la portada; las demás se improvisan después.', 'Como un collage sin orden de lectura.', 'Como imágenes independientes, una por cada página.'],
  },
  {
    question: '¿Por qué se genera y revisa una imagen por vez en un carrusel?',
    options: ['Para eliminar la necesidad de una planificación creativa.', 'Para que cada página tenga un logo diferente.', 'Para validar cada resultado antes de continuar con la siguiente página.', 'Para evitar usar referencias visuales.'],
  },
  {
    question: '¿Qué caracteriza una edición puntual de una pieza ya generada?',
    options: ['Modificar un elemento específico sin cambiar innecesariamente toda la pieza.', 'Volver a empezar el proyecto completo en todos los casos.', 'Eliminar el logo para simplificar la imagen.', 'Cambiar el objetivo definido en el briefing.'],
  },
  {
    question: 'Al adaptar una pieza de Feed para Stories, ¿qué se debe conservar?',
    options: ['Exactamente la misma composición, aunque no se lea bien.', 'El concepto central y la identidad visual de la pieza.', 'El mismo tamaño de imagen sin ajustes.', 'La fecha de creación del archivo original.'],
  },
  {
    question: '¿Qué acción representa correctamente el agendamiento de una pieza terminada?',
    options: ['Buscar nuevas referencias visuales.', 'Reescribir el briefing después de publicar.', 'Crear otro logo para la marca.', 'Definir cuándo se publicará el contenido.'],
  },
  {
    question: '¿Para qué sirven las instrucciones dentro de un proyecto de IA?',
    options: ['Para guardar únicamente archivos descargados.', 'Para sustituir el logo original de la marca.', 'Para orientar el comportamiento, el proceso y los límites del trabajo de la IA.', 'Para decidir automáticamente el presupuesto de anuncios.'],
  },
  {
    question: '¿Cuál de estos materiales es una fuente útil para el proyecto de Diseño?',
    options: ['El logo original y referencias visuales pertinentes de la marca.', 'Respuestas aleatorias de otros alumnos.', 'Un calendario sin relación con la campaña.', 'Una imagen de cualquier marca competidora, sin analizarla.'],
  },
] as const

export const surveyAnswerKey = [
  'B', 'D', 'A', 'C', 'B',
  'D', 'C', 'A', 'D', 'B',
  'C', 'A', 'B', 'D', 'C',
  'A', 'B', 'D', 'C', 'A',
] as const

export function hasSurveySheetUrl() {
  return surveyConfig.sheetUrl.trim().length > 0
}
