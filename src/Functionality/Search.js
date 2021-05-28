import React,{useState} from 'react';
import "../styles/search.css";
import{ url} from '../Auth/stats.js';
import {Howl} from "howler";
import {Link} from "react-router-dom"
import {AiTwotoneLike} from "react-icons/ai"
import {BiLike} from "react-icons/bi";

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
             
         {loading?<h1>loading...</h1>
         // <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/1479458365" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
         :(

           searchresult.map((searcher)=>{
          const{id,album,artist,preview}=searcher
          return( 
        
            <Link to={`/this/song/${id}`}>
                <div key={id} className="search-box">
              
              
             <button onClick={()=>{likeSong(id)}}>{liked?<AiTwotoneLike/>:<BiLike />}</button>
         {playing? <button onClick={()=>{soundPause(`${id}`)}}><h3>pause</h3></button>:<button onClick={()=>{soundPlay(`${preview}`)}}><h3>play</h3></button>} 
                <button onClick={()=>{AddSongtoPlaylist()}}>Playlist</button>
             
                
                <img src={artist.picture_small} alt=""/>
                <h2>{artist.name}</h2>
                <h2>{album.title}</h2>
                
                </div>
                </Link>
                
                
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
