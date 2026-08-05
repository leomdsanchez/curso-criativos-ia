export const surveyConfig = {
  // Pegá aquí el enlace público del formulario creado en Google Forms.
  formUrl: '',
  // Pegá aquí el enlace privado de la planilla de respuestas de Google Sheets.
  sheetUrl: '',
} as const

export function hasSurveySheetUrl() {
  return surveyConfig.sheetUrl.trim().length > 0
}
