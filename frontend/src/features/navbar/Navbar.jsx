import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
      {/* <Link to="/profile">Личный кабинет</Link> */}
      {/* <button type="button" onClick={() => navigate('/profile')}>
        Личный кабинет
      </button> */}
      <div className="divnavbar">
        <nav>
          <div className="nav-wrapper sticky-nav">
            <a href="/" className="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/">Меню</a></li>
              <li><a href="#"><Link to="/auth">Войти</Link></a></li>
              <li><a href="/">Акции</a></li>
              <li><a href="/">Корзина</a></li>
              <li><a href="/">Доставка</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="/">Меню</a></li>
          <li><a href="/">Акции</a></li>
          <li><a href="/">Корзина</a></li>
          <li><a href="/">Доставка</a></li>
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
      <Outlet />
    </>
  )
}

export default Navbar;
