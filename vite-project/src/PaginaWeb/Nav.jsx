import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";




function Nav() {
  return (
    <nav>
        <Link to="/"><FaHouse />Inicio</Link>
        <Link to="/noticias"><MdMiscellaneousServices />Noticias</Link>  
        <Link to="/Contacto"><BsFillTelephoneFill />Contacto</Link>
    </nav>
  )
}

export default Nav
