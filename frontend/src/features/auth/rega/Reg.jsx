import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import './Reg.css';
import regUserAC from '../../../redux/actionCreators/userAC';

function Reg({ isOpen, closeModal }) {
  const dispatch = useDispatch();

  function handleSubmitFormReg(e) {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
      name: e.target.name.value,
      phone: e.target.tel.value,
    }

    fetch('http://localhost:4000/auth/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body)
    })
      .then((result) => result.json())
      .then((data) => dispatch(regUserAC(data)));
    closeModal()
  }

  return (
    <>
      <div className={`modal_wrapper ${isOpen ? 'open' : 'close'}`}>
        <div className='modal_body'>
          <div className='modal_close' onClick={() => closeModal()}>&times;</div>
          <form onSubmit={handleSubmitFormReg}>
            <h5 className='title'>Регистрация</h5>
            <input name='name' type="text" placeholder="введите имя" className='modal_input' />
            <input name='email' type="email" placeholder="email" className='modal_input' />
            <input name='tel' type="tel" placeholder="телефон 89999999999" className='modal_input' pattern="[8]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" />
            <input name='password' type="password" placeholder="пароль"
              className='modal_input' />
            <input name='passwordRepeat' type="password" placeholder="повторите пароль"
              className='modal_input' />
            <button type='submit' className='btn modal_button' >Отправить</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Reg;
