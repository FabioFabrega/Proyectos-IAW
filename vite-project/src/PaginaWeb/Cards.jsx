import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta(props){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/paisaje.jpeg" />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.botton}</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;