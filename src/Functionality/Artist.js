import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Header from '../Header';
import Sidebar from './Sidebar.js';
import "../styles/artist.css";
import {url} from "../Auth/stats"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Bottombar from "../Functionality/Bottombar"

 const Artist = () => {
    // const likeSong=async(track_id)=>{
    //     const user_id=localStorage.getItem('user_id')
    //     const access_token=localStorage.getItem('token')
    //     const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
    //     const data=await results.json();
    //     console.log(data)
    //     setLiked(!liked)
    //   }
    // const[liked,setLiked]=useState(false)
     const{id}=useParams();
const[thisArtist,setThisArtist]=useState()
const[loading,setLoading]=useState(true)
useEffect(() => {
    getThisArtist();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  <div></div>

  <h3>TITLE</h3>
  <h3>ALBUM</h3>
  <h3>ARTIST</h3>
  <h3>DURATION</h3>
</div>
{!loading?(thisArtist.map((song)=>{
//    function soundPlay(src){
//     const sound=new Howl({
//        src

//     })
//     sound.play()
//  }
         const{id,album,artist,duration,title}=song
        return (<div onClick={()=>{window.location.href=`/this/song/${id}`}} key={id}className="playlistsong">
        {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3> */}
    
        {/* <button onClick={()=>{likeSong(id)}}>{liked?<AiTwotoneLike/>:<BiLike />}</button> */}
        <div></div>
        <img src={album.cover_small} alt="la"/>
        <h3>{title}</h3>
        <h3>{album.title}</h3>
        <h3>{artist.name}</h3>
        <h3>{duration}</h3>
        
         </div>) 
    })): 
    <Loader 
    type="ThreeDots"
     color="white"
    height={100}
    width={100}
    timeout={10000} //10 secs
  // className="loader"
  id="loader-artist"
  />}


 </div>

 
    </div>
    <div className="empty-player">
    </div>
    <Bottombar/>
        </div>
    )
}
 export default Artist;