import React,{ useEffect,useState } from 'react'
import {Howl} from "howler";
import {url} from "../Auth/stats"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BiLike} from "react-icons/bi"
import {AiTwotoneLike} from "react-icons/ai"
import {Link,useParams} from 'react-router-dom';
import "../styles/Playlists/playlistsongs.css";
import Appsearch from "../Appsearch";
import Header from '../Header';
import Sidebar from './Sidebar.js';
import Player from './Player/Player.js';
import Socials from "../Socials";
import Search from './Search';

const AddingToPlaylist= () => {
const{id}=useParams()
const[searchpopup,setSearchpopup]=useState(false)
const[myPlaylistSongs,setMyplaylistSongs]=useState([])
const [searchvalue,setSearchvalue]=useState('')
const [searchresult,setSearchresult]=useState()
const [loading,setLoading]=useState(true);
const [songloading,setSongLoading]=useState(true);
// const [playing,setPlaying]=useState(false);

const handleSubmit=async(e)=>{
  e.preventDefault();
 // fetchData();
 fetchSearchedvalue();
}

const fetchPlaylistsongs=async()=>{ 
  const results =await fetch(`${url}playlist/${id}`) 
   const data= await results.json()
   console.log(data);
   if(data!==undefined){
    setMyplaylistSongs(data.tracks.data);
     setSongLoading(false);}
}
const fetchSearchedvalue=async()=>{
  const results= await fetch(`${url}search?q=${searchvalue}`)
  const data=await results.json();
  console.log(data.data) ;
  setSearchresult(data.data);
  if(searchresult!==undefined){setLoading(false);}
  }
  
useEffect(() => {
  window.onload=fetchPlaylistsongs()

}, [])

const removeSongfromPlaylist=async(ID)=>{
    const access_token=localStorage.getItem('token')
    const results=await fetch(`${url}playlist/${id}/tracks&songs=${ID}&request_method=delete&access_token=${access_token}`)
    const data=await results.json();
    console.log(data);
    window.location.reload();
}

const showSearchSongsPopper=()=>{
setSearchpopup(true);
setSongLoading(true);
}
  // const likeSong=async(track_id)=>{
  //   const user_id=localStorage.getItem('user_id')
  //   const access_token=localStorage.getItem('token')
  //   const results=await fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
  //   const data=await results.json();
  //   console.log(data)
  //   // setLiked(!liked)
  // }
    return (
        <div className="addingSongsto">
   <Header />
    <div className="middle">
    <Sidebar />
    <div>
 {songloading?(
         <Loader
        type="ThreeDots"
         color="black"
        height={100}
        width={100}
        timeout={10000} //10 secs
      className="loader"/>
     
      ):
     ( <>
      <div className="playlist-area">
          <div className="playlist-banner"> 
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
<button onClick={()=>{showSearchSongsPopper()}}>Add songs to my playlist</button>
      {myPlaylistSongs.map((song)=>{
       const{id,album,time_add,preview,title}=song
       return (<>
        <button style={{cursor:"pointer"}} onClick={()=>{removeSongfromPlaylist(`${id}`)}}>Remove</button>
       <Link to={`/this/song/${id}`}><div key={id}className="playlistsong">
       {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3>
       <button onClick={()=>{likeSong(id)}}>{liked?<AiTwotoneLike/>:<BiLike />}</button> */}
        <div></div>
       <div></div>
       <img src={album.cover} alt="la"/>
       <h3>{title}</h3>
       <h3>{album.title}</h3>
       <h3>DATE ADDED</h3>
       <h3>{time_add}</h3>
     
       </div>
       </Link>
       </>)
      })
      }
      </div>
      </>
      )}
 
        {searchpopup?(
        <div className="search">
      <div className="search-area">
          <div className="bar">
              <form onSubmit={handleSubmit}>
              <label htmlFor="search"></label>
              <input 
              type="text" 
              name="search"  
              placeholder="Search"
              id="search-bar"
              value={searchvalue}
              onChange={(e)=>setSearchvalue(e.target.value)}
              />
              <button type="submit">Submit</button>
              </form>
         {loading?
        //  (<div className="search-area">
         <Loader
        type="ThreeDots"
         color="white"
        height={100}
        width={100}
        timeout={10000} //10 secs
      className="loader"/>
      // </div>)
         :(
           searchresult.map((searcher)=>{
          const{album,artist}=searcher
          const addtoThisPlaylist=async(ID)=>{
            // const user_id=localStorage.getItem('user_id')
            const access_token=localStorage.getItem('token')
            const results=await fetch(`${url}playlist/${id}/tracks&songs=${ID}&order=${ID}&request_method=post&access_token=${access_token}`)
            const data=await results.json();
            console.log(data);
            // window.location.reload();
         }

          return( 
                <div key={searcher.id} className="search-box">
                {/* {liked? <button onClick={()=>{likeSong(searcher.id)}}><AiTwotoneLike/></button>:<button onClick={()=>{unlikeSong(searcher.id)}}><BiLike/></button>} */}
                <div></div>
         {/* {playing? <button onClick={()=>{soundPause(`${id}`)}}><h3>pause</h3></button>:<button onClick={()=>{soundPlay(`${preview}`)}}><h3>play</h3></button>}  */}
               <button onClick={()=>{addtoThisPlaylist(searcher.id)}}>ADD TO THIS PLAYLIST</button>
                <a href={`/this/song/${searcher.id}`}>
                   <div className="linkage-container">
                <img src={artist.picture_small} alt=""/>
                <h2>{artist.name}</h2>
                <h2>{album.title}</h2>
                </div>
                </a>
                </div>
             )
           }
           )  
       )   
 }
        </div>
      </div>  
        </div>):""}
    </div>
    <Socials/>
    </div>
<Player/>
        </div>
    )
        
}
export default AddingToPlaylist;