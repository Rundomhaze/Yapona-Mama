import React from "react";
import './Sale.css';
import sale from '../../роллы/Акция.jpeg';
import gift from '../../роллы/Ролл в подарок.png'

function Sale() {
  return (
    <>
      <div className="sale">
        <h3>Акции</h3>
        <div className="saleDiv">
          <div>
            <p><strong>Скидка 25%</strong> на все меню</p>
          </div>
          <div className="filterImg">
            <img src={sale} alt='sale' className="saleImg" />
          </div>
          <div>
            <p>При заказе от 2000 рублей жареный ролл итальянский <strong>в подарок</strong></p>
          </div>
          <div className="filterImg">
            <img src={gift} alt='gift' className="saleImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sale;
