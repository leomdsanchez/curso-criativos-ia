# Encuesta final · Aula 2

La encuesta se responde dentro del sitio: cada alumno informa su nombre y avanza una pregunta por vez. Al finalizar, el sitio registra las respuestas y la puntuación en la planilla conectada.

## Campo obligatorio

- **Nombre y apellido**

## Criterio de las preguntas

Son 20 preguntas objetivas de opción múltiple. Evalúan:

- briefing y prompt;
- agendamiento;
- proyectos de Copy y Diseño;
- fuentes, instrucciones y referencias;
- diferencia práctica entre GPT Work y GPT Chat;
- flujo de creación de un anuncio;
- generación de carruseles, edición y adaptación de formatos.

La respuesta correcta está distribuida de forma equilibrada: cinco preguntas por cada letra A, B, C y D. La fuente única de preguntas y clave de corrección del sitio está en `src/data/survey.ts`.

## Enlaces configurados

- `formUrl`: abre la interfaz de encuesta dentro del sitio.
- `appScriptUrl`: registra las respuestas y permite cargarlas en `/admin/`.
- `sheetUrl`: abre la pestaña **Respuestas** como respaldo.
