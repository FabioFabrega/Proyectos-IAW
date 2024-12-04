import '../stylo.css';
import Tarjeta from './Card'

export default function Gen1() {
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