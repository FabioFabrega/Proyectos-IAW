import React from 'react'
import './Contenido.module.css'
import Nav from './Nav'
import Aside from './Aside'
import Section from './Section'


export default function Contenido() {
  return (
    <div>
    <Nav/>
    <main>
        <Aside/>
        <Section/>
    </main>
    </div>
  )
}
