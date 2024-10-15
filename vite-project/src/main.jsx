import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './web.css'
import Web from './Web'
import { Cabecera, Cabecera1 } from './Cabecera.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web/>
  </StrictMode>,
)
