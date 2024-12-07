import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
        <Link to="/">Inicio</Link> - 
        <Link to="/galeria">Fotos</Link> -
        <Link to="/noticias">Noticias</Link> -  
        <Link to="/about">about</Link> -
        <Link to="*">Contacto</Link>
    </nav>
  )
}

export default Navbar

