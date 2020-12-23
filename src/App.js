import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Planetpage from './Planetspage';
import YourFavPlanets from './YourFavPlanets';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Planetpage} />
          <Route path='/favs' exact component={YourFavPlanets} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
