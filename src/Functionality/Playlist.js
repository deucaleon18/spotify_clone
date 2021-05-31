import React,{ useEffect,useState } from 'react'
// import Player from './Player/Player'
import Socials from "../Socials"
import Sidebar from "./Sidebar"
import Header from '../Header'
// import {Howl} from "howler";
import {url} from "../Auth/stats"
// import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BiLike} from "react-icons/bi"
import {AiTwotoneLike} from "react-icons/ai"
import {Link,useParams} from 'react-router-dom';
import "../styles/Playlists/playlistsongs.css";
import Bottombar from "../Functionality/Bottombar"
import { AirlineSeatIndividualSuiteTwoTone } from '@material-ui/icons'
// import Search from "../Functionality/Search";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {/* {!loading?<img src={deezer.album.cover_big} alt="" />:""} */}
</div>
<div className="sectionheader">
  <h3></h3>
  
  <h3>TITLE</h3>
  <h3>ALBUM</h3>
  <h3>ARTIST</h3>
  <h3>TIME</h3>
</div>

{!loading?(deezer.map((song)=>{
//    function soundPlay(src){
//     const sound=new Howl({
//        src
//        // html5:true
//     })
//     sound.play()
//  }
         const{id,album,time_add,title,artist}=song
        return (<>
     <div onClick={()=>{window.location.href=`/this/song/${id}`}} key={id}className="playlistsong">
        {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3>*/}
       <div></div>
     
        <img src={album.cover} alt="la"/>
        <h3>{title}</h3>
        <h3>{album.title}</h3>
        <h3>{artist.name}</h3>
        <h3>{time_add}</h3>
        </div>
        
        
         {/* <button onClick={()=>{showSearchSongsPopper()}}>ADD SONGS TO THIS PLAYLIST</button> */}
      
         </>)
    })):
    <>
    <h1>EMPTY</h1>
    
    </>}

</div>
      <Socials/>
      </div>
      <div className="empty-player">
    </div>
    <Bottombar/>  
        </div>
    )
}
export default Playlist;