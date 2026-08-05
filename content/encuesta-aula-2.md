# Encuesta final · Aula 2

Creá un formulario de Google Forms en modo cuestionario y vinculalo a una planilla de Google Sheets. Compartí la planilla solamente con las cuentas que pueden ver las respuestas.

## Campo obligatorio

- **Nombre y apellido**

## Preguntas obligatorias

1. **¿Cuál es la función principal de un anuncio?**
   - Generar flujo hacia el negocio. ✓
   - Cerrar una venta inmediatamente.
   - Conseguir seguidores sin contexto.
   - Reemplazar el trabajo del negocio.

2. **¿Cuál es el orden correcto del proceso que trabajamos?**
   - Idea creativa → Copy → Planificación creativa → Diseño. ✓
   - Diseño → Copy → Idea creativa → Planificación.
   - Copy → Diseño → Idea creativa → Planificación.
   - Idea creativa → Diseño → Copy → Publicación.

3. **¿Qué debe generar el prompt de la clase 1?**
   - Solamente ideas creativas. ✓
   - Copy, imágenes y publicación final.
   - Una pieza terminada para publicar.
   - Un carrusel completo.

4. **¿Qué recibe el proyecto de Copy para empezar?**
   - Una idea creativa ya seleccionada. ✓
   - Una imagen terminada.
   - Solamente el logo.
   - Una referencia visual sin contexto.

5. **¿Qué bloque llevamos desde Copy al proyecto de Diseño?**
   - Planificación creativa. ✓
   - Descripción de la publicación.
   - Las tres opciones sin elegir.
   - El briefing vacío.

6. **¿Para qué sirven las referencias visuales?**
   - Para orientar el lenguaje visual de una pieza propia. ✓
   - Para copiar una campaña completa.
   - Para reemplazar el logo del negocio.
   - Para evitar usar el briefing.

7. **¿Qué cambia entre GPT Work y GPT Chat en este proceso?**
   - GPT Chat necesita una conducción más explícita y paso a paso. ✓
   - Los prompts son completamente distintos.
   - GPT Chat no puede trabajar con diseño.
   - GPT Work no usa fuentes del proyecto.

8. **Antes de pegar la planificación creativa en GPT Chat, ¿qué hacemos?**
   - Pedimos las fuentes y las instrucciones del proyecto. ✓
   - Pedimos todas las imágenes en un solo archivo.
   - Cambiamos el concepto creativo.
   - Volvemos a crear el briefing.

9. **¿Cómo se crea un carrusel?**
   - Una imagen independiente por cada página. ✓
   - Todas las páginas dentro de una sola imagen.
   - Una imagen sin revisar el resultado.
   - Sin usar planificación creativa.

10. **Después de generar una imagen, ¿qué podemos hacer?**
    - Pedir ajustes puntuales o adaptarla para Feed o Stories. ✓
    - Solo publicarla sin revisar.
    - Cambiar completamente el concepto en cada ajuste.
    - Generar todas las páginas juntas.

## Enlaces que hay que configurar

Después de crear el formulario y su planilla de respuestas, pegá sus enlaces en `src/data/survey.ts`:

- `formUrl`: enlace público del formulario para los alumnos.
- `sheetUrl`: enlace privado de la planilla para el profesor. La ruta `/admin/` abrirá este enlace.
