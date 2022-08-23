import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Listmenu from '../cards/ListMenu';
import regUserAC from '../../redux/actionCreators/userAC';
import Navbar from '../navbar/Navbar';
import MainComponent from '../main/MainComponent';
import Delivery from '../delivery/Delivery';
import Sale from '../sale/Sale';
import Cart from '../cart/Cart';

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

  const { foods, details } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (user) {
  //     fetch('/api/cart')
  //       .then((result) => result.json())
  //       .then((data) => {
  //         dispatch({ 
  //           type: 'LOAD_CART', 
  //           payload: { foods: data.orderFoods, details: data.orderDetails } });
  //       });
  //   }
  // }, [dispatch, user]);

  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<MainComponent />} />
        <Route path="/menu/roll" element={<Listmenu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
