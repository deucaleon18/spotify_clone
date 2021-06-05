import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Header from '../Header';
import Sidebar from './Sidebar.js';
import Player from './Player/Player.js';
import "../styles/song.css";
import {url} from "../Auth/stats"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import Bottombar from "../Functionality/Bottombar"
 const Song = () => {
const{id}=useParams();
const[thisSong,setThisSong]=useState()
const[loading,setLoading]=useState(true)

const[liked,setLiked]=useState();

useEffect(() => {
       // eslint-disable-next-line
       getThisSong();

       // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchLikedsongs=async()=>{ 
        const user_id=localStorage.getItem('user_id')
        const access_token=localStorage.getItem('token');
        const results =await fetch(`${url}user/${user_id}/tracks&access_token=${access_token}`) 
         const data= await results.json();
         if(data!==undefined){
            console.log(data.data)
            // eslint-disable-next-line
            const checkforliked=data.data.find((song)=>{ if(song.id==`${id}`){return true}
          return false
          })
            console.log(checkforliked)
            // eslint-disable-next-line
          if(checkforliked!=null||checkforliked!=undefined){setLiked(true)}
        }
  
      }
    if(localStorage.getItem('user_id')!==undefined){fetchLikedsongs();}
     // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

const likeSong=(track_id)=>{
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token')
   fetch (`${url}user/${user_id}/tracks&access_token=${access_token}&request_method=post&track_id=${track_id}`)
   .then((res)=> res.json())
    .then((res)=>console.log(res)) 
    setLiked(true)
  }

  const unlikeSong=(ID)=>{
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token');
   fetch(`${url}user/${user_id}/tracks&track_id=${ID}&access_token=${access_token}&request_method=delete`) 
  .then((res)=> res.json())
   .then(res=>console.log(res))
   setLiked(false)
    
  }

    const getThisSong=async()=>{
   const results=await fetch(`${url}track/${id}`)
   const data=await results.json();
   console.log(data)
   if(data!==undefined){
       setThisSong(data);
   setLoading(false)
   }
}

   if(localStorage.getItem('user_id')!==undefined) {return (
        <div>
            <Header />
    <div className="middle">
 <Sidebar className="song-sidebar"/>
  
  <div className= "this-song-middle">
     
     {!loading?(  <div className="current-song">
                  <img src={thisSong.album.cover_big} alt="" />
                <div className="song-name">{thisSong.title}</div>
                 
               <div> {liked? <button onClick={()=>{unlikeSong(`${id}`)}}><FavoriteSharpIcon/></button>:<button onClick={()=>{likeSong(`${id}`)}}><FavoriteBorderSharpIcon/></button>} </div>
              </div>
):<div className= "this-song-middle"><Loader
type="Puff"
 color="#00BFFF"
height={100}
width={100}
timeout={10000} //10 secs
className="loader"/></div>}
            
    </div>
  
    </div>
    
   { !loading?(<Player song={thisSong.preview}/>):<div className="empty-player"> </div> }
   <Bottombar/>
        </div>

    )
  }

else{return(<div>
  <Header />
<div className="middle">
<Sidebar className="song-sidebar"/>

<div className= "this-song-middle">

{!loading?(  <div className="current-song">
        <img src={thisSong.album.cover_big} alt="" />
      <div className="song-name">{thisSong.title}</div>
    </div>
):<div className= "this-song-middle"><Loader
type="Puff"
color="#00BFFF"
height={100}
width={100}
timeout={10000} //10 secs
className="loader"/></div>}
  
</div>

</div>

{ !loading?(<Player song={thisSong.preview}/>):<div className="empty-player"> </div> }
<Bottombar/>
</div>
)
}
}

export default Song;