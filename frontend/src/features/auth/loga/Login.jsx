import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import './Login.css'
import regUserAC from '../../../redux/actionCreators/userAC';

function Login({ isOpen, closeModal }) {
  const dispatch = useDispatch();

  function handleSubmitFormLogin(e) {
    e.preventDefault();
    const body = {
      phone: e.target.phone.value,
      password: e.target.password.value
    };

    fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body)
    })
      .then((result) => result.json())
      .then((data) => dispatch(regUserAC(data)))

    closeModal()
  }

  return (
    <>
      <div className={`modal_wrapper ${isOpen ? 'open' : 'close'}`}>
        <div className='modal_body'>
          <div className='modal_close' onClick={() => closeModal()}>&times;</div>
          <form onSubmit={handleSubmitFormLogin}>
            <h5 className='title'>Вход</h5>
            <input name='phone' type="tel" placeholder="телефон 89999999999" className='modal_input' pattern="[8]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" />
            <input name='password' type="password" placeholder="пароль"
              className='modal_input' />
            <button type="submit" className='btn modal_button'>Войти</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
