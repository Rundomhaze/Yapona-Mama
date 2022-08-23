import React from "react";
import './Footer.css';
import label from '../../роллы/label.jpeg';
import deliveryClub from '../../иконки/logo-delivery-club.png';

function Footer() {
  return (
    <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12 logo-block">
          <h5 className="black-text logo-text">Япона Мама</h5>
          <a href="/" className="brand-logo"><img src={label} className="img-logo-foot"/></a>
          <p className="black-text text-lighten-4 logo-text-delivery">Доставляем от 45 минут!</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="black-text">Контакты</h5>
          <ul>
            <li><a className="black-text text-lighten-3" href="/">Меню</a></li>
            <li><a className="black-text text-lighten-3" href="/">Личный кабинет</a></li>
            <li><a className="black-text text-lighten-3" href="/delivery">Доставка</a></li>
            <li><a className="black-text text-lighten-3" href="https://www.delivery-club.ru/srv/Japona_mama_sar?vendorCategoriesQuery=-2">DeliveryClub</a></li>
            <li><a href="https://www.delivery-club.ru/srv/Japona_mama_sar?vendorCategoriesQuery=-2" className="brand-logo"><img src={deliveryClub} className="deliveryClub"/></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container black-text adress">
      © 2022 Copyright Text
      <a className="black-text text-lighten-4 right adress" href="/">Энгельс, проспект Фридриха Энгельса, 11</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
