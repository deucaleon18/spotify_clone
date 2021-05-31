import React,{useState} from 'react'
import {url} from '../Auth/stats';
import Header from '../Header';
import Sidebar from './Sidebar.js';
// import Player from './Player/Player';
import Socials from "../Socials";
import '../styles/Playlists/createplaylist.css';
import {AiOutlinePlus} from 'react-icons/ai'
import Bottombar from "../Functionality/Bottombar"
// import CancelSharpIcon from '@material-ui/icons/CancelSharp';

 const CreatePlaylist = () => {
    const [playlist,setPlaylist]=useState('')
    //  const [playlistID,setPlaylistID]=useState()
    //  const [newplaylist,setNewplaylist]=useState()
    // const [loading,setLoading]=useState(true)
    const [popup,setPopup]=useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault();
       // fetchData();
       CreateNewPlaylist();
    // if(playlistID!==undefined) {GetNewPlaylist();}
    }

// const GetNewPlaylist= async()=>{
// const results=await fetch(`${url}playlist/${playlistID}`)
// const data =await results.json();
// if(data!==undefined){setNewplaylist(data);
// setLoading(false)}
// console.log(data);
// }

// const DeletePlaylist= async()=>{
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
   setPlaylist('');
   alert("You have successfully added a new playlist")
 }
    return (
        <div className="CreatePlaylist">
      <Header />
    <div className="middle">
    <Sidebar />

  <div className="middle-create-playlist" >
      <h1>Create New Playlist</h1>
      {popup?(<div className="poppup">
      <button onClick={()=>{setPopup(false)}}>close</button>
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
            
{/*            
              <button onClick={()=>{DeletePlaylist()}}>Delete</button> */}
              </div>
              </div>
              <Socials/>
    </div>
    <div className="empty-player"> </div> 
   <Bottombar/>
      
        </div>
    )
}

export default CreatePlaylist;