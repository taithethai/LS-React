import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Bgimg from './bgimg.jpeg';
import {userData} from './application-data';
import {tweets} from './application-data';
import Banner from './Banner';
import Profile from './Profile';
import Stream from './Stream';
import RightColumn from './RightColumn';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner image={Bgimg} />
        <div className="main">
          <Profile profile={userData} />
          <Stream tweets={tweets}/>
          <RightColumn />
        </div>
      </div>
    );
  }
}

export default App;
// (`NavBar`, ``, ``, ``, and ``)
        // <div className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h2>Welcome to React</h2>
        // </div>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>