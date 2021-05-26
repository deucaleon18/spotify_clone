import React,{useState} from 'react'
import {url} from '../Auth/stats';
 const CreatePlaylist = () => {
    const [playlist,setPlaylist]=useState('')
     const [playlistID,setPlaylistID]=useState()
    const handleSubmit=async(e)=>{
        e.preventDefault();
       // fetchData();
       CreateNewPlaylist();
    //    GetNewPlaylist();
    }

const GetNewPlaylist= async()=>{
const results=await fetch(`${url}playlist/${playlistID}`)
const data =await results.json()
console.log(data)
}

const DeletePlaylist= async()=>{
    const access_token=localStorage.getItem('token')
    const results=await fetch(`${url}playlist/${playlistID}&request_method=delete&access_token=${access_token}`)
    const data =await results.json()
    console.log(data)
    }
 const CreateNewPlaylist=async()=>{
    const user_id= localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token')
     const results =await fetch(`${url}user/${user_id}/playlists&title=${playlist}&request_method=post&access_token=${access_token}`)
     const data=await results.json()
     console.log(data)
     setPlaylistID(data.id);
     if(playlistID!==undefined){GetNewPlaylist();}
 }
    return (
        <div CreatePlaylist>
  <div className="bar">
              <form onSubmit={handleSubmit}>
              <label htmlFor="playlist"></label>
              <input 
              type="text" 
              name="playlist"  
              placeholder="Search"
              id="playlist-bar"
              value={playlist}
              onChange={(e)=>setPlaylist(e.target.value)}
              />
              <button type="submit">Submit</button>

              </form>
              <button onClick={()=>{DeletePlaylist()}}>Delete</button>
              </div>
              
        </div>
    )
}

export default CreatePlaylist;