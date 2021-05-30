import React,{ useEffect,useState } from 'react'
import Player from './Player/Player'
import Socials from "../Socials"
import Sidebar from "./Sidebar"
import Header from '../Header'
import {Howl} from "howler";
import {url} from "../Auth/stats"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BiLike} from "react-icons/bi"
import {AiTwotoneLike} from "react-icons/ai"
import {Link,useParams} from 'react-router-dom';
import "../styles/Playlists/playlistsongs.css";
import Search from "../Functionality/Search";

const Playlist= () => {
const{id}=useParams()
const[deezer,setDeezer]=useState()
const[loading,setLoading]=useState(true)
const[liked,setLiked]=useState(false)
  const fetchPlaylistsongs=async()=>{ 
    const results =await fetch(`${url}playlist/${id}`) 
     const data= await results.json()
     console.log(data.tracks.data);
     setDeezer(data.tracks.data);
     if(deezer!==undefined){console.log(deezer)}
     if(data!==undefined){setLoading(false);}
  }



  useEffect(() => {
    fetchPlaylistsongs()
    
  },[])
// const showSearchSongsPopper=()=>{
// <Search/>
// }
  const likeSong=async(track_id)=>{
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token')
    const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
    const data=await results.json();
    console.log(data)
    setLiked(!liked)
  }
    return (
        <div className="playlists">
        <Header />
      <div className="middle">
      <Sidebar />
      <div className="playlist-area">
          <div className="playlist-banner"> 
</div>
<div className="sectionheader">
  <h3>#</h3>
  <div></div>
  <div></div>
  <h3>TITLE</h3>
  <h3>ALBUM</h3>
  <h3>DATE ADDED</h3>
  <h3>TIME</h3>
</div>

{!loading?(deezer.map((song)=>{
   function soundPlay(src){
    const sound=new Howl({
       src
       // html5:true
    })
    sound.play()
 }
         const{id,album,time_add,preview,title}=song
        return (<>
        <Link to={`/this/song/${id}`}><div key={id}className="playlistsong">
        {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3>*/}
        <button onClick={()=>{likeSong(id)}}>{liked?<AiTwotoneLike/>:<BiLike />}</button> 
     
        <div></div>
        <img src={album.cover} alt="la"/>
        <h3>{title}</h3>
        <h3>{album.title}</h3>
        <h3>DATE ADDED</h3>
        <h3>{time_add}</h3>
        </div>
        </Link>
        <>
         {/* <button onClick={()=>{showSearchSongsPopper()}}>ADD SONGS TO THIS PLAYLIST</button> */}
         </>
         </>)
    })):
    <>
    <h1>EMPTY</h1>
    
    </>}

</div>
      <Socials/>
      </div>
      <Player/>         
        </div>
    )
}
export default Playlist;