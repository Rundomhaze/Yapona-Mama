import React, { useEffect, useState } from 'react';
import './AdminCabinet.css';
import { useDispatch, useSelector } from 'react-redux';
import AdminCard from './AdminCard';
import actionCreator from '../../redux/actionCreators/adminAC';

function AdminCabinet() {
  const [photo, setPhoto] = useState();
  const dispatch = useDispatch();
  const { filterfood, types } = useSelector((state) => state.admin);
  const [selectfood, setSelectfood] = useState();

  useEffect(() => {
    fetch('/api/load', { method: 'GET' })
      .then((result) => result.json())
      .then((data) =>
        dispatch(actionCreator.loadFoods(data))
      );
  }, []); 

  useEffect(() =>
    filterfood && setSelectfood(filterfood), [filterfood]);
  async function handleSubmit(event) {
    event.preventDefault();
    const fetchFood = {
      photo,
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
  async function hundleUploadPhoto(e) {
    try {
      const picturesData = [...e.target.files];
      const file = new FormData();
      picturesData.forEach((img) => {
        file.append('homesImg', img);
      });
      const response = await fetch('/upload/photo', {
        method: 'POST',
        body: file
      }
      );
      const result = await response.json();
      setPhoto(result);

    } catch (error) {
      console.log(error.message);
    }
  }
  // console.log(selectfood);
  return (
    <div>
      <div className="classforpoli">
        <h4>Добавим Карточку? </h4>
        <div className="addcard">
          <form onSubmit={handleSubmit}>
            <input type="file" name="photo" placeholder="Добавьте фотографию" onChange={hundleUploadPhoto} />
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
      </div>

      <h4>Выберите группу товаров</h4>
      <form onSubmit={(event) => {
        event.preventDefault();
        event.target.reset();
      }}
      >
        <select
          className="selectadmin"
          onChange={(e) => {
            e.target.value === 'all'
              ? setSelectfood(filterfood)
              : setSelectfood(filterfood.filter((el) => el['Type.title'] === e.target.value));
          }}
        >

          <option value="all">Все</option>
          {types && types.map((el) =>
            <option key={el.id} value={el.title}>{el.title}</option>)}

        </select>
      </form>
      <div className="alladmindiv">{selectfood && selectfood.map((el) => (

        <AdminCard el={el} key={el.id} />

      ))}
      </div>
      <div className="upBtn"><a href="#">Наверх</a></div>
    </div>
  );
}

export default AdminCabinet;
