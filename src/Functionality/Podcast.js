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

 const Podcast = () => {
    const{id}=useParams();
const[thisPodcast,setThisPodcast]=useState()
const[loading,setLoading]=useState(true)
useEffect(() => {
    getThisSong();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
    const getThisSong=async()=>{
   const results=await fetch(`${url}podcast/${id}`)
   const data=await results.json();
   console.log(data)
   if(data!==undefined){
       setThisPodcast(data);
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
                  <img src={thisPodcast.picture_big} alt="" />
                  {/* <h1>{thisSong.title}</h1> */}
              </div>
):<div className= "this-song-middle"><Loader
type="ThreeDots"
 color="white"
height={100}
width={100}
timeout={10000} //3 secs
className="loader"/></div>}
            
    </div>
    <Socials/>
    </div>
   <Player/>
        </div>
    )
}


export default Podcast;