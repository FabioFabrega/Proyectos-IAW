import React from 'react'
import { FaHome } from "react-icons/fa"
import { MdMiscellaneousServices } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"

export default function Nav() {
  return (
    <div>
    <a href='/'><FaHome />Inicio</a>
    <a href='/Servicios'><MdMiscellaneousServices />Servicios</a>
    <a href='/Contacto'><BsFillTelephoneFill />Contacto</a>
    </div>
  )
}

