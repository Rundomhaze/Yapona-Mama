import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import './Login.css'

function Login({isOpen, closeModal}) {
  return (
    <>
    <div className={`modal_wrapper ${isOpen ? 'open' : 'close'}`}>
      
    <div className='modal_body'>

      <div className='modal_close' onClick={() => closeModal()}>&times;</div>


      <form >
      <h5 className='title'>Вход</h5>

        <input name='input' type="tel" placeholder="телефон"  className='modal_input' />
        <input name='input' type="password" placeholder="пароль" 
        className='modal_input' />

        <button className='btn modal_button' >Войти</button>

      </form>
    </div>
  </div>
  </>
  )
}

export default Login;
