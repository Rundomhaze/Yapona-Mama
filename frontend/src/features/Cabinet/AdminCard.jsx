import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionCreator from '../../redux/actionCreators/adminAC';

function AdminCard({ el }) {
  const [myvaluedesc, setMyvaluedesc] = useState(null);
  const [myvaluetitle, setMyvaluetitle] = useState(null);
  const dispatch = useDispatch();

  async function handleDelete(event) {
    event.preventDefault();
    const result = await fetch('/api/del', {
      method: 'DELETE',
      body: JSON.stringify({ id: el.id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const delEl = await result.json();
    dispatch(actionCreator.deleteFood(delEl));
  }
  return (

    <form className="cardAdmin">
      <div className="cardAdminimg">
        <img src={el.photo} alt="" className='admimg' />
      </div>
      <input type="text" value={myvaluetitle || el.title} onChange={((event) => setMyvaluetitle(event.target.value))} />
      <input type="text" value={myvaluedesc || el.description} onChange={((event) => setMyvaluedesc(event.target.value))} />
      <button>Сохранить</button> <button>Обновить фото</button> <button onClick={handleDelete}>Удалить</button>
    </form>
  );

}
export default AdminCard;
