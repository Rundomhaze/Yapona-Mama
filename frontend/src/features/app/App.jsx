import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import MainComponent from '../main/MainComponent';
import Auth from "../auth/Auth";

function App() {

  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<MainComponent />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
