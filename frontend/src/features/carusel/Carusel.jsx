import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
// import one from '../../баннеры/banner-1.jpg';
// import two from '../../баннеры/fad04bceacc7e4432c96ae6056cc8311.png';
import oneB from '../../баннеры/new/baner-1.jpeg';
import twoB from '../../баннеры/new/baner-2.jpeg';
import threeB from '../../баннеры/new/baner-3.jpeg';
import fourB from '../../баннеры/new/baner-4.jpeg';
import './Carusel.css';

function Carusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div>
          <img
            className="carusImg d-block w-100"
            src={oneB}
            alt="First slide"
          />
        </div>

      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img
            className="carusImg d-block w-100"
            src={twoB}
            alt="Second slide"
          />
        </div>

      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img
            className="carusImg d-block w-100"
            src={threeB}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img
            className="carusImg d-block w-100"
            src={fourB}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>

    </Carousel>
  );
}


export default Carusel;


