import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Carusel.css';

import oneBan from '../../баннеры/1-ban.jpg';
import twoBan from '../../баннеры/2-ban.jpg';


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
            alt="First slide"
          />
        </div>

      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img
            className="carusImg d-block w-100"
            src={twoBan}
            alt="Second slide"
          />
        </div>

      </Carousel.Item>

    </Carousel>
  );
}


export default Carusel;


