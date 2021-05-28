import React, { useEffect,useState } from 'react';
import "../styles/mainplayer.css"; 
import {Link} from "react-router-dom";
import {url} from "../Auth/stats"

const Mainplayer = () => {
    const[deezer,setDeezer]=useState()
    const[deezer_1,setDeezer_1]=useState()
    const[deezer_2,setDeezer_2]=useState()
    const[deezer_3,setDeezer_3]=useState()
    const[deezer_4,setDeezer_4]=useState()
    const[deezer_5,setDeezer_5]=useState()
    const[deezer_6,setDeezer_6]=useState()
 
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
    const user_id=localStorage.getItem('user_id')
    const access_token=localStorage.getItem('token') 
    const results =await fetch(`${url}user/recommendations/albums&user_id=${user_id}&access_token=${access_token}`)    
     const data= await results.json()
     setDeezer_6([data]);
 }
 const getUser=async()=>{
    const results=await fetch(`${url}user/me&access_token=${localStorage.getItem('token')}`)
    const data=await results.json()
    console.log(data);
    // setUser(data);
    
   }


useEffect(()=>{
deezerCharts_1();
deezerCharts_2();
deezerCharts_3();
deezerCharts_4();
deezerCharts_5();
deezerCharts_6();
deezerCharts_7();
getUser();
})

// const addToLibrary=()=>{
// //    fetch(`${url}user/albums&request_method=`)
// }


if(deezer!==undefined&&deezer_1!==undefined&&deezer_2!==undefined&&deezer_3!==undefined&&deezer_4!==undefined&&
deezer_5!==undefined)return(<div className="mainplayer">
<div className="banner">
    <img src="" alt="" />
</div>
            
<div className="title">PLAYLISTS</div>

<div className="arrange2">
    {deezer.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
     <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        
        </Link>
        <button>PLAY</button>
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
        <button>PLAY</button>
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
        <button>PLAY</button>
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })}

    
       {/* {deezer_4.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        <button>PLAY</button>
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
    </div>
    })}  */}
</div> 
<div className="title"><h4>HOT PLAYLISTS</h4></div>



<div className="title"><h4>RECOMMENDATIONS</h4></div>


<div className="title"><h4>THE GOOD OLD DAYS</h4></div>
<div className="title"><h4>TOP ALBUMS</h4></div>
<div className="arrange2">
{deezer_3.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        <button>PLAY</button>
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>
    })} 

        <div  className="box">
        <Link to={`playlist/${deezer_4.id}`}>
        <img src={deezer_4.picture_medium}alt=""/>
        <h4>{deezer_4.title}</h4>
        </Link>
        <button>PLAY</button>
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button> */}
    </div>

 <div  className="box">
        <Link to={`playlist/${deezer_5.id}`}>
        <img src={deezer_5.picture_medium}alt=""/>
        <h4>{deezer_5.title}</h4>
        </Link>
        <button>PLAY</button>
        {/* <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
         */}
    </div>
    

</div>
 </div>   
)
  
    return <h1>Loading.....</h1> 
}
 export default Mainplayer;


