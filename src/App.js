import ReactGA from 'react-ga'
const TRACKING_ID = "UA-235259297-1";
ReactGA.initialize(TRACKING_ID);

import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <h1 className="text-white">HI THERE</h1>
        <Home />
      </Router>
    );
  }
}
