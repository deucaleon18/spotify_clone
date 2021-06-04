import React from 'react'
import Header from '../Header';
import Sidebar from './Sidebar.js';

// import Player from './Player/Player.js';

import Bottombar from "../Functionality/Bottombar"

 const Error = () => {
    return (
        <div className="error">
             <Header />
    <div className="middle">
    <Sidebar />
    <div className="mainplayer">
    <div style={{color:"white"}}>Sorry you need to <span> <a style={{color:"red"}}href="/login">Login</a></span>to access this feature</div>
    </div>
   
    </div>
    <div className="empty-player">
    </div>
    <Bottombar/>
        </div>
    )
}

export default Error;