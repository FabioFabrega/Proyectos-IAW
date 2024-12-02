import '../stylo.css';

export default function Gen() {
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