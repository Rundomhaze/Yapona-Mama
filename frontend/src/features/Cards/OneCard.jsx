import React from 'react';
import './OneCard.css';
import Modal from './Modal.jsx';

function Onecard({ roll, spicy, vegan }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="col s4 ">
      <div className="card onecard" onClick={() => setOpen((prev) => !prev)}>
        <div className="">
          <img src={roll.photo} alt="" className="imageroll" />
          {roll.is_vegan && <img src={vegan} alt="" className="icon" />}
          {roll.is_spicy && <img src={spicy} alt="" className="icon" />}
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
          <Modal roll={roll} spicy={spicy} vegan={vegan} setOpen={setOpen} />
        )}
    </div>
  );
}
export default Onecard;

