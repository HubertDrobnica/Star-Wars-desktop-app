import React from 'react';
import Header from './components/Header/Header.js'
import People from './components/People/People.js'
import Planets from './components/Planets/Planets.js'
import Starships from './components/Starships/Starships.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Header />
            <Switch>
              <Route path='/' exact component={People}/>
              <Route path='/planets' component={Planets}/>
              <Route pathi='/starships' component={Starships}/>
            </Switch>  
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
