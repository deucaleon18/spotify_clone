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
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Bottombar from "../Functionality/Bottombar"


 const Song = () => {


    const{id}=useParams();
const[thisSong,setThisSong]=useState()
const[loading,setLoading]=useState(true)
const [liked,setLiked]=useState(false);

useEffect(() => {
    getThisSong();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

const likeSong=async(track_id)=>{
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token')
    const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
    const data=await results.json();
    console.log(data)
    setLiked(!liked)
  }

  const unlikeSong=async(ID)=>{
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token');
    const results =await fetch(`${url}user/${user_id}/tracks&track_id=${ID}&access_token=${access_token}&request_method=delete`) 
    const data= await results.json();
    console.log(data);
    setLiked(!liked);
  }

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
                  <img src={thisSong.album.cover_big} alt="" />
                  {/* <h1>{thisSong.title}</h1> */}
                  <div className="icons"> {liked? <button onClick={()=>{unlikeSong(`${id}`)}}>liked</button>:<button onClick={()=>{likeSong(`${id}`)}}>not liked</button>} </div>
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
    <Bottombar/>
   { !loading?(<Player song={thisSong.preview}/>):<div className="empty-player"> </div> }
   
        </div>
    )
}

export default Song;