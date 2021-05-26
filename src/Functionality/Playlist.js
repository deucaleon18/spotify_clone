import React,{ useEffect,useState } from 'react'
import Player from './Player/Player'
import Socials from "../Socials"
import Sidebar from "./Sidebar"
import Header from '../Header'
import {Howl} from "howler";
import {Link,useParams} from 'react-router-dom'
import {url} from "../Auth/stats"
// import Howl from 'Howler'
// import{APIKey, url} from '../Auth/stats.js'
import "../styles/playlist.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa-play} from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={fa-play} />

 const Playlist = () => {
// const playSong=()=>{
//   return null
// }

const[deezer,setDeezer]=useState()
const[loading,setLoading]=useState(true)
  const fetchPlaylistsongs=async()=>{ 
    const results =await fetch("https://loadingdevs-deezer.p.rapidapi.com/playlist/1479458365", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e29141c4e6msh102d2b1926a7361p1b674ejsnca4accbfc562",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }) 
     const data= await results.json()
     console.log(data.tracks.data);
     setDeezer(data.tracks.data);
     if(deezer!==undefined){console.log(deezer)}
     if(data!==undefined){setLoading(false);}
  }

  useEffect(() => {
    fetchPlaylistsongs()
    
  }, [])

  const likeSong=async(track_id)=>{
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token')
    const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
    const data=await results.json();
    console.log(data)

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
         const{id,album,artist,time_add,preview,title}=song
        return (<div key={id}className="playlistsong">
        <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3>
        <button onClick={()=>{likeSong(id)}}>Like</button>
        <img src={album.cover} alt="la"/>
        <h3>{title}</h3>
        <h3>{album.title}</h3>
        <h3>DATE ADDED</h3>
        <h3>{time_add}</h3></div>)
    })):<h1>loading</h1>}

</div>
      <Socials/>
      </div>
      <Player/> 
            
            
        </div>
    )
}

export default Playlist;