import json2 from './heroes.json';

export const ListarItems= () => {
    let ITEMS = ['cat', 'dog', 'bird']; let contador=0;
    function getItemsList(){
    return ITEMS.map((item,index) => <li key={index}>{item}</li>);
    }
    return (
    <ul>
    {getItemsList()}
    </ul>
    );
}

export const ListarItems2= () => {
    let ITEMS = ['cat', 'dog', 'bird']; let contador=0;
    function getItemsList(){
    return ITEMS.map((item,index) => <li key={index}>{item}</li>);
    }
    return (
    <ul>
    {getItemsList()}
    </ul>
    );
}

export const ListarItems3= () => {
 function getItems(){ return json2.map((heroe,index) => {
 if (heroe.publisher=="Marvel Comics"){
 return <li key={index}> {heroe.superhero} </li>;
 }
 });
 }
 return (
 <ul>
 {getItems()}
 </ul>
 )
}



export const ListarTablas= () => {
 function getItems(){ return json2.map((heroe,index) => {
 if (heroe.publisher=="Marvel Comics"){
 return <li key={index}> {heroe.superhero} </li>;
 }
 });
 }
 return (
 <ul>
    <table>
  <tr>
    <th>Nombre del Héroe</th>
    {getItems()}  
 </tr>
 </table>
 </ul>
 )
}