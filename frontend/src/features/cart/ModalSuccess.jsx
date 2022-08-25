import React from 'react';
import './modalSuccess.css';
import { useNavigate } from 'react-router-dom';

function ModalSuccess({ isOpen, closeModal }) {
  const navigate = useNavigate();

  return (
    <div className={`modal_wrapper ${isOpen ? 'open' : 'close'} hard`}>
      <div className="modal_body">
        <span className="modalMessage">Заказ успешно оформлен!</span>
        <button 
          onClick={() => navigate('/#')} 
          className="waves-effect waves-light btn-large btnOrder"
        >На главную
        </button>
      </div>
    </div>
  );
}

export default ModalSuccess;
