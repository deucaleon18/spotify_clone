import React,{useState,useEffect} from 'react';
import "../styles/sidebar.css"
// import Bottombar from "../Functionality/Bottombar"
import {url} from "../Auth/stats"

 const Sidebar = () => {
     const[myplaylists,setMyplaylists]=useState()
     const[loading,setLoading]=useState(true)
     const getMyPlaylists=async()=>{
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token')
        const results=await fetch(`${url}user/${user_id}/playlists&limit=5&access_token=${access_token}`)
        const data=await results.json()
        console.log(data.data);
        if(data!==undefined){
            setMyplaylists(data);
        }
        if(myplaylists!==undefined){setLoading(false);}

    }

useEffect(() => {
    
 setTimeout( ()=>{if(localStorage.getItem('token')!==undefined&&localStorage.getItem('user_id')!==undefined){getMyPlaylists()}} ,10000)

   // eslint-disable-next-line
}, [])


 const removeItems=()=>{
     localStorage.removeItem('token')
     localStorage.removeItem('user_id')
 }
 if(localStorage.getItem('token')!==null)
    {return (
         
        <div className="sidebar">
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/library">Your Library</a></li>
            <li><a href="/login" onClick={()=>{removeItems()}}>Logout</a></li>
            <h4>PLAYLISTS</h4>
            <li><a href="/create-playlist">Create Playlist</a></li>
            
            {!loading?(<><h4 >MY-PLAYLISTS</h4>
           
            {myplaylists.data.map((playlist)=>{
                  
                  if(playlist.title!=="Loved Tracks"){return ( <div className="sidebar-playlists">
                  <div className="my-playlist-songs-sidebar" style={{color:"white"}}><h4 onClick={()=>{window.location.href=`/user/playlist/${playlist.id}`}}>#{playlist.title}</h4></div>
                  </div>)}
                  
                  return null;
            })}</>):null}
            <li style={{margin:"30px 0"}}><a href="/liked">Liked Songs</a></li>
        </ul>
        </div>
    )
    }
 return (
         
    <div className="sidebar">
    <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/sorry">Your Library</a></li>
        <li><a href="/login">Login</a></li>
        <h4>PLAYLISTS</h4>
        <li><a href="/sorry">Create Playlist</a></li>
        <li><a href="/sorry">Liked Songs</a></li>
        {/* <h6><a href="#">Inside your Head</a></h6>
        <h6><a href="#">My Playlist #1</a></h6> */}
    </ul>
    </div>
)
}
export default Sidebar;