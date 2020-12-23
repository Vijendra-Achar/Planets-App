import React, { useState, useEffect } from 'react';

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  }, []);

  const getPlanets = async () => {
    const res = await fetch(`https://assignment-machstatz.herokuapp.com/planet`);
    const data = await res.json();
    setPlanets(data);
  };

  const saveToFavs = (ev) => {
    let favs = localStorage.getItem('favs');
    let arr = [];

    let value = ev.target.dataset.planet;

    if (favs) {
      arr = JSON.parse(favs);
      arr.push(value);
      arr = Array.from(new Set(arr));
      localStorage.setItem('favs', JSON.stringify(arr));
    } else {
      arr = [];
      arr.push(value);
      localStorage.setItem('favs', JSON.stringify(arr));
    }
  };

  return (
    <div>
      {planets.map((planet) => (
        <ul key={planet.id} className='list-group'>
          <li className='list-group-item d-flex justify-content-between align-items-center'>
            {planet.name}
            <span>
              <button data-planet={planet.id} onClick={saveToFavs} className='btn btn-primary'>
                Add to Fav
              </button>
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Planets;
