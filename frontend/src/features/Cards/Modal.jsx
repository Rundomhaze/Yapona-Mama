import React from 'react';

function Modal({ roll, vegan, spicy }) {
  return (
    <div className="card modalcard" style={{ 'z-index': '1' }}>
      <div className="">
        <img src={roll.image} alt="" className="imageroll" alt="" />
        {roll.isvegan && <img src={vegan} alt="" />}
        {roll.isspicy && <img src={spicy} alt="" />}
        <div className="redbtn">
          <a className="btn-floating btn-small waves-effect waves-light blue "><i className="material-icons">add</i></a>
        </div>
        <span className="titlecard" style={{ color: 'red' }}>{roll.title}</span>
        <br />
      </div>
      <div className="card-content">
        <p className="desccard"><i>Ингредиенты: {roll.desc}</i></p>
        <span className="typeroll"> Вид : {roll.type} </span>
      </div>
    </div>
  );
}
export default Modal;
