/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import './cart.css';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import ModalSuccess from './ModalSuccess';

function Cart() {
  const { foods, details } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const [phone, setPhone] = useState(null);
  const [foodsAction, setFoodsAction] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'COUNT_TOTAL' });
  }, [foods]);

  useEffect(() => {
    if ('id' in user) {
      fetch('/api/cart')
        .then((result) => result.json())
        .then((data) => {
          dispatch({ 
            type: 'LOAD_CART', 
            payload: { foods: data.orderFoods, details: data.orderDetails } });
        });
    }
  }, [dispatch, user]);

  useEffect(() => {
    // EDIT_QUANTITY
    if ('id' in user && 'type' in foodsAction && foodsAction.type === 'EDIT_QUANTITY') {
      console.log('EDIT_QUANTITY');
      fetch('/api/cart', {
        method: 'PUT',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({
          order_id: foodsAction.payload.order_id,
          food_id: foodsAction.payload.food_id,
          quantity: foods[foodsAction.payload.index].quantity,
          total_price: details.total_price
        })
      }).then((data) => data); 
    } else if ('id' in user && 'type' in foodsAction && foodsAction.type === 'DELETE_FOOD') {
    // DELETE_FOOD
      console.log('DELETE_FOOD');
      fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({
          order_id: foodsAction.payload.order_id,
          food_id: foodsAction.payload.food_id,
          total_price: details.total_price
        }) 
      }).then((data) => data); 
    }
  }, [foodsAction]);

  const handleQuantityClick = async (event, add, order_id, food_id, index) => {
    event.preventDefault();
    setFoodsAction({ type: 'EDIT_QUANTITY', payload: { add, order_id, food_id, index } });
    dispatch({ type: 'EDIT_QUANTITY', payload: { add, order_id, food_id } });
    dispatch({ type: 'COUNT_TOTAL' });
  };

  const handleDeleteClick = async (event, order_id, food_id) => {
    event.preventDefault();
    setFoodsAction({ type: 'DELETE_FOOD', payload: { order_id, food_id } });
    dispatch({ type: 'DELETE_FOOD', payload: { order_id, food_id } });
    dispatch({ type: 'COUNT_TOTAL' });
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    setShowModal(true);

    fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify({
        order_id: details.id,
        total_price: details.total_price,
        comment: event.target.comment.value,
        phone: event.target.phone.value,
        street: event.target.street.value,
        house: event.target.house.value,
        entrance: event.target.entrance.value,
        floor: event.target.floor.value,
        flat: event.target.flat.value,
      }) 
    });
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <>
      <div className="container">
        <h4 className="cart-header">Корзина</h4>
        <div className="collection-item header">
          <div className="foodTitleHead">Наименование</div>
          <div className="foodQuantityHead">Количество</div>
          <div className="foodPriceHead">Цена</div>
        </div>
        <ul className="collection with-header">
          {foods.map((food, index) => (
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
          {details[0] && <div className="totalValue">{`${details.total_price} ₽`}</div>}
        </div>
        <h4 className="cart-header">Оформление заказа</h4>
        <div className="row">
          <form onSubmit={handleOrderSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s4">
                <InputMask 
                  mask="8-(999)-999-99-99"
                  name="phone"
                  type="tel" 
                  id="phone"
                  tabIndex="1"
                  className="orderInput"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone || user.orderPhone}
                  required
                />
                <label className={'orderPhone' in user ? 'active' : ''} htmlFor="phone">Телефон</label>
              </div>
            
              <div className="input-field col s4">
                <input defaultValue={'orderStreet' in user ? user.orderStreet : ''} name="street" id="street" tabIndex="2" type="text" className="validate orderInput" />
                <label htmlFor="street" className={'orderStreet' in user ? 'active' : ''}>Улица</label>
              </div>

              <div className="input-field col s1">
                <input defaultValue={'orderHouse' in user ? user.orderHouse : ''} name="house" id="house" tabIndex="3" type="text" className="validate orderInput" />
                <label htmlFor="house" className={'orderHouse' in user ? 'active' : ''}>Дом</label>
              </div>

              <div className="input-field col s1">
                <input defaultValue={'orderEntrance' in user ? user.orderEntrance : ''} name="entrance" id="entrance" tabIndex="4" type="text" className="validate orderInput" />
                <label htmlFor="entrance" className={'orderEntrance' in user ? 'active' : ''}>Подъезд</label>
              </div>

              <div className="input-field col s1">
                <input defaultValue={'orderFloor' in user ? user.orderFloor : ''} name="floor" id="floor" tabIndex="5" type="text" className="validate orderInput" />
                <label htmlFor="floor" className={'orderFloor' in user ? 'active' : ''}>Этаж</label>
              </div>

              <div className="input-field col s1">
                <input defaultValue={'orderFlat' in user ? user.orderFlat : ''} name="flat" id="flat" tabIndex="6" type="text" className="validate orderInput" />
                <label htmlFor="flat" className={'orderFlat' in user ? 'active' : ''}>Квартира</label>
              </div>

              <div className="input-field col s12">
                <textarea name="comment" id="comment" tabIndex="7" type="text" className="materialize-textarea orderInput" />
                <label htmlFor="comment">Комментарии к заказу</label>
              </div>
            </div>
            <div className="collection-item footer order">
              <button type="submit" className="waves-effect waves-light btn-large">Оформить</button>
            </div>
          </form>
        </div>
      </div>
      <ModalSuccess 
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
}

export default Cart;
