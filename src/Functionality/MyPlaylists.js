import React,{useState,useEffect} from 'react'
import Header from '../Header';
import Sidebar from './Sidebar.js';
import {url} from "../Auth/stats"
import Player from './Player/Player.js';
import Socials from "../Socials";
import "../styles/Playlists/myplaylists.css"
const MyPlaylists = () => {

    const[myplaylists,setMyplaylists]=useState()
    const[loading,setLoading] = useState(true)

    const getMyPlaylists=async()=>{
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token')
        const results=await fetch(`${url}user/${user_id}/playlists&access_token=${access_token}`)
        const data=await results.json()
        console.log(data);
        if(data!==undefined){
            setLoading(false);
            setMyplaylists(data);
        }
    }
    useEffect(() => {
        getMyPlaylists()
        
    }, [])
    return (
        <div className="my-playlists">
            
    <Header />
    <div className="middle">
    <Sidebar />
    <div></div>
{/* {!loading?(<div className="my-playlists-middle">
{myplaylists.map((song)=>{
    const{}=song
})}
</div>):<h1>loading...</h1>} */}

    <Socials/>
    </div>
    <Player/> 
        </div>
    )
}

export default MyPlaylists
