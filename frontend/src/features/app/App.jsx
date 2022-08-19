import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import MainComponent from '../main/MainComponent';

function App() {

  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<MainComponent />} />
        <Route path="/registration" element={<MainComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
