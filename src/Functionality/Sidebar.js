import React from 'react';
import "../styles/sidebar.css"

 const Sidebar = () => {
    return (

        <div className="sidebar">
        <ul>
            <li><a href="http://localhost:3000">Home</a></li>
            <li><a href="http://localhost:3000/s">Search</a></li>
            <li><a href="#">Your Library</a></li>
            <h4>PLAYLISTS</h4>
            <li><a href="#">Create Playlist</a></li>
            <li><a href="#">Liked Songs</a></li>
            <h6><a href="#">Inside your Head</a></h6>
            <h6><a href="#">My Playlist #1</a></h6>
        </ul>
        </div>
    )
    
}

export default Sidebar;