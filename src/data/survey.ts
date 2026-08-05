export const surveyConfig = {
  // Enlace público de la encuesta para los alumnos.
  formUrl: 'https://docs.google.com/spreadsheets/d/1ejKX6cVpZPCN1KhLHjS1BY8HGRzGCvLy0jSpCJyiNH4/edit?gid=1775293838#gid=1775293838',
  // Enlace de la pestaña con las respuestas para el profesor.
  sheetUrl: 'https://docs.google.com/spreadsheets/d/1ejKX6cVpZPCN1KhLHjS1BY8HGRzGCvLy0jSpCJyiNH4/edit?gid=0#gid=0',
} as const

export function hasSurveySheetUrl() {
  return surveyConfig.sheetUrl.trim().length > 0
}
