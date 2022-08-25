import React, { useState } from 'react';
import Onecard from './OneCard';
import './CardList.css';
import spicy from '../../роллы/icons8-перец-чили-50.png';
import vegan from '../../роллы/icons8-брокколи-50.png';

function CardList({ allFood }) {
  const [subType] = useState(['Классические роллы', 'Жареные роллы', 'Роллы-перевертыши']);

  return (

    <div className="maindivmap" >
      <h3>{allFood[0]['Type.title']}</h3>
      <div className="row">
        {allFood[0]['Subtype.title'] && allFood[0]['Subtype.title'] !== null
          ? (
            subType.map((subtype, i) => (
              <div key={`a${i}`} className='rollsrow'>
                <h4>{subtype}</h4>
                <div>
                  {allFood.map((onefood) => subtype === onefood['Subtype.title']
                    ? (
                      <Onecard key={onefood.id} onefood={onefood} vegan={vegan} spicy={spicy} />)
                    : (<div key={onefood.id}></div>)
                  )}
                </div>
              </div>
            ))
          ) : (
            allFood.map((onefood) => (
              <Onecard key={onefood.id} onefood={onefood} vegan={vegan} spicy={spicy} />
            )))}
      </div>
    </div>
  );
}

export default CardList;
