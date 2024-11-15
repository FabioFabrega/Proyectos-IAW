import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Aside from './Aside'
import './contenido.module.css'
import Rutas from './Rutas'
import { CambiarNombre } from './CambiarNombre';
import Tarjeta from './Cards';
import Carrusel from '../Carousel';
import Tarjeta2 from './Cards2'


function Contenido() {
  return (
    <>
    <Router>
    <Nav/>
    <main>
      <aside>
        <Aside/>
        <Routes>
          <Route path="/about" element={<About2/>} />
        </Routes>
      </aside>
        <section>
        <Routes>
        <Route exact path="/" element={<Home/>} />
	      <Route path="/noticias" element={<Gen1/>}>
        </Route>
        <Route path="/Jefatura" element={<Gen2/>} />
        <Route path="/Informatica" element={<Gen3/>} />
        <Route path="/Digimon" element={<Extra/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
          
        </section>
    
    </main>
    </Router>
    </>
  )
}

export default Contenido
function Home() {
  return <h1>Seleccione uno de los enlaces para ver los pokemons de cada generación</h1>
}

//Sólo se verá con /about en la URL
function About(){
  return <h2>ABOUT</h2>
}

function About2() {
  return <h2>Datos en aside</h2>;
}
function Gen1() {
    return <div>
      <article><Tarjeta/>
      <Tarjeta/>
      <Tarjeta/>
      <Tarjeta/>
      <Tarjeta/></article>
      <article><Tarjeta/>
      <Tarjeta/>
      <Tarjeta/>
      <Tarjeta/>
      <Tarjeta/></article>
      <hr/>
      <Outlet/>
    </div>
  }


function NotFound() {
  return <h2>ESTA RUTA NO ES VÁLIDA</h2>;
}

function Gen2() {
  return <div>
  <article><Tarjeta/>
  <Tarjeta/>
  <Tarjeta/>
  <Tarjeta/>
  <Tarjeta/></article>
  <article><Tarjeta/>
  <Tarjeta/>
  <Tarjeta/>
  <Tarjeta/>
  <Tarjeta/></article>
  <hr/>
  <Outlet/>
</div>
}
function Gen3() {
  return <div>
  <article><Tarjeta/>
  <Tarjeta/>
  <Tarjeta/>
  <Tarjeta/>
  <Tarjeta/></article>
  <article><Tarjeta/>
  <Tarjeta/>
  <Tarjeta/>
  <Tarjeta/>
  <Tarjeta/></article>
  <hr/>
  <Outlet/>
</div>
}

function Extra() {
  return <div>
  <article><Tarjeta2/>
  <Tarjeta2/>
  <Tarjeta2/>
  <Tarjeta2/>
  <Tarjeta2/></article>
  <article><Tarjeta2/>
  <Tarjeta2/>
  <Tarjeta2/>
  <Tarjeta2/>
  <Tarjeta2/></article>
  <hr/>
  <Outlet/>
</div>
}

function Producto() {
    //Lectura del parámetro de la URL
    const params = useParams();
    
    if (params.numero <1 || params.numero >100){
      return <h2>ESE PRODUCTO NO EXISTE</h2>
    }
    return <h2>PRODUCTO ELEGIDO: {params.numero}</h2>;
}