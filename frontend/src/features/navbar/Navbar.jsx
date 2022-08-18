import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div class="nav-wrapper sticky-nav">
          <a href="/" class="brand-logo">Logo</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="sass.html">Меню</a></li>
            <li><a href="badges.html">Акции</a></li>
            <li><a href="collapsible.html">Корзина</a></li>
            <li><a href="mobile.html">Доставка</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Меню</a></li>
        <li><a href="badges.html">Акции</a></li>
        <li><a href="collapsible.html">Корзина</a></li>
        <li><a href="mobile.html">Доставка</a></li>
      </ul>
    </div>
  )
}

export default Navbar;
