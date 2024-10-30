import React from 'react'
import './Section.module.css'
import Tarjeta from './Cards'
import Carrusel from '../Carousel'

function Section() {
  return (
    <section>
      <article> <Tarjeta/> <Tarjeta/>  <Tarjeta/> </article>
      <Carrusel/>
    </section>
  )
}

export default Section