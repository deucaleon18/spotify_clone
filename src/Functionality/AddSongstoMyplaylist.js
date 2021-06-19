import React,{ useEffect,useState } from 'react'
import {url} from "../Auth/stats"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {useParams} from 'react-router-dom';
import "../styles/Playlists/playlistsongs.css";
import Sidebar from './Sidebar.js';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Bottombar from "../Functionality/Bottombar"
import "../styles/Playlists/addsongstoplaylist.css"
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import Player from './Player/Player';
import {Grid,Typography,Box,Container} from '@material-ui/core'


// Main function

const AddingToPlaylist= () => {
const{id}=useParams()
const[searchpopup,setSearchpopup]=useState(false)
const[myPlaylistSongs,setMyplaylistSongs]=useState([])
const [searchvalue,setSearchvalue]=useState('')
const [searchresult,setSearchresult]=useState()
const [loading,setLoading]=useState(true);
const [songloading,setSongLoading]=useState(true);
const[show,setShow]=useState(false)




//Function excetued on the submission of the form 
const handleSubmit=async(e)=>{
  e.preventDefault();

  //api endpoint called with search value 
 const fetchSearchedvalue=async()=>{
  const results= await fetch(`${url}search?q=${searchvalue}`)
  const data=await results.json();
  console.log(data.data) ;
  setSearchresult(data.data);
  if(searchresult!==undefined){setLoading(false);
/* eslint eqeqeq: 0 */



  if(data.data.length!=0){setShow(true)}}
 }


 fetchSearchedvalue();
}



useEffect(() => {
  const fetchPlaylistsongs=async()=>{ 
  const results =await fetch(`${url}playlist/${id}`) 
   const data= await results.json()
   console.log(data);
   /* eslint eqeqeq: 0 */
   if(data!==undefined){
    setMyplaylistSongs(data.tracks.data);
     setSongLoading(false);}
}
  window.onload=fetchPlaylistsongs()
// eslint-disable-next-line react-hooks/exhaustive-deps
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
     <div className="middle">
        <Sidebar/>
 
    <div>
 {songloading?(
        null
     
      ):
     ( <div>
      <div className="playlist-area">
          <div className="playlist-banner"> 
</div>
<Box>

<button className="add-songs-playlist-button"style={{height:"40px" ,cursor:"pointer"}} onClick={()=>{showSearchSongsPopper()}}>Add songs to my playlist</button>
<Grid container className="search-section-header">
<Grid container item xs={1} style={{borderBottom:'0.5px white'}}></Grid>

{/* <div></div> */}
<Grid container item xs={5}><Typography variant='subtitle1' color='secondary' style={{fontSize:'0.9rem'}}>TITLE</Typography></Grid>
<Grid container item xs={3}><Typography variant='subtitle1' color='secondary' style={{fontSize:'0.9rem'}}>ALBUM</Typography></Grid>
<Grid container item xs={2}><Typography variant='subtitle1' color='secondary'></Typography></Grid>

</Grid>
</Box>

      {myPlaylistSongs.map((song)=>{
       const{id,album,time_add,title,artist}=song
       return (<div className="display-exisiting-playlists"style={{display:"flex"}}>
        <span style={{cursor:"pointer" }} onClick={()=>{removeSongfromPlaylist(`${id}`)}}><DeleteSharpIcon className="delete-icon"/></span>
       <Grid container  key={id} className="playlistsong" onClick={()=>{window.location.href=`/this/song/${id}`}} style={{cursor:"pointer"}} >

       {/* <h3><button onClick={()=>{soundPlay(`${preview}`)}}>Play</button></h3>
       <button onClick={()=>{likeSong(id)}}>{liked?<AiTwotoneLike/>:<BiLike />}</button> */}
    
       <Grid container items></Grid>
       
       <Grid container items style={{width:'40px'}}><img src={album.cover} alt="la"/></Grid>
       <Grid container item lg={5} xs={6} >
       <Grid container items lg={12} xs={12}><Typography color="primary"  style={{fontSize:'1rem'}}>{title}</Typography></Grid>
       <Grid container items lg={12} xs={12}><Typography color="secondary"  style={{fontSize:'0.9rem'}}>{artist.name}</Typography></Grid>
       </Grid>
       <Grid container items lg={6} xs={8}><Typography color="secondary"  style={{fontSize:'0.9rem'}}>{album.title}</Typography></Grid>
   
       <Grid container items></Grid>
       </Grid>
       
      
       
       </div>)
      })
      }
      </div>
      </div>
      )}
 
        { searchpopup?(
        <div className="search">
      <div className="search-area">
          <div className="bar">
              <form onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="search"></label>
              <input 
              type="text" 
              name="search"  
              placeholder="Search"
              id="search-bar"
              value={searchvalue}
              onChange={(e)=>setSearchvalue(e.target.value)}
              />
              <button type="submit"><SearchSharpIcon className="search-icon"/></button>
              </form>
         {loading?
        //  (<div className="search-area">
         null
      // </div>)
      
         :(<div><Grid container className="search-section-header">
         <Grid container item xs={1} style={{borderBottom:'0.5px white'}}></Grid>
         
         {/* <div></div> */}
         <Grid container item xs={5}><Typography variant='subtitle1' color='secondary' style={{fontSize:'0.9rem'}}>TITLE</Typography></Grid>
         <Grid container item xs={3}><Typography variant='subtitle1' color='secondary' style={{fontSize:'0.9rem'}}>ALBUM</Typography></Grid>
         <Grid container item xs={2}><Typography variant='subtitle1' color='secondary'></Typography></Grid>
         
         </Grid>
           {show?(searchresult.map((searcher)=>{
          const{album,artist,title}=searcher
          const addtoThisPlaylist=async(ID)=>{
            // const user_id=localStorage.getItem('user_id')
            const access_token=localStorage.getItem('token')
            const results=await fetch(`${url}playlist/${id}/tracks&songs=${ID}&order=${ID}&request_method=post&access_token=${access_token}`)
            const data=await results.json();
            console.log(data);
            // window.location.reload();
            if(data){alert("This song has been added.Please check your playlist in your library to play the song.")}
         }

          return( 
          
            <Box display='flex'>
            
         <span style={{width:"50px"}}onClick={()=>{addtoThisPlaylist(searcher.id)}}> <AddSharpIcon className="addicon"/></span>               
              
               <Grid container  lg={12} key={searcher.id} style={{alignItems:'center'}}onClick={()=>{window.location.href=`/this/song/${id}`}} style={{height:'9vh'}}> 
               <Grid contianer item style={{width:'40px'}}><img src={artist.picture_small} alt="" style={{width:'100%'}}/> </Grid>
               <Grid container item lg={4} >
               <Grid container item lg={12} ><Typography color="primary"  style={{fontSize:'1rem'}}>{title}</Typography></Grid>
               <Grid container item lg={12} ><Typography color="secondary"  style={{fontSize:'0.9rem'}}> {artist.name}</Typography></Grid>
               </Grid>
               <Grid contianer item lg={4}><Typography  style={{fontSize:'0.9rem'}} color='secondary'>{album.title}</Typography></Grid>
                {/* </a> */}
              
                </Grid>
                </Box>
                 
             )
           }
           )):<h2 style={{color:"white"}}>No results found...</h2>
          }  
           </div> 
       )   
          
 }
        </div>
      </div>  
        </div>):null}
    </div>
    </div>
   
 <Player></Player>
    <Bottombar></Bottombar>
        </div>
    )
        
}
export default AddingToPlaylist;