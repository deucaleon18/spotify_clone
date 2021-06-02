import React from 'react'
import Header from '../Header';
import Sidebar from './Sidebar.js';
// import Player from './Player/Player.js';
import Socials from "../Socials";
import "../styles/mylibrary.css";
import {Link} from "react-router-dom"
import Bottombar from "../Functionality/Bottombar"
 const MyLibrary = () => {
    return (
        <div className="library">
           <Header />
    <div className="middle">

    <Sidebar />
    
<div className="library-middle">
    <div className="library-title">
<h1 >My Library</h1>
</div>
    <Link to="/liked">
 <div  className="link-to-liked-songs">
    <h1>LIKED SONGS</h1> 
 </div>
 </Link>
 <Link to="/user/playlists">
 <div  className="link-to-playlists">
 <h1>MY PLAYLISTS</h1> 
 </div>
 </Link>
 {/* <div className="recomendations"></div> */}
</div>
    <Socials/>
    </div>
    <div className="empty-player">
    </div>
    <Bottombar/>
        </div>
    )
}

export default MyLibrary;