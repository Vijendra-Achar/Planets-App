import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link to='/'>
          <a className='navbar-brand'>Planets</a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <Link to='/'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page'>
                  All Planets
                </a>
              </li>
            </Link>

            <Link to='/favs'>
              <li className='nav-item'>
                <a className='nav-link'>Your Favourites</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
