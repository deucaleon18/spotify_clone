import React from 'react'
import Header from '../Header';
import Sidebar from './Sidebar.js';
import Player from './Player/Player.js';
import Socials from "../Socials";
import "../styles/mylibrary.css";

 const MyLibrary = () => {
    return (
        <div className="library">
           <Header />
    <div className="middle">

    <Sidebar />
<div className="library-middle">
 <div  className="link-to-liked-songs"></div>
 <div  className="link-to-playlists"></div>
 <div className="recomendations"></div>
</div>
    <Socials/>
    </div>
    <Player/> 

        </div>
    )
}

export default MyLibrary;