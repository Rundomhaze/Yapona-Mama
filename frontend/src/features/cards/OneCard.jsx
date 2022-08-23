import React, { useState } from 'react';
import './OneCard.css';
import ModalUnstyledDemo from './Modal';

function Onecard({ onefood, spicy, vegan }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="col s4 onecard">
      <div className="card ">
        <div className="">
          <img src={onefood.photo} alt="photo" className="imageroll" alt="" onClick={() => setOpen(true)} />



          <div className="card__extras">
            {onefood.is_vegan && <img src={vegan} alt="" className="icon" />}
            {onefood.is_spicy && <img src={spicy} alt="" className="icon icon_2" />}
          </div>
          <div className="redbtn">
            <a className="btn-floating btn-small waves-effect waves-light blue "><i className="material-icons">add</i></a>
          </div>
          <span className="titlecard" style={{ color: 'red' }}>{onefood.title}</span>
          <span className="titlecard" style={{ color: 'green' }}>{onefood.new_price}</span>
          <br />
        </div>
        <div className="card-content">
          {/* <p className="desccard"><i>Ингредиенты: {roll.desc}</i></p> */}
          {/* <span className="typeroll"> Вид : {roll.subtype_id} </span> */}
        </div>
      </div>
      {open
        && (
          <ModalUnstyledDemo roll={onefood} spicy={spicy} vegan={vegan} setOpen={setOpen} open={open} handleOpen={handleOpen} />
        )}
    </div>
  );
}
export default Onecard;
