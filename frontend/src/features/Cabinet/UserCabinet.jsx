import React, { useState } from 'react';
import './UserCabinet.css';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import updateDataAC from '../../redux/actionCreators/updateDataAC';

function UserCabinet() {
  const { user } = useSelector((state) => state.user);
  const [number, setNumber] = useState(null);
  const [editInfoMessage, setEditInfoMessage] = useState(null);
  const [editPassMessage, setEditPassMessage] = useState(null);
  const dispatch = useDispatch();

  async function handleSubmitInfo(e) {
    e.preventDefault();
    const userInfo = {
      id: user.id,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.tel.value,
      orderStreet: e.target.orderStreet.value,
      orderHouse: e.target.orderHouse.value,
      orderEntrance: e.target.orderEntrance.value,
      orderFloor: e.target.orderFloor.value,
      orderFlat: e.target.orderFlat.value
    };
    const result = await fetch('/api/edit_user_info', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: { 'Content-Type': 'application/json' },
    });
    const message = await result.json();
    dispatch(updateDataAC(userInfo));
    setEditInfoMessage(message);
  }

  async function handleSubmitPassword(e) {
    e.preventDefault();
    const newPassword = {
      id: user.id,
      password: e.target.password.value,
      passwordConfirm: e.target.passwordRepeat.value,
    };
    const result = await fetch('/api/edit_user_pass', {
      method: 'POST',
      body: JSON.stringify(newPassword),
      headers: { 'Content-Type': 'application/json' },
    });
    const message = await result.json();
    setEditPassMessage(message);
  }

  const userPhone = user && user.phone;
  return (
    <>
      <h3>Личный кабинет</h3>
      <div className="userCab">
        <form onSubmit={handleSubmitInfo}>
          <h5 className="title">Ваши данные</h5><br />

          <label>Имя</label>
          <input
            name="name"
            type="text"
            className="modal_input"
            defaultValue={user.name}
          />

          <label>Почта</label>
          <input
            name="email"
            type="email"
            className="modal_input"
            defaultValue={user.email}
          />

          <label>Телефон</label>

          <InputMask
            mask="8-(999)-999-99-99"
            name="tel"
            type="tel"
            className="modal_input"
            onChange={(e) => setNumber(e.target.value)}
            value={number || user.phone}
          />

          <label>Улица</label>
          <input
            name="orderStreet"
            type="text"
            className="modal_input"
            defaultValue={user.orderStreet}
          />

          <label>Дом</label>
          <input
            name="orderHouse"
            type="text"
            className="modal_input"
            defaultValue={user.orderHouse}
          />

          <label>Парадная</label>
          <input
            name="orderEntrance"
            type="text"
            className="modal_input"
            defaultValue={user.orderEntrance}
          />

          <label>Этаж</label>
          <input
            name="orderFloor"
            type="text"
            className="modal_input"
            defaultValue={user.orderFloor}
          />

          <label>Квартира</label>
          <input
            name="orderFlat"
            type="text"
            className="modal_input"
            defaultValue={user.orderFlat}
          />

          {editInfoMessage && (<p>{editInfoMessage.message}</p>)}

          <button type="submit" className="btn modal_button">сохранить</button>
        </form>

        <form className="formPass" onSubmit={handleSubmitPassword}>
          <h5 className="title">Изменить пароль</h5><br />
          <label>Пароль</label>
          <input
            name="password"
            type="password"
            className="modal_input"
            placeholder="новый пароль"
          />

          <label>Повторите пароль</label>
          <input
            name="passwordRepeat"
            type="password"
            className="modal_input"
            placeholder="Повторите пароль"
          />

          {editPassMessage && (<p>{editPassMessage.message}</p>)}

          <button type="submit" className="btn modal_button">сохранить</button>
        </form>

      </div>
    </>
  );
}

export default UserCabinet;
