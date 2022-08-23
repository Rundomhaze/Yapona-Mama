import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Modal({ roll, vegan, spicy, setOpen }) {
  const { foods, details } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(foods);
  }, [foods]);
  const handleAddClick = async (event, roll) => {
    dispatch({ 
      type: 'ADD_FOOD', 
      payload: { 
        roll, 
        order_id: details[0] && details[0].id
      } 
    });
    dispatch({ type: 'COUNT_TOTAL' });

    if (user) {
      // await fetch('/api/cart', {
      //   method: 'POST',
      //   headers: { 'Content-type': 'Application/json' },
      //   body: JSON.stringify({
      //     order_id: details[0].id,
      //     food_id: roll.id,
      //     total_price: details[0].total_price
      //   }) 
      // });
    }
  };

  return (
    <div className="card modalcard" style={{ 'z-index': '1' }}>
      <div className="">
        <img src={roll.photo} alt="" className="imagemodal" alt="" />
        {roll.is_vegan && <img src={vegan} alt="" />}
        {roll.is_spicy && <img src={spicy} alt="" />}
        <div className="modalbtn">
          <a className="btn-floating btn-small waves-effect waves-light blue "><i onClick={(event) => handleAddClick(event, roll)} className="material-icons">add</i></a>
        </div>
        <div className="card-content_modal">
          <div className="card-content_subtitle">
            <span className="titlecard" style={{ color: 'red' }}>{roll.title}</span>
            <span className="titlecard" style={{ color: 'green' }}>{roll.new_price}</span>
          </div>
          <br />
          <p className="desccard"><i>Ингредиенты: {roll.description}</i></p>
          <span className="typeroll"> Вид : {roll['Subtype.title']} </span>
        </div>
        <button onClick={() => setOpen(false)}>X </button>
      </div>
    </div>
  );
}
export default Modal;
