import React, { useReducer, useState } from 'react';
import Onecard from './OneCard';
import './OneCard.css';
import Филадельфия from '../../роллы/филадельфия.jpeg';
import Калифорния from '../../роллы/Калифорния.jpeg';
import Цезарь from '../../роллы/цезарь.jpeg';
import Тест from '../../роллы/тестовый.jpeg';
import spicy from '../../роллы/icons8-перец-чили-50.png';
import vegan from '../../роллы/icons8-брокколи-50.png';

function Listmenu() {
  const rolls = [
    { title: 'Филадельфия', price: '250', type: 'Классический ', desc: 'Сыр Филадельфия, Cливочный сыр, Cлабосоленый лосось.', image: Филадельфия, isvegan: false, isspicy: true },
    { title: 'Калифорния', price: '290', type: 'Классический ', desc: 'Японский хрен васаби, свежий огурец,  мякоть авокадо,', image: Калифорния, isvegan: true, isspicy: false },
    { title: 'Цезарь', price: '330', type: 'Жареный ', desc: 'Курица, Салат Айсберг, Соус Цезарь, Сливочный сыр ', image: Цезарь, isvegan: true, isspicy: true },
    { title: 'тестовый ролл', price: 'забирай даром', type: 'даже не разморозили ', desc: 'берем сначал укропу, потом кошачью жопу, 25 картошек, 17 мандавошек, ведро воды, и хуй туды, охапку дров, и ролл готов ', image: Тест, isvegan: false, isspicy: false },
  ];
  ///
  ///
  ///
  ///
  return (
    <div className="maindivmap">
      <div className="row">
        {rolls.map((roll) => (
          <Onecard roll={roll} vegan={vegan} spicy={spicy} />
        ))}
      </div>
    </div>
  );
}

export default Listmenu;
