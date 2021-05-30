import React from 'react';
import './styles/App.css';
import Header from './Header';
import Sidebar from './Functionality/Sidebar.js';
import Search from "./Functionality/Search.js"
import Bottombar from "./Functionality/Bottombar"
// import Player from './Functionality/Player/Player.js';
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
      <div className="empty-player">
    </div>
        <Bottombar/>
     
    </div>
  );
}

export default Appsearch;
