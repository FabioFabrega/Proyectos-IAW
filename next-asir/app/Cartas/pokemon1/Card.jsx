'use client'
import Card from 'react-bootstrap/Card';
import { Pokemon2 } from './pokeapi';


function Tarjeta(){
  return (
    <Card style={{ width: '18rem' }}>
      <Pokemon2/>
    </Card>
  );
}
export default Tarjeta