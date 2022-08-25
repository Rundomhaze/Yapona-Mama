import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import regUserAC from '../../redux/actionCreators/userAC';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import MainComponent from '../main/MainComponent';
import Delivery from '../delivery/Delivery';
import Sale from '../sale/Sale';
import AdminCabinet from '../Cabinet/AdminCabinet';
import UserCabinet from '../Cabinet/UserCabinet';
import Cart from '../cart/Cart';

function App() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.cart.details);
  const { user } = useSelector((state) => state.user);
  
  useEffect(() => {
    fetch('http://localhost:4000/auth/user', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((result) => result.json())
      .then((data) => dispatch(regUserAC(data)));
  }, [dispatch]);

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
  }, [dispatch, user, id]);

  return (

    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<MainComponent />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/admin" element={<AdminCabinet />} />
          <Route path="/user_room" element={<UserCabinet />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
