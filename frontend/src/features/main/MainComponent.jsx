import React from 'react';
import Listmenu from '../Cards/ListMenu';
import './MainComp.css';
import { Link, useNavigate } from 'react-router-dom';
import sushi from '../../иконки/icons8-суши-100.png';
import soup from '../../иконки/icons8-тарелка-супа-100.png';
import zakus from '../../иконки/icons8-куриные-наггетсы-100.png';
import set from '../../иконки/icons8-сеты-100 (1).png';
import wok from '../../иконки/icons8-wok-100.png';
import sous from '../../иконки/icons8-соусы-100.png';
import sweet from '../../иконки/icons8-десерт-100.png';
import water from '../../иконки/icons8-кофе-с-собой-100.png';

function MainComponent() {
  const navigate = useNavigate();
  return (
    <div className="allcomp">
      <div onClick={() => navigate('/menu/roll')} className="iconfood ">
        <img src={sushi} alt="" />
        <br />
        РОЛЛЫ
      </div>
      <div onClick={() => navigate('/')} className="iconfood ">
        <img src={soup} alt="" />
        <br />
        CУПЫ
      </div>
      <div onClick={() => navigate('/')} className="iconfood ">
        <img src={zakus} alt="" />
        <br />
        ЗАКУСКИ
      </div>
      <div onClick={() => navigate('/')} className="iconfood ">
        <img src={set} alt="" />
        <br />
        СЕТЫ
      </div>
      <div onClick={() => navigate('/')} className="iconfood ">
        <img src={wok} alt="" />
        <br />
        САЛАТЫ и WOK
      </div>
      <div onClick={() => navigate('/')} className="iconfood ">
        <img src={sous} alt="" />
        <br />
        СОУСЫ
      </div>
      <div onClick={() => navigate('/')} className="iconfood ">
        <img src={sweet} alt="" />
        <br />
        ДЕСЕРТЫ
      </div>
      <div onClick={() => navigate('/')} className="iconfood ">
        <img src={water} alt="" />
        <br />
        НАПИТКИ
      </div>
    </div>
  );
}

export default MainComponent;
