import React, { useState } from 'react';
import './OneCard.css';
import ModalUnstyledDemo from './Modal';

function Onecard({ roll, spicy, vegan }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="col s4 onecard">
      <div className="card ">
        <div className="">
          <img src={roll.photo} alt="" className="imageroll" alt="" onClick={() => setOpen(true)} />
          <div className="card__extras">
            {roll.is_vegan && <img src={vegan} alt="" className="icon" />}
            {roll.is_spicy && <img src={spicy} alt="" className="icon icon_2" />}
          </div>
          <div className="redbtn">
            <a className="btn-floating btn-small waves-effect waves-light blue "><i className="material-icons">add</i></a>
          </div>
          <span className="titlecard" style={{ color: 'red' }}>{roll.title}</span>
          <span className="titlecard" style={{ color: 'green' }}>{roll.new_price}</span>
          <br />
        </div>
        <div className="card-content">
          {/* <p className="desccard"><i>Ингредиенты: {roll.desc}</i></p> */}
          {/* <span className="typeroll"> Вид : {roll.subtype_id} </span> */}
        </div>
      </div>
      {open
        && (
          <ModalUnstyledDemo roll={roll} spicy={spicy} vegan={vegan} setOpen={setOpen} open={open} handleOpen={handleOpen} />
        )}
    </div>
  );
}
export default Onecard;
