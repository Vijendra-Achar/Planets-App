import React from 'react';

const toTitleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};

export default class Planets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: [],
      favArrObj: {},
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

      if (this.state.favArrObj.hasOwnProperty(value)) {
        alert(`${toTitleCase(value)} already exists in your List 💥`);
      } else {
        alert(`${toTitleCase(value)} has been added to your Favourite list ✔`);
      }

      this.makeFavObjects();
    };

    this.makeFavObjects = () => {
      let favArr = JSON.parse(localStorage.getItem('favs'));
      if (favArr) {
        for (let ele of favArr) {
          this.state.favArrObj[ele] = 1;
        }
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

    this.makeFavObjects();
  }

  render() {
    return (
      <div>
        {this.state.planet.map((planet) => (
          <ul key={planet} className='list-group'>
            <li className='list-group-item d-flex justify-content-between align-items-center toTitle'>
              {planet}
              <span>
                <div>
                  {this.state.favArrObj.hasOwnProperty(planet) ? (
                    <p>Added</p>
                  ) : (
                    <button data-planet={planet} onClick={this.saveToFavs} className='btn btn-primary'>
                      Add to Fav
                    </button>
                  )}
                </div>
              </span>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
