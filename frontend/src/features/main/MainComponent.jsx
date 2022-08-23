import React, { useState, useEffect } from 'react';
import './MainComp.css';

import rolls from '../../иконки/icons8-суши-100.png';
import sushi from '../../иконки/icons8-суши-с-лососем-100.png'
import soup from '../../иконки/icons8-тарелка-супа-100.png';
import zakus from '../../иконки/icons8-куриные-наггетсы-100.png';
import set from '../../иконки/icons8-сеты-100 (1).png';
import wok from '../../иконки/icons8-wok-100.png';
import sous from '../../иконки/icons8-соусы-100.png';
import sweet from '../../иконки/icons8-десерт-100.png';
import water from '../../иконки/icons8-кофе-с-собой-100.png';
import Carusel from '../../features/carusel/Carusel';
import Hits from './Hits';
import CardList from '../cards/CardList'


function MainComponent() {

  const [allFood, setFood] = useState(null);
  const [id, setId] = useState(0)

  useEffect(() => {
    if (id > 0) {
      fetch(`/api/load/${id}`, { method: 'GET' })
        .then((result) => result.json())
        .then((data) => {
          setFood(data);
        });
    }
  }, [id]);

  return (
    <>
      <Carusel />
      <div className="allcomp">
        <div onClick={() => setId(1)} className="iconfood ">
          <img src={rolls} alt="" /> <br />
          РОЛЛЫ
        </div>
        <div onClick={() => setId(2)} className="iconfood ">
          <img src={sushi} alt="" /> <br />
          СУШИ
        </div>
        <div onClick={() => setId(3)} className="iconfood ">
          <img src={set} alt="" /><br />
          СЕТЫ
        </div>
        <div onClick={() => setId(6)} className="iconfood ">
          <img src={soup} alt="" /><br />
          CУПЫ
        </div>
        <div onClick={() => setId(4)} className="iconfood ">
          <img src={wok} alt="" /><br />
          САЛАТЫ и WOK
        </div>
        <div onClick={() => setId(5)} className="iconfood ">
          <img src={zakus} alt="" /><br />
          ЗАКУСКИ
        </div>
        <div onClick={() => setId(7)} className="iconfood ">
          <img src={sous} alt="" /><br />
          СОУСЫ
        </div>
        <div onClick={() => setId(8)} className="iconfood ">
          <img src={sweet} alt="" /><br />
          ДЕСЕРТЫ
        </div>
        <div onClick={() => setId(9)} className="iconfood ">
          <img src={water} alt="" /><br />
          НАПИТКИ
        </div>
      </div>

      {allFood && <CardList allFood={allFood} />}

      <Hits />
    </>
  );
}

export default MainComponent;
