import React from 'react';
import './styles/App.css';
import Header from './Header';
import Sidebar from './Functionality/Sidebar.js';
import Mainplayer from "./Functionality/Mainplayer.js"
// import Player from './Functionality/Player/Player.js';
import Socials from "./Socials";
import Bottombar from "./Functionality/Bottombar"
const App=()=>{
 
    
  return (
    
  <div className="App">
    
    <Header />
    <div className="middle">
    <Sidebar />
    <Mainplayer />
    <Socials/>
    </div>
    {/* <Player />  */}
   <Bottombar/>
   <div className="player"></div>
  </div>
);

}

export default App;

