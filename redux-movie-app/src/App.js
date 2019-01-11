import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Movie from './movies/Movie'
import MovieDetail from './movies/MovieDetail'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { save, load } from 'redux-localstorage-simple'
import rootReducer from './rootReducer'

import Toggle from './toggle/Toggle1'
import ToggleMovies from './movies/ToggleMovies'

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Toggle />
            <ToggleMovies />
            <Switch>
              <Route exact path="/" component={Movie} />
              <Route exact path="/:id" component={MovieDetail} />
            </Switch>
          </div>

        </Router>
      </Provider>
    );
  }
}

export default App;
