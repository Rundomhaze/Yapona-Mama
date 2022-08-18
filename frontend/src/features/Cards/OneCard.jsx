import React from 'react';
import './OneCard.css';

function Onecard({ roll, spicy, vegan }) {

  return (
    <div className="col s4 ">
      <div className="card onecard">
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
    </div>
  );
}
export default Onecard;

{ /* <div key={roll.title} style={{ outline: '2px solid', width: '200px' }}>
      <div style={{ height: '100px', width: '150px', float: 'left' }}>
        <img src={roll.image} alt="" className="imageroll" style={{ height: '100%', width: '100%' }} />
      </div>
      <h4>{roll.title}</h4>
      <i>{roll.desc}</i>
      <br />
      <br />
      Вид роллов : {roll.type}
    </div> */ }

//
//
//
