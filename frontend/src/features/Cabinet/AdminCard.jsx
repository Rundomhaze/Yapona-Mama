import React, { useState } from 'react';

function AdminCard({ el }) {
  const [myvaluedesc, setMyvaluedesc] = useState(null);
  const [myvaluetitle, setMyvaluetitle] = useState(null);
  return (

    <form className="cardAdmin">
      <img src={el.photo} alt="" />
      <input type="text" value={myvaluetitle || el.title} onChange={((event) => setMyvaluetitle(event.target.value))} />
      <input type="text" value={myvaluedesc || el.description} onChange={((event) => setMyvaluedesc(event.target.value))} />
      <button>Сохранить</button>  <button>Обновить фото</button>
    </form>
  );

}
export default AdminCard;
