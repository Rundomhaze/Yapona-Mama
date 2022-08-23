import React, { useEffect, useState } from 'react';
import Onecard from '../cards/OneCard';
import './Hits.css'
import spicy from '../../роллы/icons8-перец-чили-50.png';
import vegan from '../../роллы/icons8-брокколи-50.png';

function Hits() {
  const [allHits, setHits] = useState([]);

  useEffect(() => {
    fetch('/api/hits', { method: 'GET' })
      .then((result) => result.json())
      .then((data) => setHits(data))
  }, [allHits]);


  return (
    <div className="maindivmap hits" >
      <h3>Хиты продаж:</h3>
      <div className="row">
        {allHits && allHits.map((oneHit) => (
          <Onecard key={oneHit.id} onefood={oneHit} vegan={vegan} spicy={spicy} />
        ))}
      </div>
    </div>
  )
}

export default Hits;
