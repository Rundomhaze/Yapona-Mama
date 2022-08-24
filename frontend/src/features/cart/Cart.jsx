/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import './cart.css';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const { foods, details } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleQuantityClick = async (event, add, order_id, food_id, index) => {
    event.preventDefault();
    dispatch({ type: 'EDIT_QUANTITY', payload: { add, order_id, food_id } });
    dispatch({ type: 'COUNT_TOTAL' });
    // if (user) {
    //   await fetch('/api/cart', {
    //     method: 'PUT',
    //     headers: { 'Content-type': 'Application/json' },
    //     body: JSON.stringify({
    //       order_id,
    //       food_id,
    //       quantity: foods[index].quantity,
    //       total_price: details[0].total_price
    //     }) 
    //   });
    // } 
  };

  const handleDeleteClick = async (event, order_id, food_id) => {
    event.preventDefault();
    dispatch({ type: 'DELETE_FOOD', payload: { order_id, food_id } });
    dispatch({ type: 'COUNT_TOTAL' });
    // if (user) {
    //   await fetch('/api/cart', {
    //     method: 'DELETE',
    //     headers: { 'Content-type': 'Application/json' },
    //     body: JSON.stringify({
    //       order_id,
    //       food_id,
    //       total_price: details[0].total_price
    //     }) 
    //   });
    // } 
  };

  return (
    <div className="container">
      <h4 className="cart-header">Корзина</h4>
      <div className="collection-item header">
        <div className="foodTitleHead">Наименование</div>
        <div className="foodQuantityHead">Количество</div>
        <div className="foodPriceHead">Цена</div>
      </div>
      <ul className="collection with-header">
        {foods && foods.map((food, index) => (
          <li key={`${food.order_id}${food.food_id}`} className="collection-item">
            <div className="foodNumberItem">
              {`${index + 1}`}
            </div>
            <div className="foodTitleItem">
              {food['Food.title']}
            </div>
            <div className="foodQuantityItem">
              <a href="minus" onClick={(event) => handleQuantityClick(event, false, food.order_id, food.food_id, index)}>
                <i className="Small material-icons">remove</i>
              </a>
              <div>{food.quantity}</div>
              <a href="plus" onClick={(event) => handleQuantityClick(event, true, food.order_id, food.food_id, index)}>
                <i className="Small material-icons">add</i>
              </a>
            </div>
            <div className="foodPriceItem">
              {`${food['Food.new_price'] * food.quantity} ₽`}
            </div>
            <div className="foodDeleteItem">
              <a href="delete" onClick={(event) => handleDeleteClick(event, food.order_id, food.food_id)}>
                <i className="Small material-icons">clear</i>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="collection-item footer">
        <div className="totalTitle">Итоговая стоимость:</div>
        {details[0] && <div className="totalValue">{`${details[0].total_price} ₽`}</div>}
      </div>
      <h4 className="cart-header">Оформление заказа</h4>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4">
              <input id="street" type="text" className="validate" />
              <label htmlFor="street">Улица</label>
            </div>

            <div className="input-field col s2">
              <input id="house" type="text" className="validate" />
              <label htmlFor="house">Дом</label>
            </div>

            <div className="input-field col s2">
              <input id="entrance" type="text" className="validate" />
              <label htmlFor="entrance">Подъезд</label>
            </div>

            <div className="input-field col s2">
              <input id="floor" type="text" className="validate" />
              <label htmlFor="floor">Этаж</label>
            </div>

            <div className="input-field col s2">
              <input id="flat" type="text" className="validate" />
              <label htmlFor="flat">Квартира</label>
            </div>

            <div className="input-field col s12">
              <textarea id="comment" type="text" className="materialize-textarea" />
              <label htmlFor="comment">Комментарии к заказу</label>
            </div>
          </div>
        </form>
      </div>
      <div className="collection-item footer order">
        <a className="waves-effect waves-light btn-large">Оформить</a>
      </div>
    </div>
  );
}

export default Cart;
