import React, { useState, useEffect } from 'react';

function YourFavPlanets() {
  const [favPlanets, setFavPlanets] = useState([]);

  useEffect(() => {
    getFavPlanets();
  }, []);

  const getFavPlanets = () => {
    let favs = localStorage.getItem('favs');
    setFavPlanets(JSON.parse(favs));
  };

  return (
    <div className='App myMargin'>
      <h3>Your Fav Planets Page</h3>

      <br />
      <h5 className='display-6'>🌍 The List of Your Favourite planets 🌏</h5>
      <br />
      <div className='myApp'>
        {favPlanets.map((planet) => (
          <ul key={planet} className='list-group'>
            <li className='list-group-item d-flex justify-content-between align-items-center toTitle'>
              {planet}
              <span>
                <button className='btn btn-danger'>Remove from Favs</button>
              </span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default YourFavPlanets;
