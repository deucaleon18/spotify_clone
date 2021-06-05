import React from 'react';
import "../styles/bottombar.css";
import img_1 from "../styles/Deezer-Emblem.jpg"
import MeetingRoomSharpIcon from '@material-ui/icons/MeetingRoomSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import LibraryMusicSharpIcon from '@material-ui/icons/LibraryMusicSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import LockOpenIcon from '@material-ui/icons/LockOpen';


 const Bottombar = () => {
    const removeItems=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
    }
    if(localStorage.getItem('token')!==null)
    {return (
        <div className="bottombar">
            <ul>
            <li><a href="/login" onClick={()=>{removeItems()}}><MeetingRoomSharpIcon/></a></li>
            <li><a href="/search"><SearchSharpIcon/></a></li>
            <li><a href="/home"><img src={img_1} alt="" /></a></li>
            <li><a href="/library"> <LibraryMusicSharpIcon/></a></li>
           <li><a href="/create-playlist"> <AddSharpIcon/></a></li>
           <li><a href="/liked"> <FavoriteSharpIcon/></a></li>
           
            </ul>
        </div>
    )}
    return(
        <div className="bottombar">
            <ul>
            <li><a href="/login" ><LockOpenIcon/></a></li>
  
            <li><a href="/search"><SearchSharpIcon/></a></li>
            <li><a href="/home"><img src={img_1} alt="" /></a></li>
            <li><a href="/sorry"><LibraryMusicSharpIcon/></a></li>
           <li><a href="/sorry"><AddSharpIcon/></a></li>
           <li><a href="/sorry"> <FavoriteSharpIcon/></a></li>
            </ul>
        </div>
    )
}

export default Bottombar;