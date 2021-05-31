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
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Bottombar from "../Functionality/Bottombar"


 const Song = () => {


    const{id}=useParams();
const[thisSong,setThisSong]=useState()
const[loading,setLoading]=useState(true)
const [likedsong,setLikedsong]=useState();
const[liked,setLiked]=useState();
useEffect(() => {
    // eslint-disable-next-line
    getThisSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
useEffect(() => {
    
    const fetchLikedsongs=async()=>{ 
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token');
        const results =await fetch(`${url}user/${user_id}/tracks&access_token=${access_token}`) 
         const data= await results.json();
        //  console.log(data.data)
         setLikedsong(data.data);
         if(likedsong!==undefined){const checkforliked= likedsong.find(song=>song.id===`${id}`)
         if(checkforliked!==null||undefined){
            setLiked(true)
        }
       if(checkforliked===null||undefined){
            setLiked(false)
        } 
        }
      }
    fetchLikedsongs();
 
},[id,likedsong])

const likeSong=(track_id)=>{
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token')
   fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
   .then((res)=> res.json())
    .then((res)=>console.log(res)) 
    setLiked(true)

    // if(localStorage.getItem('like')!==undefined){
    //   localStorage.removeItem('like');
    //   localStorage.setItem('like',1)
    // }
    // localStorage.setItem('like',1)
  }

  const unlikeSong=(ID)=>{
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token');
   fetch(`${url}user/${user_id}/tracks&track_id=${ID}&access_token=${access_token}&request_method=delete`) 
  .then((res)=> res.json())
   .then(res=>console.log(res))
   setLiked(false)
    // if(localStorage.getItem('like')!==undefined){
    //   localStorage.removeItem('like');
    //   localStorage.setItem('like',0);
    // }
    // localStorage.setItem('like',0)
  }

// if(localStorage.getItem('like')===1){
//   setLiked(true)
// }
// else{
//   setLiked(false)
// }

    const getThisSong=async()=>{
   const results=await fetch(`${url}track/${id}`)
   const data=await results.json();
   console.log(data)
   if(data!==undefined){
       setThisSong(data);
      setTimeout(setLoading(false),4000) 
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
                  <div className="icons"> {liked? <button onClick={()=>{unlikeSong(`${id}`)}}><FavoriteSharpIcon/></button>:<button onClick={()=>{likeSong(`${id}`)}}><FavoriteBorderSharpIcon/></button>} </div>
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