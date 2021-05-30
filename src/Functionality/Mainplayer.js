import React, { useEffect,useState } from 'react';
import "../styles/mainplayer.css"; 
import {Link} from "react-router-dom";
import {url} from "../Auth/stats"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Mainplayer = () => {
    const[deezer,setDeezer]=useState()
    const[deezer_1,setDeezer_1]=useState()
    const[deezer_2,setDeezer_2]=useState()
    const[deezer_3,setDeezer_3]=useState()
    const[deezer_4,setDeezer_4]=useState()
    const[deezer_5,setDeezer_5]=useState()
    const[deezer_6,setDeezer_6]=useState()
    const[deezer_7,setDeezer_7]=useState()
    const[deezer_8,setDeezer_8]=useState()
    const[deezer_9,setDeezer_9]=useState()
    const[deezer_10,setDeezer_10]=useState()
    // const[recent,setRecent]=useState()
    // const[recommend,setRecommend]=useState()
const deezerCharts_1=async()=>{ 
    const results =await fetch(`${url}playlist/1479458365`)    
     const data= await results.json()
     console.log(data);
     setDeezer([data]);
 }
 const deezerCharts_2=async()=>{ 
    const results =await fetch(`${url}playlist/00000000005`)    
     const data= await results.json()
     console.log(data);
     setDeezer_1([data]);

 }
 const deezerCharts_3=async()=>{ 
    const results =await fetch(`${url}playlist/00001001007`)    
     const data= await results.json()
     console.log(data);
     setDeezer_2([data]);

 }
 const deezerCharts_4=async()=>{ 
    const results =await fetch(`${url}playlist/5052700044`)    
     const data= await results.json()
     console.log(data);
     setDeezer_3([data]);
   
 }

 const deezerCharts_5=async()=>{ 
    const results =await fetch(`${url}playlist/8847611602`)    
     const data= await results.json()
     console.log(data);
     setDeezer_4([data]);

 }
 const deezerCharts_6=async()=>{ 
    const results =await fetch(`${url}playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_5([data]);
 }
 const deezerCharts_7=async()=>{ 
    const results =await fetch(`${url}chart`)    
     const data= await results.json()
     console.log(data);
     setDeezer_6(data.albums.data);
 }
 const deezerCharts_8=async()=>{ 
    const results =await fetch(`${url}chart`)    
     const data= await results.json()
     console.log(data);
     setDeezer_7(data.tracks.data);
 }
 const deezerCharts_9=async()=>{ 
    const results =await fetch(`${url}chart`)    
     const data= await results.json()
     console.log(data);
     setDeezer_8(data.playlists.data);
 }
 const deezerCharts_10=async()=>{ 
    const results =await fetch(`${url}chart`)    
     const data= await results.json()
     console.log(data);
     setDeezer_9(data.podcasts.data);
 }
 const deezerCharts_11=async()=>{ 
    const results =await fetch(`${url}chart`)    
     const data= await results.json()
     console.log(data);
     setDeezer_10(data.artists.data);
 }
 const getUser=async()=>{
    const results=await fetch(`${url}user/me&access_token=${localStorage.getItem('token')}`)
    const data=await results.json()
    localStorage.setItem('user_id',data.id)
  
   }     
//    const recentPlayed=async()=>{
//     const user_id=localStorage.getItem('user_id')
//     const results=await fetch(`${url}user/${user_id}/history&access_token=${localStorage.getItem('token')}`)
//     const data=await results.json()
//     console.log(data)
//     if(data!==undefined){
//         setRecent(data)
//     }
//    }   
//    const recommendations=async()=>{
//     const user_id=localStorage.getItem('user_id')
//     const results=await fetch(`${url}user/${user_id}/recommendations/tracks&access_token=${localStorage.getItem('token')}`)
//     const data=await results.json()
//     console.log(data)
//     if(data!==undefined){
//         setRecommend(data)
//     }
//    }   
   
useEffect(()=>{
deezerCharts_1();
deezerCharts_2();
deezerCharts_3();
deezerCharts_4();
deezerCharts_5();
deezerCharts_6();
deezerCharts_7();
deezerCharts_8();
deezerCharts_9();
deezerCharts_10();
deezerCharts_11();
getUser();
// if(localStorage.getItem('user_id')!==undefined){recentPlayed();
// recommendations();
// }

},[])

// const addToLibrary=()=>{
// //    fetch(`${url}user/albums&request_method=`)
// }

if(deezer!==undefined&&deezer_1!==undefined&&deezer_2!==undefined&&deezer_3!==undefined&&deezer_4!==undefined&&
deezer_5!==undefined&&deezer_6!==undefined&&deezer_7!==undefined&&deezer_8!==undefined&&deezer_9!==undefined&&
deezer_10!==undefined)return(<div className="mainplayer">
<div className="banner">
    <img src="" alt="" />
</div>
{/* <div className="title"><h4>RECENTLY PLAYED</h4></div>
    <div className="arrange">
{recent.data.map((song)=>{
        const{title,album,id}=song
        return <div  className="box">
        <Link to={`this/song/${id}`}>
        <img src={album.cover_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        <button>PLAY</button>
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    {/* </div>
    })}
    </div>         */} 
<div className="title">PLAYLISTS</div>

<div className="arrange">
    {deezer.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
     <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}

    {deezer_1.map((song)=>{
        const{title,picture_medium,id}=song;
        return <div  className="box">
         <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}

    {deezer_2.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
     
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}

</div> 
<div className="title"><h4>HOT PLAYLISTS</h4></div>
<div className="title"><h4>THE GOOD OLD DAYS</h4></div>
<div className="arrange">
{deezer_3.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })} 

{deezer_4.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}

{deezer_5.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}
    
   
</div>
<div className="title"><h4>TOP ALBUMS</h4></div>
<div className="arrange">
{deezer_6.map((song)=>{
        const{title,cover_medium,id}=song
        return <div  className="box">
        <Link to={`album/${id}`}>
        <img src={cover_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}
    </div>
    <div className="title"><h4>TOP TRACKS</h4></div>
<div className="arrange">
{deezer_7.map((song)=>{
        const{title,album,id}=song
        return <div  className="box">
        <Link to={`this/song/${id}`}>
        <img src={album.cover_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}
    </div>
    <div className="title"><h4>TOP PLAYLISTS</h4></div>
    <div className="arrange">
{deezer_8.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}
    </div>
    <div className="title"><h4>TOP PODCASTS</h4></div>
    <div className="arrange">
{deezer_9.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`podcast/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}
    </div>
    <div className="title"><h4>TOP ARTISTS</h4></div>
    <div className="arrange">
{deezer_10.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`artist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        {/* <button>PLAY</button> */}
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}
    </div>
   
 </div>   
)
    return (<div className="mainplayer">
     <Loader
    type="ThreeDots"
     color="white"
    height={100}
    width={100}
    timeout={3000} //3 secs
  className="loader"/>
  </div>)
}
 export default Mainplayer;


