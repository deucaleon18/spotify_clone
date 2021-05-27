import React, { useEffect,useState } from 'react';
import "../styles/mainplayer.css"; 
import {Link} from "react-router-dom";
import {url} from "../Auth/stats"
const Mainplayer = () => {
 
    const[deezer,setDeezer]=useState()
    const[deezer_1,setDeezer_1]=useState()
    const[deezer_2,setDeezer_2]=useState()
    const[deezer_3,setDeezer_3]=useState()
    const[loading,setLoading]=useState(true)
    const [user,setUser] = useState();
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
getUser();
},[])

const addToLibrary=()=>{
   fetch(`${url}user/albums&request_method=`)
}

const getUser=async()=>{
    const results=await fetch(`${url}user/me&access_token=${localStorage.getItem('token')}`)
    const data=await results.json()
    console.log(data);
    setUser(data);
    if(data!==undefined){localStorage.setItem('user_id',data.id)}
   }

if(deezer!==undefined&&deezer_1!==undefined&&deezer_2!==undefined&&deezer_3!==undefined)return(<div className="mainplayer">
<div className="banner">
    <img src="" alt="" />
</div>
            
<div className="title">HAPPY HITS</div>

<div className="arrange2">
    {deezer.map((song)=>{
        const{title,picture_medium}=song
        return <div  className="box">
        <a href="/playlist">
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        
        </a>
        <button>PLAY</button>
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
    </div>
    })}

    {deezer_1.map((song)=>{
        const{title,picture_medium}=song;
        return <div  className="box">
        <a href="/playlist">
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
   
        </a>
        <button>PLAY</button>
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
    </div>
    })}

    {deezer_2.map((song)=>{
        const{title,picture_medium}=song
        return <div  className="box">
        <a href="/playlist">
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
     
        </a>
        <button>PLAY</button>
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
    </div>
    })}

    {deezer_3.map((song)=>{
        const{title,picture_medium}=song
        return <div  className="box">
        <a href="/playlist">
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </a>
        <button>PLAY</button>
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
    </div>
    })}
</div> 
 </div>   
)
  
    return <h1>Loading.....</h1> 
}
 export default Mainplayer;


