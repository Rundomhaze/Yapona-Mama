import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Carusel.css';

import oneBan from '../../баннеры/baner-1.jpeg';
import twoBan from '../../баннеры/baner-2.jpg';
import threeBan from '../../баннеры/baner-3.jpg';
import fourBan from '../../баннеры/baner-4.jpg';


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
            src={oneBan}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img
            className="carusImg d-block w-100"
            src={twoBan}
            alt="First slide"
          />
        </div>

      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img
            className="carusImg d-block w-100"
            src={threeBan}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img
            className="carusImg d-block w-100"
            src={fourBan}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>

    </Carousel>
  );
}


export default Carusel;


