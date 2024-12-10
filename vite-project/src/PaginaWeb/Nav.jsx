import React from 'react'
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { MdCatchingPokemon } from "react-icons/md";
import { GiDinosaurBones } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";




function Nav() {
  return (
    <nav>
        <Link to="/"><FaHouse />Inicio</Link>
        <Link to="/noticias"><MdCatchingPokemon />Gen1</Link>  
        <Link to="/Jefatura"><MdCatchingPokemon />Gen2</Link>
        <Link to="/Informatica"><MdCatchingPokemon />Gen3</Link>
        <Link to="/Digimon"><GiDinosaurBones />Extra</Link>
        <Link to="/Contacto"><IoIosContact />Contacto</Link>
        <Link to="/Defensa"><IoIosContact />Contacto2</Link> -
        <Link to="/Defensa">Defensa</Link>
    </nav>
  )
}

export default Nav
