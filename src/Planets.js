import React, { useState, useEffect } from 'react';

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [favPlanets, setFavPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = async () => {
    const res = await fetch(`https://assignment-machstatz.herokuapp.com/planet`);
    const data = await res.json();
    setPlanets(data);
  };

  return (
    <div>
      {planets.map((planet) => (
        <ul key={planet.id} className='list-group'>
          <li className='list-group-item d-flex justify-content-between align-items-center'>
            {planet.name}
            <span>
              <button className='btn btn-primary'>Add to Fav</button>
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Planets;
