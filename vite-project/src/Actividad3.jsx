import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./Nav2";
import Carrusel from "./Carousel";
import Tarjeta from './Cards';
import "./Actividad3.css"

export default function Rutas() {
 return (
 <>
 <Router>
 <Navbar/>
 <Routes>
 <Route exact path="/" element={<Home/>} />
 <Route path="/galeria" element={<Foto/>} />
 <Route path="/noticias" element={<Noticias/>}/>
 <Route path="/about" element={<About/>} />
 <Route path="*" element={<NoPage/>} />
 </Routes>
 </Router>
 </>
 );
}
function Home() {
    return  <div className="Card">      
    <Tarjeta/>
    <Tarjeta/>
    <Tarjeta/></div> 
}
function About(){
    return <h2>ABOUT</h2>
}
function Foto() {
    return <div>
      <Carrusel/>
    </div>
}
  
function NoPage() {
 return <h2>La página que has solicitado no existe</h2>;
}
function Noticias() {
    return <div>
      <h1>NOTICIAS DE HUÉRCAL OVERA</h1>
      <p>SE HA TERMINADO LA ALERTA ROJA POR INUNDACIÓN </p>
      <hr/>
    </div>
}