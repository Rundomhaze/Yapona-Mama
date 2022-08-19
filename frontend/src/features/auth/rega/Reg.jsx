import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import './Reg.css';

function Reg({isOpen, closeModal}) {

  return (
    <>
      <div className={`modal_wrapper ${isOpen ? 'open' : 'close'}`}>
        
      <div className='modal_body'>

        <div className='modal_close' onClick={() => closeModal()}>&times;</div>


        <form >
        <h5 className='title'>Регистрация</h5>

          <input name='input' type="text" placeholder="введите имя" className='modal_input' />
          <input name='input' type="email" placeholder="email" className='modal_input' />
          <input name='input' type="tel" placeholder="телефон"  className='modal_input' />
          <input name='input' type="password" placeholder="пароль" 
          className='modal_input' />
          <input name='input' type="password" placeholder="повторите пароль" 
          className='modal_input' />

          <button className='btn modal_button' >Отправить</button>

        </form>
      </div>
    </div>
    </>
  )
}

export default Reg;
