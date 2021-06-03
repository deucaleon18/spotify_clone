import React from 'react';
import "../styles/bottombar.css";
// import HomeSharpIcon from '@material-ui/icons/HomeSharp';
// import MeetingRoomSharpIcon from '@material-ui/icons/MeetingRoomSharp';
// import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
// import SearchSharpIcon from '@material-ui/icons/SearchSharp';

 const Bottombar = () => {
    const removeItems=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
    }
    if(localStorage.getItem('token')!==null)
    {return (
        <div className="bottombar">
            <ul>
            <li><a href="/login" onClick={()=>{removeItems()}}>Logout</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/library">Library</a></li>
           <li><a href="/create-playlist">CreatePlaylist</a></li>
            </ul>
        </div>
    )}
    return(
        <div className="bottombar">
            <ul>
            <li><a href="/login" >Login</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/library">Library</a></li>
           <li><a href="/create-playlist">CreatePlaylist</a></li>
            </ul>
        </div>
    )
}

export default Bottombar;