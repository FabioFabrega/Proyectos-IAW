import json2 from './heroes.json';
import './Actividad1.css';

export const ListarTablas= () => {
 function getItems(){ return json2.map((heroe,index) => {
 if (heroe.publisher=="Marvel Comics"){
 return <ul key={index}> {heroe.superhero} </ul>;
 }
 });
 }
 return (
    <table>
  <tr>
    <th><h1>Nombre del Héroe</h1></th>
    <td>
    <h3>{getItems()}</h3></td> 
 </tr>
 </table>
 )
}