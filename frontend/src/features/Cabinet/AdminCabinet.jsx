import React, { useEffect, useState } from 'react';
import './AdminCabinet.css';
import { useDispatch, useSelector } from 'react-redux';
import AdminCard from './AdminCard';
import actionCreator from '../../redux/actionCreators/adminAC';

function AdminCabinet() {

  const dispatch = useDispatch();
  const { filterfood } = useSelector((state) => state.admin);

  useEffect(() => {
    fetch('/api/load', { method: 'GET' })
      .then((result) => result.json())
      .then((data) =>
        dispatch(actionCreator.loadFoods(data))
      );
  }, []);

  // if (!filterfood) return <div>Zagruzka</div>;

  async function handleSubmit(event) {
    event.preventDefault();
    const fetchFood = {
      photo: event.target.photo.value,
      title: event.target.title.value,
      description: event.target.description.value,
      weight: event.target.weight.value,
      new_price: event.target.new_price.value,
      is_vegan: event.target.is_vegan.checked,
      is_spicy: event.target.is_spicy.checked,
    };
    const result = await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify(fetchFood),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newFood = await result.json();
    dispatch(actionCreator.addFood(newFood));
    event.target.reset();

  }

  return (
    <div>
      <h4>Добавим Карточку? </h4>
      <div className="addcard">
        <form onSubmit={handleSubmit}>
          <input type="text" name="photo" placeholder="Добавьте фотографию" />
          <input type="text" name="title" placeholder="Наименование Товара" />
          <input type="text" name="description" placeholder="Состав" />
          <input type="text" name="weight" placeholder="Вес (граммы)" />
          <input type="text" name="new_price" placeholder="Цена" />

          <h6>Веганское?</h6>
          <input type="checkbox" name="is_vegan" className="checkboxIs" />
          <br />
          <h6>Острое?</h6>
          <input type="checkbox" name="is_spicy" className="checkboxIs" />
          <br />
          <button type="submit">Сохранить</button>
        </form>
      </div>

      <h4>Выберите группу товаров</h4>
      <form onSubmit={(event) => {
        event.preventDefault();
        event.target.reset();
        // return console.log('===-=-=-=-=-=-=', event.target.select.value);
      }}
      >
        <select
          name="select"
          className="selectadmin"
        >
          <option>Все</option>
          <option>Супы</option>
          <option>Роллы</option>
        </select>
        <br />
      </form>
      <div className="alladmindiv">{filterfood.map((el) => (

        <AdminCard el={el} key={el.id} />

      ))}
      </div>
      <div className="upBtn"><a href="#">Наверх</a></div>
    </div>
  );
}

export default AdminCabinet;
