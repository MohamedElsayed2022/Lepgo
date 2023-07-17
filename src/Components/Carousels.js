import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from '../imgs/9999.jpeg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselStyle = {
    boxShadow: '-10px 0 10px -5px rgba(0, 0, 0, 0.5), 10px 0 10px -5px rgba(0, 0, 0, 0.5)'
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={carouselStyle }>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Second slide"
        />

        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
