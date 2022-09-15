import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import './Reg.css';
import regUserAC from '../../../redux/actionCreators/userAC';

function Reg({ isOpen, closeModal }) {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.user);
  
  function handleSubmitFormReg(e) {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
      passwordConfirm: e.target.passwordRepeat.value,
      name: e.target.name.value,
      phone: e.target.tel.value,
    };

    fetch('http://localhost:4000/auth/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body)
    })
      .then((result) => result.json())
      .then((data) => {
        dispatch(regUserAC(data));
        if (data.auth) {
          e.target.reset();
          closeModal();
        } else {
          e.target.reset();
        }
      });
  }

  return (
    <div className={`modal_wrapper ${isOpen ? 'open' : 'close'}`}>
      <div className="modal_body">
        <div className="modal_close" onClick={() => closeModal()}>&times;</div>
        <form onSubmit={handleSubmitFormReg}>
          <h5 className="title">Регистрация</h5>
          {message && <p>{message}</p>}
          <input 
            name="name" 
            type="text" 
            placeholder="введите имя" 
            className="modal_input"
          />
          <input 
            name="email" 
            type="email"
            placeholder="email" 
            className="modal_input"
          />
          <InputMask 
            mask="8-(999)-999-99-99"
            name="tel"
            type="tel" 
            className="modal_input"
            placeholder="телефон"
          />
          <input 
            name="password" 
            type="password" 
            placeholder="пароль"
            className="modal_input"
          />
          <input 
            name="passwordRepeat" 
            type="password" 
            placeholder="повторите пароль"
            className="modal_input"
          />
          <button type="submit" className="btn modal_button">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Reg;
