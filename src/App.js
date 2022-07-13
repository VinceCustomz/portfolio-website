import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import {BrowserRouter as Router} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <SideBar />
        <NavBar />
      </Router>
    )
  }
}
