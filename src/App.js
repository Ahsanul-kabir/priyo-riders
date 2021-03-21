import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from './components/Destination';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import logo from './logo.svg';

function App() {

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/destination'>
          <Destination></Destination>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
