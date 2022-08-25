import React from 'react';
import './modalSuccess.css';
import { useNavigate } from 'react-router-dom';

function ModalSuccess({ isOpen, closeModal }) {
  const navigate = useNavigate();

  return (
    <div className={`modal_wrapper ${isOpen ? 'open' : 'close'} hard`}>
      <div className="modal_body">
        <div className="modal_close" onClick={() => navigate('/')}>&times;</div>
        <h3>Заказ успешно оформлен</h3>
        <button onClick={() => navigate('/')} className="waves-effect waves-light btn-large">Ok</button>
      </div>
    </div>
  );
}

export default ModalSuccess;
