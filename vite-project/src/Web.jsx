import React from 'react'
import { Cabecera, Cabecera1, Cabecera2 } from './Cabecera'
import { ListarItems3, ListarTablas, ListarItems2, ListarItems } from './Listaritems3'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Web() {
  return (
    <div>
    <div>Fabio Fabrega da Silva</div>
    <ul><Cabecera/>
    <Cabecera1/>
    <Cabecera2 mensaje='Odio React' otro='Odio mi vida'/>
    <Cabecera2 mensaje='tengo hambre' otro='tengo sueño'/></ul>
    <ul>listar items con JSON
    <ListarItems/>
    <ListarItems2/></ul>
    <ul>Listar los heroes de marvel del fichero heroes.json
    <ListarItems3/></ul>
    <ul>Listar tablas con JSON
    <ListarTablas/></ul>
    <ul><h2>Utilizando iconos de REACT</h2>
    <a href='https://react-icons.github.io/react-icons/search/#q=Whatsapp'><FaWhatsapp />Whatsapp</a>
    <a href='https://react-icons.github.io/react-icons/search/#q=instagram'><FaInstagram />Instagram</a>
    <a href='https://react-icons.github.io/react-icons/search/#q=facebook'><FaFacebook />Facebook</a></ul>
    </div>
  )
}

export default Web