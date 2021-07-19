/* eslint-disable no-unused-vars */
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';

import View from "./Components/View/View";
import Upload from "./Components/Upload/Upload";
import AboutUs from "./Components/Aboutus/AboutUs";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Components/SignUp/SignIn";

import './App.css';

function App() {
  return (
      <Router>
        <PrivateRoute><Navbar/></PrivateRoute>
        <Switch>
        
          <PrivateRoute exact path="/"><Home/></PrivateRoute>
          <PrivateRoute exact path="/view"><View/></PrivateRoute>
          <PrivateRoute exact path="/upload"><Upload/></PrivateRoute>
          <PrivateRoute exact path="/aboutus"><AboutUs/></PrivateRoute>
          <Route path="/login"><SignIn /></Route>
          {/* <Route path="/*"><GoToHome /></Route> */}
        
        </Switch>
        {/* <PrivateRoute><Footer /></PrivateRoute> */}
      </Router>
  );
}

export default App;