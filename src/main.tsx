import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CoursePortal } from './CoursePortal'
import './wheel-navigation'
import './mobile-navigation'
import './content-overrides'
import './styles.css'
import './pillar-summary.css'
import './typography.css'
import './mobile-layout.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('No se encontró el elemento raíz.')
}

createRoot(root).render(
  <StrictMode>
    <CoursePortal />
  </StrictMode>,
)
