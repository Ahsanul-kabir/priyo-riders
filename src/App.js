import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Destination from './components/Destination/Destination';
import DestinationDescription from './components/DestinationDescription/DestinationDescription';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
// import logo from './logo.svg';

function App() {

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>

        <Route path='/destination/:id'>
          <Destination></Destination>
        </Route>
        <Route path='/destination'>
          <DestinationDescription></DestinationDescription>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
