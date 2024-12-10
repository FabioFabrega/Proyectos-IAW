
import Card from 'react-bootstrap/Card';
import noticia from './Noticias.json';
import './defensa.css'
function CardDef(){

  return (
    <div className='defensa'>
    {noticia.map(noticias =>(<Card>
    <p><img src={noticias.imagen}/></p>
    <h2>{noticias.titulo}</h2>
    <h4>{noticias.texto}</h4>
    </Card>))}
    <p></p>
    </div>
  );
}

export default CardDef;