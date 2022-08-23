import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Listmenu from '../Cards/ListMenu';
import regUserAC from '../../redux/actionCreators/userAC';
import Navbar from '../navbar/Navbar';
import MainComponent from '../main/MainComponent';
import Delivery from '../delivery/Delivery';
import Sale from '../sale/Sale';
import AdminCabinet from '../Cabinet/AdminCabinet';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:4000/auth/user', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((result) => result.json())
      .then((data) => dispatch(regUserAC(data)));
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<MainComponent />} />
        <Route path="/menu/roll" element={<Listmenu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/admin" element={<AdminCabinet />} />
      </Route>
    </Routes>
  );
}

export default App;
