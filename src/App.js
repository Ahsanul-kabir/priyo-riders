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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SearchResult from './components/SearchResult/SearchResult';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/destination/:id'>
          <Destination></Destination>
        </PrivateRoute>
        <PrivateRoute path='/destination'>
          <DestinationDescription></DestinationDescription>
        </PrivateRoute>
        <PrivateRoute path='/blog'>
          <Blog></Blog>
        </PrivateRoute>
        <PrivateRoute path='/contact'>
          <Contact></Contact>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/searchResult'>
          <SearchResult></SearchResult>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
