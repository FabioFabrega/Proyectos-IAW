import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PaginaWeb from './Web'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaWeb/>
  </StrictMode>
)
