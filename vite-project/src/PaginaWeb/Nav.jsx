import React from 'react'
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { TbNetwork } from "react-icons/tb";



function Nav() {
  return (
    <nav>
        <Link to="/"><FaHouse />Inicio</Link>
        <Link to="/noticias"><TbNetwork />Noticias</Link>  
        <Link to="/Contacto"><IoIosContact />Contacto</Link>
    </nav>
  )
}

export default Nav

