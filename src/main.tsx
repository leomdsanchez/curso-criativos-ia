import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CoursePortal } from './CoursePortal'
import './styles.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('No se encontró el elemento raíz.')
}

createRoot(root).render(
  <StrictMode>
    <CoursePortal />
  </StrictMode>,
)
