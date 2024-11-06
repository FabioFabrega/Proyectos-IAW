import React from 'react'
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { TbNetwork } from "react-icons/tb";
import { IoMdMegaphone } from "react-icons/io";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { MdFormatLineSpacing } from "react-icons/md";



function Nav() {
  return (
    <nav>
        <Link to="/"><FaHouse />Inicio</Link> - 
        <Link to="/noticias"><TbNetwork />Noticias</Link> - 
        <Link to="/noticias/jefatura"><IoMdMegaphone />
        Noticias Jefatura - </Link>
        <Link to="/noticias/informatica"> <MdOutlineLaptopChromebook /> Departamento Informática - </Link>
        <Link to="/noticias/otra"><MdFormatLineSpacing />
        OTRA - </Link>
        <Link to="/about"><IoIosContact />Contacto</Link> - 
    </nav>
  )
}

export default Nav