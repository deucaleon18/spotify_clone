import React from 'react';
import "../styles/sidebar.css"

 const Sidebar = () => {
 
 if(localStorage.getItem('token')!==null)
    {return (
         
        <div className="sidebar">
        <ul>
            <li><a href="http://localhost:3000/home">Home</a></li>
            <li><a href="http://localhost:3000/search">Search</a></li>
            <li><a href="http://localhost:3000/library">Your Library</a></li>
            <li><a href="http://localhost:3000/login" onClick={()=>{localStorage.removeItem('token')}}>Logout</a></li>
            <h4>PLAYLISTS</h4>
            <li><a href="http://localhost:3000/create-playlist">Create Playlist</a></li>
            <li><a href="http://localhost:3000/liked">Liked Songs</a></li>
            <h6><a href="#">Inside your Head</a></h6>
            <h6><a href="#">My Playlist #1</a></h6>
        </ul>
        </div>
    )
    }
 return (
         
    <div className="sidebar">
    <ul>
        <li><a href="http://localhost:3000">Home</a></li>
        <li><a href="http://localhost:3000/search">Search</a></li>
        <li><a href="http://localhost:3000/library">Your Library</a></li>
        <li><a href="http://localhost:3000/login">Login</a></li>
        <h4>PLAYLISTS</h4>
        <li><a href="http://localhost:3000/create-playlist">Create Playlist</a></li>
        <li><a href="http://localhost:3000/liked">Liked Songs</a></li>
        <h6><a href="#">Inside your Head</a></h6>
        <h6><a href="#">My Playlist #1</a></h6>
    </ul>
    </div>
)
}
export default Sidebar;