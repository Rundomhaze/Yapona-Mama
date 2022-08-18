import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className="divnavbar">
        <nav>
          <div className="nav-wrapper sticky-nav">
            <a href="/" className="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Меню</a></li>
              <li><a href="sass.html">Войти</a></li>
              <li><a href="sass.html">Регистрация</a></li>
              <li><a href="badges.html">Акции</a></li>
              <li><a href="collapsible.html">Корзина</a></li>
              <li><a href="mobile.html">Доставка</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="sass.html">Меню</a></li>
          <li><a href="badges.html">Акции</a></li>
          <li><a href="collapsible.html">Корзина</a></li>
          <li><a href="mobile.html">Доставка</a></li>
        </ul>
      </div>
      <nav>
        <div className="divnavbar2">
          <ul id="nav-mobile" className="">
            <li><a>Работаем 11:00 - 04:00 </a></li>
            <li><a>Доставка еды от 45 минут</a></li>
            <li><a href="collapsible.html">Личный кабинет</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
