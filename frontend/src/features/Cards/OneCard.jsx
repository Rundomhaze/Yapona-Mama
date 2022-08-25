import React, { useState, useEffect } from 'react';
import './OneCard.css';
import { useDispatch, useSelector } from 'react-redux';
import ModalUnstyledDemo from './Modal';

function Onecard({ onefood, spicy, vegan }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const { foods, details } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (foods.length > 0) {
      const food = foods.find((food) => food.food_id === onefood.id);
      if (food) {
        setQuantity(food.quantity);
      }
    }
  }, [foods]);

  const [quantity, setQuantity] = useState(0);

  const handleClickAdd = (event, id) => {
    event.preventDefault();
    dispatch({ 
      type: 'ADD_FOOD', 
      payload: { 
        roll: onefood, 
        order_id: details.id
      } 
    });
    dispatch({ type: 'COUNT_TOTAL' });

    if ('id' in user) {
      fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({
          order_id: details.id,
          food_id: onefood.id,
          total_price: details.total_price
        }) 
      }).then((data) => data);
    }
  };
  
  return (
    <div className="col s4 onecard ">
      <div className="card ">
        <div className="hover-image-scale">
          <div className="boximage">
            <img src={onefood.photo} alt="photo" className="imageroll hover-image-scale" onClick={() => setOpen(true)} />
          </div>
          <div className="card__extras">
            {onefood.is_vegan && <img src={vegan} alt="" className="icon" />}
            {onefood.is_spicy && <img src={spicy} alt="" className="icon icon_2" />}
          </div>

          <div className="redbtn">
            <a onClick={(event) => handleClickAdd(event, onefood.id)} className="btn-floating btn-large waves-effect waves-light orange plus"><i className="material-icons">add</i></a>
            {quantity === 0 ? null : (
              <div className="circleQuantity">
                {quantity}
              </div>
            )}
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
