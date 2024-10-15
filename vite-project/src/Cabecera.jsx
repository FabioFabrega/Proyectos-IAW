import React from 'react'

export function Cabecera() {
  return (
    <h1>Clase IAW 24/25</h1>
  )
}
export function Cabecera1() {
    return (
      <h2>Asignaturas ASIR</h2>
    )
  }
  export function Cabecera2(props , otro) {
    return (
        <>
      <li>{props.mensaje}</li>
      <li>{props.otro}</li>
      </>
    )
  }
  export function Cabecera3(mensaje='mensjae por defecto', otro) {
    return (
    <>
      <li>{mensaje}</li>
      <li>{otro}</li>
    </>
    )
  }