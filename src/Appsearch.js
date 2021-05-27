import React from 'react';
import './styles/App.css';
import Header from './Header';
import Sidebar from './Functionality/Sidebar.js';
import Search from "./Functionality/Search.js"
import Player from './Functionality/Player/Player.js';
import Socials from "./Socials";

const Appsearch=()=>{
 
  return (
    
    <div className="App">
      <Header />
      <div className="middle">
      <Sidebar/>
      <Search/>
      <Socials/>
      </div>
      <Player/> 
    </div>
  );
}

export default Appsearch;
