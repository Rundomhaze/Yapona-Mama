import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import MainComponent from '../main/MainComponent';
import Auth from '../auth/Auth';
import Listmenu from '../Cards/ListMenu';

function App() {

  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<MainComponent />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/menu/roll" element={<Listmenu />} />
      </Route>
    </Routes>
  );
}

export default App;
