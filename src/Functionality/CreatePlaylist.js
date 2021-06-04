import React,{useState} from 'react'
import {url} from '../Auth/stats';
import Header from '../Header';
import Sidebar from './Sidebar.js';
// import Player from './Player/Player';
import '../styles/Playlists/createplaylist.css';
import {AiOutlinePlus} from 'react-icons/ai'
import Bottombar from "../Functionality/Bottombar"
import CloseIcon from '@material-ui/icons/Close';

 const CreatePlaylist = () => {
  // const[myplaylists,setMyplaylists]=useState([])
    const [playlist,setPlaylist]=useState('')
    //  const [playlistID,setPlaylistID]=useState()
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
      <Header />
    <div className="middle">
    <Sidebar />

  <div className="middle-create-playlist" >
      <h1>Create New Playlist</h1>
      {popup?(<div className="poppup">
      <span onClick={()=>{setPopup(false)}}><CloseIcon className="close-icon"/></span>
<div className="create-playlist-form"><form onSubmit={handleSubmit}>
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

      <div className="add-new-playlist" onClick={()=>{setPopup(!popup)}}><AiOutlinePlus color="white" size="12rem" className="plus"/></div>
     {/* {!loading?(myplaylists.map((playlist)=>{
      return <div key={playlist.id} classname="my-playlist-box">
      {/* <h1>{song.creator}</h1> */}
      {/* <img src={playlist.picture_medium} alt=""/>
      <h1>{playlist.title}</h1>
      
      </div>
     })):null
      
     } */} */}


{/*            
              <button onClick={()=>{DeletePlaylist()}}>Delete</button> */}
              </div>
              </div>
             
    </div>
    <div className="empty-player"> </div> 
   <Bottombar/>
      
        </div>
    )
}

export default CreatePlaylist;