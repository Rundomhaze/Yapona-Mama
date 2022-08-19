import React from 'react';

function Modal({ roll, vegan, spicy, setOpen }) {
  return (
    <div className="card modalcard" style={{ 'z-index': '1' }}>
      <div className="">
        <img src={roll.photo} alt="" className="imagemodal" alt="" />
        {roll.is_vegan && <img src={vegan} alt="" />}
        {roll.is_spicy && <img src={spicy} alt="" />}
        <div className="modalbtn">
          <a className="btn-floating btn-small waves-effect waves-light blue "><i className="material-icons">add</i></a>
        </div>
        <span className="titlecard" style={{ color: 'red' }}>{roll.title}</span>
        <span className="titlecard" style={{ color: 'green' }}>{roll.new_price}</span>
        <br />
      </div>
      <div className="card-content">
        <p className="desccard"><i>Ингредиенты: {roll.description}</i></p>
        <span className="typeroll"> Вид : {roll['Subtype.title']} </span>
      </div>
      <button onClick={() => setOpen(false)}>X </button>
    </div>
  );
}
export default Modal;
