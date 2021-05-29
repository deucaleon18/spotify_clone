import React,{useState} from 'react';
import "../styles/search.css";
import{ url} from '../Auth/stats.js';
import {Howl} from "howler";
import {Link} from "react-router-dom"
import {AiTwotoneLike} from "react-icons/ai"
import {BiLike} from "react-icons/bi";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
 const Search = () => {
    const [searchvalue,setSearchvalue]=useState('')
    const [searchresult,setSearchresult]=useState()
    const [loading,setLoading]=useState(true);
    const [playing,setPlaying]=useState(false);
    const [liked,setLiked]=useState(false);
   const handleSubmit=async(e)=>{
       e.preventDefault();
      // fetchData();
      fetchDeezer();
   }

   const fetchDeezer=async()=>{
      const results= await fetch(`${url}search?q=${searchvalue}`)
      const data=await results.json();
   //    const key=await results.trackmatches
      console.log(data.data) ;
      setSearchresult(data.data);
      if(searchresult!==undefined){setLoading(false);}
      }

      function soundPlay(src){
         const sound=new Howl({
            src// html5:true
         })
         sound.play()
         setPlaying(!playing);
         
        
      }
      function soundPause(id){
         const sound={id}.Howl
         sound.pause()
         setPlaying(!playing);
      }
      
      const AddSongtoPlaylist=()=>{}


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
    return (
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
         (<div className="search-area">
         <Loader
        type="ThreeDots"
         color="white"
        height={100}
        width={100}
        timeout={10000} //10 secs
      className="loader"/>
      </div>)
         :(
           searchresult.map((searcher)=>{
          const{id,album,artist,preview}=searcher
          return( 
        
            
                <div key={id} className="search-box">
                {liked? <button onClick={()=>{likeSong(id)}}><AiTwotoneLike/></button>:<button onClick={()=>{unlikeSong(id)}}><BiLike/></button>}
         {playing? <button onClick={()=>{soundPause(`${id}`)}}><h3>pause</h3></button>:<button onClick={()=>{soundPlay(`${preview}`)}}><h3>play</h3></button>} 
                <button onClick={()=>{AddSongtoPlaylist()}}>Playlist</button>
             
                <Link to={`/this/song/${id}`}>
                <img src={artist.picture_small} alt=""/>
                <h2>{artist.name}</h2>
                <h2>{album.title}</h2>
                </Link>
                </div>
                
                
             )
           }
           )  
       )   
 }
        </div>
      </div>  
        </div>
    )
    }
// const Grid=()=>{
// return (
// <div>
// <div>
//    <div className="grid-column"></div>
//    <div></div>
//    <div></div>
//    <div></div>
// </div>
// <div></div>
// <div></div>
// <div></div>
// <div></div>
// </div>
// )
// }

export default Search;
