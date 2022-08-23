import React, { useEffect, useState } from 'react';
import './AdminCabinet.css';
import AdminCard from './AdminCard';

function AdminCabinet() {

  const [allEda, setAllEda] = useState(null);
  const [filterEda, setFilterEda] = useState(null);

  useEffect(() => {
    fetch('/api/load', { method: 'GET' })
      .then((result) => result.json())
      .then((data) => {
        setAllEda(data);
        setFilterEda(data);
      });
  }, []);

  if (!allEda) return <div>Zagruzka</div>;

  console.log(allEda);
  console.log(filterEda);
  return (
    <div>
      <h3>hello</h3>
      <h4>Что будем выбирать?</h4>
      <form onSubmit={(event) => {
        event.preventDefault();
        return console.log('===-=-=-=-=-=-=', event.target.select.value);
      }}
      >
        <select
          name="select"
          className="selectadmin"
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value === 'Все') return setFilterEda(allEda);
            setFilterEda(allEda.filter((el) => el['Type.title'] === e.target.value));
            // console.log(setFilterEda(allEda.filter((el) => el['Type.title'] == e.target.value)));
          }}
        >
          <option>Все</option>
          <option>Супы</option>
          <option>Роллы</option>
        </select>
        <br />
      </form>
      {filterEda && (
        <div className="alladmindiv">{filterEda.map((el) => (
          <AdminCard el={el} />
        ))}
        </div>
      )}
    </div>
  );
}

export default AdminCabinet;
