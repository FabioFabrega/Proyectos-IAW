import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"25%"}}>
      <Carousel.Item>
        <img width="600px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Alcazaba_de_Almer%C3%ADa.jpg/640px-Alcazaba_de_Almer%C3%ADa.jpg" alt="Alcazaba de Almería"/>
        <Carousel.Caption>
          <h3>Alcazaba de Almería</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://turismoalmanzora.com/wp-content/uploads/imagen-de-albox.jpg" alt="Santuario del Saliente"/>
        <Carousel.Caption>
          <h3>Plaza Mayor Albox</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="/alhambra.jpg" alt="Alhambra" />
        <Carousel.Caption>
          <h3>Alhambra</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;