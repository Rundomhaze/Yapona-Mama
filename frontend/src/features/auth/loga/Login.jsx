import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import './Login.css';
import regUserAC from '../../../redux/actionCreators/userAC';

function Login({ isOpen, closeModal }) {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.user);

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
          
        <form onSubmit={handleSubmitFormLogin}>
          <h5 className="title">Вход</h5>
          {message && <p>{message}</p>}
          <InputMask 
            mask="8-(999)-999-99-99"
            name="phone"
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

          <button type="submit" className="btn modal_button">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
