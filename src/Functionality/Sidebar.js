import React,{useState,useEffect} from 'react';
import "../styles/sidebar.css"
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from "../Auth/Login"
// import Bottombar from "../Functionality/Bottombar"
import {url} from "../Auth/stats"
import Typography from "@material-ui/core/Typography"



 const Sidebar = () => {
     const[myplaylists,setMyplaylists]=useState()
     const[loading,setLoading]=useState(true)
     const[active,setActive]=useState(localStorage.getItem('active'))
     useEffect(() => {
         localStorage.setItem("active",active);},[active])
    
     const getMyPlaylists=async()=>{
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token')
        const results=await fetch(`${url}user/${user_id}/playlists&limit=5&access_token=${access_token}`)
        const data=await results.json()
        console.log(data.data);
        if(data!==undefined){
            setMyplaylists(data);
            console.log(myplaylists)
        }
        if(myplaylists!==undefined){setLoading(false);}

    }

useEffect(() => {
    // eslint-disable-next-line
 if(localStorage.getItem('user_id')!=undefined&&localStorage.getItem('user_id')!=null){getMyPlaylists()}

   // eslint-disable-next-line
}, [])


 const removeItems=()=>{
     localStorage.removeItem('token')
     localStorage.removeItem('user_id')
 }

// const forHomeSection=()=>{
//     localStorage.setItem('homesection',1);
//     localStorage.setItem('searchsection',0);
//     localStorage.setItem('librarysection',0);
//     localStorage.setItem('likedsection',0);
// }


 if(localStorage.getItem('token')!==null)
    {return (
         
        <div className="sidebar">
        <Router> <Route exact path="/"><Login/></Route></Router>
        <ul>
            <Typography variant='h4'><a href="/app" onClick={()=>{setActive("homesection")}}>Home</a></Typography>
            <Typography variant='h4'><a href="/app" onClick={()=>{setActive("searchsection")}}>Search</a></Typography>
            <Typography variant='h4'><a href="/app" onClick={()=>{setActive("librarysection")}}>Your Library</a></Typography>
            <Typography variant='h4'><a href="/" onClick={()=>{removeItems()}}>Logout</a></Typography>
            <h4>PLAYLISTS</h4>
            <Typography variant='h4'> <a href="/app" onClick={()=>{setActive("createplaylistsection")}}>Create Playlist</a></Typography>
            
            {!loading?(<div><h4 >MY-PLAYLISTS</h4>
           
            {myplaylists.data.map((playlist)=>{
                  
                  if(playlist.title!="Loved Tracks"){return ( <div className="sidebar-playlists">
                  <div className="my-playlist-songs-sidebar" style={{color:"white"}}><h4 onClick={()=>{window.location.href=`/user/playlist/${playlist.id}`}}>#{playlist.title}</h4></div>
                  </div>)}
                  
                  return null;
            })}</div>):null}


            <Typography variant='h4' style={{margin:"30px 0"}}><a href="/app"  onClick={()=>{setActive("likedsection")}}>Liked Songs</a></Typography>
        </ul>
        </div>
    )
    }
 return (
         
    <div className="sidebar">
    <ul>
    <Typography variant='h4'><a href="/app" onClick={()=>{setActive("homesection")}}>Home</a></Typography>
    <Typography variant='h4'><a href="/app" onClick={()=>{setActive("searchsection")}}>Search</a></Typography>
    <Typography variant='h4'><a href="/app" onClick={()=>{setActive("errorsection")}}>Your Library</a></Typography>
    <Typography variant='h4'><a href="/" >Login</a></Typography>
        <h4>PLAYLISTS</h4>
        <Typography variant='h4'><a href="/app"onClick={()=>{setActive("errorsection")}}>Create Playlist</a></Typography>
        <Typography variant='h4'><a href="/app" onClick={()=>{setActive("errorsection")}}>Liked Songs</a></Typography>
        
    </ul>
    </div>
)
}
export default Sidebar;