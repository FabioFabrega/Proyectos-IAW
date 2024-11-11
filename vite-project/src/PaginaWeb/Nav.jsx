import React from 'react'
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { MdCatchingPokemon } from "react-icons/md";




function Nav() {
  return (
    <nav>
        <Link to="/"><FaHouse />Inicio</Link>
        <Link to="/noticias"><MdCatchingPokemon />Gen1</Link>  
        <Link to="/noticias/Jefatura"><MdCatchingPokemon />Gen2</Link>
        <Link to="/noticias/Informatica"><MdCatchingPokemon />Gen3</Link>
        <Link to="/Digimon"><MdCatchingPokemon />Extra</Link>
    </nav>
  )
}

export default Nav
