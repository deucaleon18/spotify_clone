import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Header from '../Header';
import Sidebar from './Sidebar.js';
import Player from './Player/Player.js';
import Socials from "../Socials";
import "../styles/song.css";
import {url} from "../Auth/stats"
 const Song = () => {
    const{id}=useParams();
const[thisSong,setThisSong]=useState()
const[loading,setLoading]=useState(true)
useEffect(() => {
    getThisSong();
  
})
    const getThisSong=async()=>{
   const results=await fetch(`${url}track/${id}`)
   const data=await results.json();
   console.log(data)
   if(data!==undefined){
       setThisSong(data);
       setLoading(false)
   }
}
    return (
        <div>
            <Header />
    <div className="middle">
    <Sidebar />
  
  <div className= "this-song-middle">
     
     {!loading?(  <div className="current-song">
                  <img src={thisSong.album.cover_xl} alt="" />
                  {/* <h1>{thisSong.title}</h1> */}
              </div>
):<h1>loading..</h1>}
            
     
    </div>
    <Socials/>
    </div>
   { !loading?(<Player song={thisSong.preview}/>):<Player/>}
        </div>
    )
}


export default Song;