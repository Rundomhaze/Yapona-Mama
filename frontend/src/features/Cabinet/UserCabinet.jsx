import React, {useEffect} from "react";
import './UserCabinet.css';
import InputMask from "react-input-mask";
import { useSelector } from 'react-redux';

function UserCabinet() {
  const { user } = useSelector((state) => state.user);
  console.log(user);


  function handleSubmitInfo() {

  }

  function handleSubmitPassword() {

  }

  return (
    <>
      <h3>Личный кабинет</h3>
      <div className="userCab">
        <form onSubmit={handleSubmitInfo}>
          <h5 className='title'>Ваши данные</h5><br />

          <label>Имя</label>
          <input
            name='name'
            type="text"
            className='modal_input'
            defaultValue={user.name} />

          <label>Почта</label>
          <input
            name='email'
            type="email"
            className='modal_input'
            defaultValue={user.email} />

          <label>Телефон</label>
          <InputMask
            mask="8-(999)-999-99-99"
            name='tel'
            type="tel"
            className='modal_input'
            value={user.phone} />

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

        <form className="formPass" onSubmit={handleSubmitPassword}>
        <h5 className='title'>Изменить пароль</h5><br />
          <label>Пароль</label>
          <input
            name=''
            type="password"
            className='modal_input'
            placeholder="новый пароль"  />

          <label>Повторите пароль</label>
          <input
            name=''
            type="password"
            className='modal_input'
            placeholder="Повторите пароль" />
          <button type='submit' className='btn modal_button' >сохранить</button>
        </form>

      </div>
    </>
  )
}

export default UserCabinet
