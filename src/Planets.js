import React from 'react';

export default class Planets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: [],
    };

    this.myFavs = JSON.parse(localStorage.getItem('favs'));

    this.saveToFavs = (ev) => {
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
  }

  async componentDidMount() {
    const res = await fetch(`https://assignment-machstatz.herokuapp.com/planet`);
    const data = await res.json();
    let arr = [];

    data.forEach((element) => {
      arr.push(element.id);
    });

    arr = Array.from(new Set(arr));
    localStorage.setItem('allPlanets', JSON.stringify(arr));

    this.setState({
      planet: arr,
    });
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return (
      <div>
        {this.state.planet.map((planet) => (
          <ul key={planet} className='list-group'>
            <li className='list-group-item d-flex justify-content-between align-items-center toTitle'>
              {planet}
              <span>
                <button
                  data-planet={planet}
                  aria-disabled={this.myFavs.includes(planet) ? true : false}
                  onClick={this.saveToFavs}
                  className='btn btn-primary'>
                  Add to Fav
                </button>
              </span>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
