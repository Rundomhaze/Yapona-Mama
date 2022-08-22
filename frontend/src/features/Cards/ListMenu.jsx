import React, { useEffect, useState } from 'react';
import Onecard from './OneCard';
import './OneCard.css';
import spicy from '../../роллы/icons8-перец-чили-50.png';
import vegan from '../../роллы/icons8-брокколи-50.png';

function Listmenu() {
  const [allFood, setFood] = useState([]);

  useEffect(() => {
    fetch('/api/load', { method: 'GET' })
      .then((result) => result.json())
      .then((data) => {
        setFood(data);
      });
  }, []);
  ///
  ///
  ///
  ///
  return (
    <div className="maindivmap">
      <div className="row">
        {allFood && allFood.map((roll) => (
          <Onecard key={roll.id} roll={roll} vegan={vegan} spicy={spicy} />
        ))}
      </div>
    </div>
  );
}

export default Listmenu;
