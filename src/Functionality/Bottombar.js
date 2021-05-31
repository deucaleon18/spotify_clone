import React from 'react';
import "../styles/bottombar.css";
 const Bottombar = () => {
    return (
        <div className="bottombar">
            <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/search">Search</a></li>
           <li><a href="/create-playlist">Create Playlist</a></li>
            </ul>
        </div>
    )
}

export default Bottombar;