import React,{useState,useEffect} from 'react'
import Header from '../Header';
import Sidebar from './Sidebar.js';
import {url} from "../Auth/stats"
import Player from './Player/Player.js';
import Socials from "../Socials";
import {Link} from "react-router-dom"
import "../styles/Playlists/myplaylists.css"
const MyPlaylists = () => {

    const[myplaylists,setMyplaylists]=useState([])
    const[loading,setLoading] = useState(true)

    const getMyPlaylists=async()=>{
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token')
        const results=await fetch(`${url}user/${user_id}/playlists&access_token=${access_token}`)
        const data=await results.json()
        console.log(data.data);
        if(data!==undefined){
            setMyplaylists(data.data);
            setLoading(false);
        }

        if(myplaylists!==undefined){
            console.log(myplaylists)
        }
    }
    useEffect(() => {
        getMyPlaylists()
        
    }, [])
   if(myplaylists!==undefined){ return (
        <div className="my-playlists">      
    <Header />
    <div className="middle">
    <Sidebar />
  
<div className="my-playlists-middle" >

{myplaylists.map((song)=>{
    const deleteMyPlaylist=async(ID)=>{
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token')
        const results=await fetch(`${url}user/${user_id}/playlist/${ID}&access_token=${access_token}&request_method=delete`)
        const data=await results.json()
        console.log(data);
      
    }
    const{title,id,picture_medium,creator}=song;
    return(
        <div className="my-playlist-box-container" >
            <Link to={`/playlist/${id}`}>
        <div key={song.id} classname="my-playlist-box">
       
        {/* <h1>{song.creator}</h1> */}
        <img src={song.picture_medium} />
        <h1>{song.title}</h1>
        
        </div>
        </Link>
        <>
        <button onClick={()=>{
         deleteMyPlaylist(`${id}`)
        }}>Delete</button>
        </>
        </div>
    )
})}
</div>

    <Socials/>
    </div>
    <Player/> 
        </div>
    )
}
    return <h1>loading..</h1>
}

export default MyPlaylists
