import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';
import Reg from '../auth/rega/Reg';
import Login from '../auth/loga/Login';
import logoutAC from '../../redux/actionCreators/logoutAC';
import label from '../../роллы/label.jpeg';

function Navbar() {
  const [regaModal, setRegaModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { total_price } = useSelector((state) => state.cart.details);
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
      .then((data) => {
        dispatch(logoutAC(data));
        dispatch({ type: 'CLEAR_CART' });
        navigate('/#');
      });
  }
  return (
    <>
      <div className="divnavbar">
        <nav>
          <div className="nav-wrapper sticky-nav">
            <a onClick={(e) => navigate('/')} className="brand-logo"><img src={label} className="img-logo" /></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">

              <li><a onClick={() => navigate('/')}>Меню</a></li>
              <li><a onClick={() => navigate('/sale')}>Акции</a></li>
              <li><a onClick={() => navigate('/delivery')}>Доставка</a></li>
              <li className="cartLi">
                <a className="waves-effect waves-light cartLink" onClick={() => navigate('/cart')}>
                  <i className="material-icons left cartIcon">shopping_cart</i>

                  {(total_price > 0) ? (<>{total_price + " ₽"} </>) : (<>Корзина</>)}
                </a>
              </li>

            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a onClick={() => navigate('/')}>Меню</a></li>
          <li><a onClick={() => navigate('/sale')}>Акции</a></li>
          <li><a onClick={() => navigate('/cart')}>Корзина</a></li>
          <li><a onClick={() => navigate('/delivery')}>Доставка</a></li>
        </ul>
      </div>
      <nav>
        <div className="divnavbar2">
          <ul id="nav-mobile" className="">
            <li><a>Работаем 11:00 - 04:00 </a></li>

            <li><a onClick={() => navigate('/delivery')}>Доставка еды от 45 минут</a></li>

            {user && user.name ? (
              <li><a onClick={() => navigate('/user_room')}>Здравствуйте, {user.name} !</a></li>
            ) : (
              <li><a onClick={() => {
                setLoginModal(false);
                setRegaModal(true);
              }}
              >Здравствуйте, гость!
              </a>
              </li>
            )}

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
                  <li><a onClick={() => navigate('/admin')}>АДМИН КАБИНЕТ</a></li>
                </>
              ) : (
                <>
                  <li><a onClick={handleLogout}>Выйти</a></li>
                  <li><a onClick={() => navigate('/user_room')}>Личный кабинет</a></li>
                </>
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
