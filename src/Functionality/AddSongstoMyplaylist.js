import React,{ useEffect,useState } from 'react'
import {Howl} from "howler";
import {url} from "../Auth/stats"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BiLike} from "react-icons/bi"
import {AiTwotoneLike} from "react-icons/ai"
import {Link,useParams} from 'react-router-dom';
import "../styles/Playlists/playlistsongs.css";
import Appsearch from "../Appsearch";
import Header from '../Header';
import Sidebar from './Sidebar.js';
import Player from './Player/Player.js';
import Socials from "../Socials";
import Search from './Search';


const AddingToPlaylist= () => {
const{id}=useParams()
const[searchpopup,setSearchpopup]=useState(false)
const[deezer,setDeezer]=useState()
const[loading,setLoading]=useState(true)

const fetchPlaylistsongs=async()=>{ 
  const results =await fetch(`${url}playlist/${id}`) 
   const data= await results.json()
   console.log(data);
   setDeezer(data);
   if(deezer!==undefined){console.log(deezer)}
   if(data!==undefined){setLoading(false);}
}

useEffect(() => {
  fetchPlaylistsongs()
  
}, [])


const showSearchSongsPopper=()=>{
setSearchpopup(true);
}


  // const likeSong=async(track_id)=>{
  //   const user_id=localStorage.getItem('user_id')
  //   const access_token=localStorage.getItem('token')
  //   const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
  //   const data=await results.json();
  //   console.log(data)
  //   // setLiked(!liked)
  // }
    return (
        <div className="addingSongsto">
   <Header />
    <div className="middle">
    <Sidebar />
    <div>

        <button onClick={()=>{showSearchSongsPopper()}}>Add songs to my playlist</button>
        {searchpopup?<Search/>:<h1>loading,,,</h1>}
    </div>
    <Socials/>
    </div>
    <Player /> 
        </div>
    )
        
}
export default AddingToPlaylist;