import React, { useState } from 'react';
import './OneCard.css';
import ModalUnstyledDemo from './Modal';

function Onecard({ onefood, spicy, vegan }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="col s4 onecard ">
      <div className="card ">
        <div className="hover-image-scale">
          <div className="boximage">
            <img src={onefood.photo} alt="photo" className="imageroll hover-image-scale" onClick={() => setOpen(true)} />
          </div>
          <div className="card__extras">
            {onefood.is_vegan && <img src={vegan} alt="" className="icon" />}
            {onefood.is_spicy && <img src={spicy} alt="" className={`icon ${onefood.is_vegan && 'icon_2'}`} />}
          </div>
          <div className="redbtn">
            <a className="btn-floating btn-large waves-effect waves-light orange "><i className="material-icons">add</i></a>
          </div>
          <span className="titlecard titlename" style={{ color: 'green' }}>{onefood.title}</span>
          <br />
          {onefood.old_price && <s style={{ color: 'red' }} className="titlecard price">{onefood.old_price} ₽</s>}
          <br />
          <span className="titlecard price" style={{ color: 'green' }}> {onefood.new_price} ₽</span>
          <br />
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
