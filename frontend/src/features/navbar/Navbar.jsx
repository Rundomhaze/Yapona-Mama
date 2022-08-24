import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';
import Reg from '../auth/rega/Reg';
import Login from '../auth/loga/Login';
import logoutAC from '../../redux/actionCreators/logoutAC';
import label from '../../роллы/label.jpeg';

function Navbar() {
  const [regaModal, setRegaModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  // const { user } = useSelector((state) => state.user);
  const user = { id: 1, name: 'admin', status: true };///////  ИСКУССТВЕННО СОЗДАНЫЙ ЮЗЕР ДЛЯ УСЛОВНОГО РЕНДЕРИНГА
  const dispatch = useDispatch();

  function handleLogout() {
    const body = {
      userId: user.id
    };
    fetch('http://localhost:4000/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body)
    })
      .then((result) => result.json())
      .then((data) => dispatch(logoutAC(data)));
  }

  return (
    <>
      <div className="divnavbar">
        <nav>
          <div className="nav-wrapper sticky-nav">
            <a href="/" className="brand-logo"><img src={label} className="img-logo" /></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              {user && !user.id ? (
                <>
                  <li><a onClick={() => {
                    setRegaModal(false);
                    setLoginModal(true);
                  }}
                  >Войти
                  </a>
                  </li>
                  <li><a onClick={() => {
                    setLoginModal(false);
                    setRegaModal(true);
                  }}
                  >Зарегистрироваться
                  </a>
                  </li>
                </>
              ) : user.status ? (
                <>
                  <li><a onClick={handleLogout}>Выйти</a></li>
                  <li><a href="/admin">АДМИН КАБИНЕТ</a></li>
                </>
              ) : (
                <>
                  <li><a onClick={handleLogout}>Выйти</a></li>
                  <li><a href="/">Личный кабинет</a></li>
                </>
              )}

              <li><a href="/">Меню</a></li>
              <li><a href="/sale">Акции</a></li>
              <li><a href="/">Корзина</a></li>
              <li><a href="/delivery">Доставка</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a href="/">Меню</a></li>
          <li><a href="/sale">Акции</a></li>
          <li><a href="/">Корзина</a></li>
          <li><a href="/delivery">Доставка</a></li>
        </ul>
      </div>
      <nav>
        <div className="divnavbar2">
          <ul id="nav-mobile" className="">
            <li><a>Работаем 11:00 - 04:00 </a></li>
            <li><a>Доставка еды от 45 минут</a></li>
            <li><a>Личный кабинет</a></li>
            {user && user.name ? (
              <li><a>Здравствуйте, {user.name} !</a></li>
            ) : (
              <li><a>Здравствуйте, гость!</a></li>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
      <Reg
        isOpen={regaModal}
        closeModal={() => setRegaModal(false)}
      />
      <Login
        isOpen={loginModal}
        closeModal={() => setLoginModal(false)}
      />
    </>
  );
}

export default Navbar;

