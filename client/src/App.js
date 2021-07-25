/* eslint-disable no-unused-vars */
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';

import Search from "./Components/Search/Search";
import Upload from "./Components/Upload/Upload";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";

import SignIn from "./Components/SignUp/SignIn";

import Nf from "./Components/404";

import './App.css';

function App() {
	return (
    	<Router>
    		<Switch>
          		<PrivateRoute exact path="/"><Navbar/><Home/></PrivateRoute>
          		<PrivateRoute exact path="/search"><Navbar/><Search/></PrivateRoute>
          		<PrivateRoute exact path="/upload"><Navbar/><Upload/></PrivateRoute>
          		<Route path="/login"><SignIn/></Route>
          		<Route path="/*"><Nf/></Route>
        	</Switch>
      </Router>
  	);
}

export default App;