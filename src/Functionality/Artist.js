import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Header from '../Header';
import Sidebar from './Sidebar.js';
import Player from './Player/Player.js';
import Socials from "../Socials";
import "../styles/song.css";
import {url} from "../Auth/stats"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BiLike} from "react-icons/bi"
import {AiTwotoneLike} from "react-icons/ai"
import {Howl} from "howler";
import {Link} from "react-router-dom"

 const Artist = () => {
    const likeSong=async(track_id)=>{
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token')
        const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
        const data=await results.json();
        console.log(data)
        setLiked(!liked)
      }
    const[liked,setLiked]=useState(false)
     const{id}=useParams();
const[thisArtist,setThisArtist]=useState()
const[loading,setLoading]=useState(true)
useEffect(() => {
    getThisArtist();
  
},[])
    const getThisArtist=async()=>{
   const results=await fetch(`${url}artist/${id}/top`)
   const data=await results.json();
   console.log(data)
   if(data!==undefined){
       setThisArtist(data.data);
       setLoading(false)
   }
}
    return (
        <div>
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
{!loading?(thisArtist.map((song)=>{
   function soundPlay(src){
    const sound=new Howl({
       src

    })
    sound.play()
 }
         const{id,album,artist,duration,preview,title}=song
        return (<Link to={`/this/song/${id}`}><div key={id}className="playlistsong">
        {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3> */}
        <div></div>
        <button onClick={()=>{likeSong(id)}}>{liked?<AiTwotoneLike/>:<BiLike />}</button>
        
        <img src={album.cover_small} alt="la"/>
        <h3>{title}</h3>
        <h3>{artist.name}</h3>
        <h3>{duration}</h3>
        <h3>{}</h3>
         </div></Link>) 
    })): 
    <Loader 
    type="ThreeDots"
     color="white"
    height={100}
    width={100}
    timeout={10000} //3 secs
  className="loader"/>}


 </div>

    <Socials/>
    </div>
   { !loading?(<Player song={thisArtist.preview}/>):<Player/>}
        </div>
    )
}
 export default Artist;