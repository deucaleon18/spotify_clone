import React, { useEffect,useState } from 'react';
import "../styles/mainplayer.css"; 
import img from '../styles/vinyl2.jpg'
import {Link} from "react-router-dom"
const url=" http://ws.audioscrobbler.com/2.0/";
const APIKey="f03b8c9f7b186b3d4fa0b8073e9b0285";
const URL=`${url}?api_key=${APIKey}&limit=5&format=json`
const Mainplayer = () => {
 
    const[deezer,setDeezer]=useState()
    const[deezer_1,setDeezer_1]=useState()
    const[deezer_2,setDeezer_2]=useState()
    const[deezer_3,setDeezer_3]=useState()
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
     setDeezer_1([data]);
     if(deezer_1!==undefined){console.log(deezer_1)}
     
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
     setDeezer_2([data]);
     if(deezer_2!==undefined){console.log(deezer_2)}
    
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
     setDeezer_3([data]);
     if(deezer_3!==undefined){console.log(deezer_3)}
    
 }
useEffect(()=>{
deezerCharts_1();
deezerCharts_2();
deezerCharts_3();
deezerCharts_4();
},[])

if(deezer!==undefined&&deezer_1!==undefined&&deezer_2!==undefined&&deezer_3!==undefined)return(<div className="mainplayer">
<div className="banner">
    <img src="" alt="" />
</div>
            

<>
<div className="title">HAPPY HITS</div>

<div className="arrange">
    {deezer.map((song)=>{
        const{title,picture}=song
        return <div  className="box">
        <a href="/mp">
        <img src={picture}alt=""/>
        <h4>{title}</h4>
        <button>PLAY</button>
        </a>
    </div>
    })}
</div>
<div className="title">HAPPY HITS</div>

<div className="arrange">
    {deezer_1.map((song)=>{
        const{title,picture}=song
        return <div  className="box">
        <a href="/mp">
        <img src={picture}alt=""/>
        <h4>{title}</h4>
        <button>PLAY</button>
        </a>
    </div>
    })}
</div>
<div className="title">HAPPY HITS</div>

<div className="arrange">
    {deezer_2.map((song)=>{
        const{title,picture}=song
        return <div  className="box">
        <a href="/mp">
        <img src={picture}alt=""/>
        <h4>{title}</h4>
        <button>PLAY</button>
        </a>
    </div>
    })}
</div>
<div className="title">HAPPY HITS</div>

<div className="arrange">
    {deezer_3.map((song)=>{
        const{title,picture}=song
        return <div  className="box">
        <a href="/mp">
        <img src={picture}alt=""/>
        <h4>{title}</h4>
        <button>PLAY</button>
        </a>
    </div>
    })}
</div>

</>)

</div>     
    )  
    return <h1>Loading.....</h1> 
}
 export default Mainplayer;


