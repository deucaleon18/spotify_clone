import React, { useEffect,useState } from 'react';
import "../styles/mainplayer.css"; 
import img from '../styles/vinyl2.jpg'
import {Link} from "react-router-dom"
const url=" http://ws.audioscrobbler.com/2.0/";
const APIKey="f03b8c9f7b186b3d4fa0b8073e9b0285";
const URL=`${url}?api_key=${APIKey}&limit=5&format=json`
const Mainplayer = () => {
    const[charts,setCharts]=useState()
    const[artists,setArtists]=useState()
    const[tags,setTags]=useState()
    const[location,setLocation]=useState()
    const[recents,setRecents]=useState()
    const[deezer,setDeezer]=useState()
    const[loading,setLoading]=useState(true)
const deezerCharts_1=async()=>{ 
    const results =await fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist/1479458365", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e29141c4e6msh102d2b1926a7361p1b674ejsnca4accbfc562",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }) 
     const data= await results.json()
     console.log(data);
     setDeezer([data]);
     if(deezer!==undefined){console.log(deezer)}
     if(data!==undefined){setLoading(false);}
 }

 const deezerCharts_2=async()=>{ 
    const results =await fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist/00000000005", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e29141c4e6msh102d2b1926a7361p1b674ejsnca4accbfc562",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }) 
     const data= await results.json()
     console.log(data);
    //  setDeezer(data);
 
 }

 const deezerCharts_3=async()=>{ 
    const results =await fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist/00001001007", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e29141c4e6msh102d2b1926a7361p1b674ejsnca4accbfc562",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }) 
     const data= await results.json()
     console.log(data);
    //  setDeezer(data);
 
 }

 const deezerCharts_4=async()=>{ 
    const results =await fetch("https://deezerdevs-deezer.p.rapidapi.com/playlist/00000001007", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e29141c4e6msh102d2b1926a7361p1b674ejsnca4accbfc562",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    }) 
     const data= await results.json()
     console.log(data);
    //  setDeezer(data);
 
 }

useEffect(()=>{
deezerCharts_1();
deezerCharts_2();
deezerCharts_3();
deezerCharts_4();
},[])


 
return(<div className="mainplayer">
<div className="banner">
    <img src="" alt="" />
</div>
            

{!loading?(<>
<div className="title">HAPPY HITS</div>

<div className="arrange">
    {deezer.map((song)=>{
        const{title,picture}=song
        return <div  className="box">
        <img src={picture}alt="" />
        <h4>{title}</h4>
        <button>PLAY</button>
    </div>
    })}
</div>
</>):<h1>loading</h1>}

{/* 

   <div className="title">TOP ARTISTS</div>
   <div className="arrange1">
   {artists.map((artist)=>{
        const{name,mbid}=artist
        return <div  className="box">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <button>PLAY</button>
    </div>
    })})
   </div>
   <div className="title">TOP TAGS</div>
   <div className="arrange2">
   {tags.map((tag)=>{
        const{name,mbid}=tag
        return <div  className="box">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <button>PLAY</button>
    </div>
    })})
   </div>
   <div className="title">TOP SONGS IN YOUR REGION</div>
   <div className="arrange2">
    {location.map((locate)=>{
        const{name,mbid}=locate
        return <div  className="box">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <button>PLAY</button>
    </div>
    })}) 
</div>  */}
</div>     
    )  
}


 export default Mainplayer;


