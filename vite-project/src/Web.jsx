import React from 'react'
import { Cabecera, Cabecera1, Cabecera2 } from './Cabecera'

function Web() {
  return (
    <div>
    <div>Fabio Fabrega da Silva</div>
    <Cabecera/>
    <Cabecera1/>
    <Cabecera2 mensaje='Odio React' otro='Odio mi vida'/>
    <Cabecera2 mensaje='tengo hambre' otro='tengo sueño'/>
    </div>
  )
}

export default Web