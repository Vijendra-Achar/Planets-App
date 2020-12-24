import React from 'react';
import Planets from './Planets';
function PlanetPage() {
  return (
    <div className='App myMargin'>
      <h3 className='display-5'>Hello, Welcome Planets App</h3>

      <br />

      <h5 className='display-6'>The List of All the planets are given below</h5>

      <br />

      <p>Add the one's you like to the Favourite's List</p>

      <br />

      <div className='myApp'>
        <Planets />
      </div>
    </div>
  );
}

export default PlanetPage;
