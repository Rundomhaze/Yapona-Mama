import React from 'react';
import Listmenu from '../Cards/ListMenu';
import './MainComp.css';
import { Link } from 'react-router-dom';

function MainComponent() {
  return (
    <div className="allcomp">
      <h3> Япона мама</h3>
      <Link to="/menu/roll">роллы</Link>
    </div>
  );
}

export default MainComponent;
