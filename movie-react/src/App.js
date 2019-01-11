import React, { Component } from 'react';
//import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Movie from './Movie'
import MovieDetail from './MovieDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Movie} />
            <Route exact path="/:id" component={MovieDetail} />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
