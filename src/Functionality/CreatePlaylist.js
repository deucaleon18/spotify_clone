import React,{useState} from 'react'
import {url} from '../Auth/stats';

import Sidebar from './Sidebar.js';
// import Player from './Player/Player';
import '../styles/Playlists/createplaylist.css';
import {AiOutlinePlus} from 'react-icons/ai'
import Bottombar from "../Functionality/Bottombar"
import CloseIcon from '@material-ui/icons/Close';
import {Grid,Typography,Container,Button,Box} from '@material-ui/core'
import QueueIcon from '@material-ui/icons/Queue';
import CreateIcon from '@material-ui/icons/Create';



const bannerbuttonStyle={
  width:'9rem',
  height:'10rem',
  margin:'25% 20%',
  color:'white',
  shadows:'10px 0 10px 0 black'
  }
  


 const CreatePlaylist = () => {
  // const[myplaylists,setMyplaylists]=useState([])
    const [playlist,setPlaylist]=useState('')
    //  const [newplaylist,setNewplaylist]=useState()
    // const [loading,setLoading]=useState(true)
    const [popup,setPopup]=useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault();
       CreateNewPlaylist();
    }

    // const getMyPlaylists=async()=>{
    //   const user_id=localStorage.getItem('user_id')
    //   const access_token=localStorage.getItem('token')
    //   const results=await fetch(`${url}user/${user_id}/playlists&access_token=${access_token}`)
    //   const data=await results.json()
    //   console.log(data.data);
    //   if(data!==undefined){
    //       setMyplaylists(data.data);
    //        setLoading(false);
    //   }
    // }


// const DeletePlaylist= async(playlistID)=>{
//     const access_token=localStorage.getItem('token')
//     const results=await fetch(`${url}playlist/${playlistID}&request_method=delete&access_token=${access_token}`)
//     const data =await results.json()
//     console.log(data)
//     }


 const CreateNewPlaylist=async()=>{
    const user_id= localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token')
     const results =await fetch(`${url}user/${user_id}/playlists&title=${playlist}&request_method=post&access_token=${access_token}`)
     const data=await results.json()
     console.log(data)
    //  setPlaylistID(data.id);
    //  if(data!==undefined){GetNewPlaylist();}
 }

 

 const creationCleanup=()=>{
   
   alert("You have successfully created a new playlist.Please check your Library to access the playlist")
  //  window.location.reload();
  //  window.onload=getMyPlaylists();
  //  setPlaylist('');
 }
    return (
        <div className="CreatePlaylist">
  
<div className="middle-create-playlist" >

  <Box display="flex" component='div' style={{height:'51vh'}}>      
  <Box component="div" className="banner-box-create-playlist" >
 <span><QueueIcon style={bannerbuttonStyle} className="liked-banner-box-icon"/></span>
  </Box>
  <Box mt={22} ml={1}>
  <Typography  variant='subtitle2' color='primary'style={{marginLeft:'5px'}}>PLAYLIST</Typography>
  <Typography variant='h1' color="primary" >New Playlist</Typography>
  </Box>
  <Box mt={33} ><CreateIcon  onClick={()=>{setPopup(!popup)}} style={{color:'white',cursor:'pointer'}}/></Box>
  </Box>




      {popup?(<div className="poppup">
      <span onClick={()=>{setPopup(false)}}><CloseIcon className="close-icon"/></span>
<div className="create-playlist-form"><form onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="playlist"></label>
              <input 
              type="text" 
              name="playlist"  
              id="playlist-bar"
              value={playlist}
              onChange={(e)=>setPlaylist(e.target.value)}
              placeholder="Name of Your Playlist"
              />
              <button type="submit" onClick={()=>creationCleanup()}>Submit</button>
              </form>
              </div>
    </div>):""
    
    
    } 
      <div playlist-creation-grid>

      {/* <div className="add-new-playlist"></div>*/}
   

{/*            
              <button onClick={()=>{DeletePlaylist()}}>Delete</button> */}
              </div>
              </div>
             

  
   <Bottombar/>
      
        </div>
    )
}

export default CreatePlaylist;

 