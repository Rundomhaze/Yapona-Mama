import React from "react";
import './UserCabinet.css';
import InputMask from "react-input-mask";
import { useSelector } from 'react-redux';

function UserCabinet() {
  const { user } = useSelector((state) => state.user);

  function handleSubmitFormReg() {

  }
  
  return (
    <>
      <h3>Личный кабинет</h3>
      <div className="userCab">
        <form onSubmit={handleSubmitFormReg}>
          <h5 className='title'>Ваши данные</h5><br />

          <label>Имя</label>
          <input
            name='name'
            type="text"
            className='modal_input' />

          <label>Почта</label>
          <input
            name='email'
            type="email"
            className='modal_input' />

          <label>Телефон</label>
          <InputMask
            mask="8-(999)-999-99-99"
            name='tel'
            type="tel"
            className='modal_input' />

          <label>Улица</label>
          <input
            name=''
            type="text"
            className='modal_input' />

          <label>Дом</label>
          <input
            name=''
            type="text"
            className='modal_input' />

          <label>Парадная</label>
          <input
            name=''
            type="text"
            className='modal_input' />

          <label>Этаж</label>
          <input
            name=''
            type="text"
            className='modal_input' />

          <label>Квартира</label>
          <input
            name=''
            type="text"
            className='modal_input' />

          <button type='submit' className='btn modal_button' >сохранить</button>
        </form>
      </div>
    </>
  )
}

export default UserCabinet
