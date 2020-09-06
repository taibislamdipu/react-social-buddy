
// coded by - taib islam dipu, 6 sept 2020

import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch'
import Comment from './components/Comment/Comment';

function App() {

  return (

    <div className="bodyStyle">

      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/post/:id">
            <Comment />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default App;
