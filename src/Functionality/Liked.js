import React,{ useEffect,useState } from 'react'
import Player from './Player/Player'
import Socials from "../Socials"
import Sidebar from "./Sidebar"
import Header from '../Header'
import {Howl} from "howler";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {Link} from 'react-router-dom'
import {url} from "../Auth/stats"

import "../styles/liked.css";
 const Liked = () => {
const[loading,setLoading]=useState(true)
const[liked,setLiked]=useState([])
  const fetchLikedsongs=async()=>{ 
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token');
    const results =await fetch(`${url}user/${user_id}/tracks&access_token=${access_token}`) 
     const data= await results.json();
     console.log(data.data)
     setLiked(data.data);
    if(liked!==undefined){setLoading(false)}
  }

  useEffect(() => {
 window.onload=fetchLikedsongs()
    
  },[])

 const unlikeSong=async(ID)=>{
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token');
    const results =await fetch(`${url}user/${user_id}/tracks&track_id=${ID}&access_token=${access_token}&request_method=delete`) 
    const data= await results.json();
    console.log(data);
    window.location.reload();
  }
    return (
        <div className="likedsongs">

        <Header />
      <div className="middle">
      <Sidebar />
      <div className="liked-area">
          <div className="liked-banner"> 
</div>
<div className="sectionheader">
  <h3>#</h3>
  <div></div>
  <div></div>
  {/* <div></div> */}
  <h3>TITLE</h3>
  <h3>ALBUM</h3>
  <h3>DATE ADDED</h3>
  <h3>TIME</h3>
</div>

{!loading?(liked.map((song)=>{
//    function soundPlay(src){
//     const sound=new Howl({
//        src
//        // html5:true
//     })
//     sound.play()
//  }
    const{id,album,time_add,title}=song 
    return (<div key={id}className="likedsong">
    {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3>*/}
   
    <div></div>
    <button style={{cursor:"pointer"}} onClick={()=>{
     unlikeSong(`${id}`) 
   }}>Remove</button>
    <div></div>
    <Link to={`/this/song/${id}`}>
    <div className="linkage-container">
   
      
    <h3>{title}</h3>
    <h3>{album.title}</h3>
    <h3>DATE ADDED</h3>
    <h3>{time_add}</h3></div></Link>
    </div>
    )
     })):  
     <Loader
     type="Puff"
     color="#00BFFF"
     height={100}
     width={100}
     timeout={3000} //3 secs
   />}

</div>
      <Socials/>
      </div>
      <Player/> 
            
            
        </div>
    )
}

export default Liked;