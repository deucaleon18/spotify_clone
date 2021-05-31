import React from 'react'
import Header from '../Header';
import Sidebar from './Sidebar.js';

// import Player from './Player/Player.js';
import Socials from "../Socials";
import Bottombar from "../Functionality/Bottombar"

 const Error = () => {
    return (
        <div className="error">
             <Header />
    <div className="middle">
    <Sidebar />
    <div className="mainplayer">
    <div >Sorry you need to <a href="/login">Login</a> to access this feature</div>
    </div>
    <Socials/>
    </div>
    <div className="empty-player">
    </div>
    <Bottombar/>
        </div>
    )
}

export default Error;