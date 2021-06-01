import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Header from '../Header';
import Sidebar from './Sidebar.js';
// import Player from './Player/Player.js';
import Socials from "../Socials";
import "../styles/song.css";
import {url} from "../Auth/stats"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../styles/album.css"
// import {BiLike} from "react-icons/bi"
// import {AiTwotoneLike} from "react-icons/ai"
// import {Howl} from "howler";
// import {Link} from "react-router-dom"
import Bottombar from "../Functionality/Bottombar"

 const Album = () => {
    // const likeSong=async(track_id)=>{
    //     const user_id=localStorage.getItem('user_id')
    //     const access_token=localStorage.getItem('token')
    //     const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
    //     const data=await results.json();
    //     console.log(data)
    //     setLiked(!liked)
    //   }
    const[liked,setLiked]=useState(false)
     const{id}=useParams();
const[thisAlbum,setThisAlbum]=useState()
const[loading,setLoading]=useState(true)
useEffect(() => {
    getThisAlbum();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
    const getThisAlbum=async()=>{
   const results=await fetch(`${url}album/${id}`)
   const data=await results.json();
   console.log(data)
   if(data!==undefined){
       setThisAlbum(data.tracks.data);
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
<div className="sectionheader-album">
  <div></div>
  <h3>TITLE</h3>
 
  <h3>ARTIST</h3>
  <h3>TIME</h3>
</div>
{!loading?(thisAlbum.map((song)=>{
//    function soundPlay(src){
//     const sound=new Howl({
//        src

//     })
//     sound.play()
//  }
         const{id,duration,title,artist,cover_small}=song
        return (<div onClick={()=>{window.location.href=`/this/song/${id}`}} key={id}className="albumsong">
        {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3> */}
       <div></div>
        {/* <button onClick={()=>{likeSong(id)}}>{liked?<AiTwotoneLike/>:<BiLike />}</button> */}
        {/* <img src={cover_small} alt="la"/> */}
     
        <h3>{title}</h3>
        <h3>{artist.name}</h3>
        <h3>{duration}</h3>
    
         </div>) 
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
    <div className="empty-player">
    </div>
    <Bottombar/>

        </div>
    )
}


 export default Album;