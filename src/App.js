import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Styles
import './App.css';

// Views
import Home from './Pages/Home/Home';
import WeatherInformation from './Pages/WeatherInformation/WeatherInformation'


const App = () => {

return (
  <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/weather/:name" exact>
          <WeatherInformation />
        </Route>
      </Switch>
  </BrowserRouter>
)
}

export default App;
