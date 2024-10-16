import React from 'react'
import { Cabecera, Cabecera1, Cabecera2 } from './Cabecera'
import { ListarItems3, ListarTablas, ListarItems2, ListarItems } from './Listaritems3'

function Web() {
  return (
    <div>
    <div>Fabio Fabrega da Silva</div>
    <Cabecera/>
    <Cabecera1/>
    <Cabecera2 mensaje='Odio React' otro='Odio mi vida'/>
    <Cabecera2 mensaje='tengo hambre' otro='tengo sueño'/>
    <p>listar items con JSON</p>
    <li><ListarItems/></li>
    <li><ListarItems2/></li>
    <p>Listar los heroes de marvel del fichero heroes.json</p>
    <li><ListarItems3/></li>
    <p>Listar tablas con JSON</p>
    <li><ListarTablas/></li>
    </div>
  )
}

export default Web