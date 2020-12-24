import React, { useState, useEffect } from 'react';

function YourFavPlanets() {
  const [favPlanets, setFavPlanets] = useState([]);

  useEffect(() => {
    getFavPlanets();
  }, [favPlanets]);

  const getFavPlanets = () => {
    let favs = localStorage.getItem('favs');
    setFavPlanets(JSON.parse(favs));
  };

  const removeFromFavs = (ev) => {
    let favs = JSON.parse(localStorage.getItem('favs'));
    let value = ev.target.dataset.planet;
    let arr = favs;

    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === value) {
        arr.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('favs', JSON.stringify(arr));
  };

  if (favPlanets.length > 0) {
    return (
      <div className='App myMargin'>
        <br />
        <h5 className='display-6'>The List of Your Favourite planets</h5>
        <br />

        <div className='myApp'>
          {favPlanets.map((planet) => (
            <ul key={planet} className='list-group'>
              <li className='list-group-item d-flex justify-content-between align-items-center toTitle'>
                {planet}
                <span>
                  <button data-planet={planet} onClick={removeFromFavs} className='btn btn-danger'>
                    Remove from Favs
                  </button>
                </span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className='App myMargin'>
        <br />
        <h5 className='display-6'>The List of Your Favourite planets</h5>
        <br />
        <p> You currently do not have any Favourite Planets. Please Add them </p>
      </div>
    );
  }
}

export default YourFavPlanets;
