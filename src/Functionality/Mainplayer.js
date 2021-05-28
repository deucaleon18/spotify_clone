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
    const[deezer_7,setDeezer_7]=useState()
    const[deezer_8,setDeezer_8]=useState()
     const[deezer_9,setDeezer_9]=useState()
     const[deezer_10,setDeezer_10]=useState()
     const[deezer_11,setDeezer_11]=useState()
     const[deezer_12,setDeezer_12]=useState()
     const[deezer_13,setDeezer_13]=useState()
     const[deezer_14,setDeezer_14]=useState()
     const[deezer_15,setDeezer_15]=useState()
     const[deezer_16,setDeezer_16]=useState()
     const[deezer_17,setDeezer_17]=useState()
     const[deezer_18,setDeezer_18]=useState()
     const[deezer_19,setDeezer_19]=useState()
     const[deezer_20,setDeezer_20]=useState()
     const[deezer_21,setDeezer_21]=useState()
     const[deezer_22,setDeezer_22]=useState()
    //  const[deezer_23,setDeezer_23]=useState()
    //  const[deezer_24,setDeezer_24]=useState()
    //  const[deezer_25,setDeezer_25]=useState()

    // const[loading,setLoading]=useState(true)
    // const [user,setUser] = useState();

const deezerCharts_1=async()=>{ 
    const results =await fetch(`${url}/playlist/1479458365`)    
     const data= await results.json()
     console.log(data);
     setDeezer([data]);
     if(deezer!==undefined){console.log(deezer)}
 }

 const deezerCharts_2=async()=>{ 
    const results =await fetch(`${url}/playlist/00000000005`)    
     const data= await results.json()
     console.log(data);
     setDeezer_1([data]);
     if(deezer_1!==undefined){console.log(deezer_1)}
 }
 const deezerCharts_3=async()=>{ 
    const results =await fetch(`${url}/playlist/ 00001001007`)    
     const data= await results.json()
     console.log(data);
     setDeezer_2([data]);
     if(deezer_2!==undefined){console.log(deezer_2)}
 }
 const deezerCharts_4=async()=>{ 
    const results =await fetch(`${url}/playlist/ 5052700044`)    
     const data= await results.json()
     console.log(data);
     setDeezer_3([data]);
     if(deezer_3!==undefined){console.log(deezer_3)}
 }

 const deezerCharts_5=async()=>{ 
    const results =await fetch(`${url}/playlist/8847611602`)    
     const data= await results.json()
     console.log(data);
     setDeezer_4([data]);
     if(deezer_4!==undefined){console.log(deezer_4)}
 }
 const deezerCharts_6=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_5([data]);
     if(deezer_5!==undefined){console.log(deezer_5)}
 }
 const deezerCharts_7=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_6([data]);
     if(deezer_6!==undefined){console.log(deezer_6)}
 }
 const deezerCharts_8=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_7([data]);
     if(deezer_7!==undefined){console.log(deezer_7)}
 }

 const deezerCharts_9=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_8([data]);
     if(deezer_8!==undefined){console.log(deezer_8)}
 }
 const deezerCharts_10=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_9([data]);
     if(deezer_9!==undefined){console.log(deezer_9)}
 }
 const deezerCharts_11=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_10([data]);
     if(deezer_10!==undefined){console.log(deezer_10)}
 }
 const deezerCharts_12=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_11([data]);
     if(deezer_11!==undefined){console.log(deezer_11)}
 }
 const deezerCharts_13=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_12([data]);
     if(deezer_12!==undefined){console.log(deezer_12)}
 }
 const deezerCharts_14=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_13([data]);
     if(deezer_13!==undefined){console.log(deezer_13)}
 }
 const deezerCharts_15=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_14([data]);
     if(deezer_14!==undefined){console.log(deezer_14)}
 }

 const deezerCharts_16=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_15([data]);
     if(deezer_15!==undefined){console.log(deezer_15)}
 }

 const deezerCharts_17=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_16([data]);
     if(deezer_16!==undefined){console.log(deezer_16)}
 }
 const deezerCharts_18=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_17([data]);
     if(deezer_17!==undefined){console.log(deezer_17)}
 }
 const deezerCharts_19=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_18([data]);
     if(deezer_18!==undefined){console.log(deezer_18)}
 }
 const deezerCharts_20=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_19([data]);
     if(deezer_19!==undefined){console.log(deezer_19)}
 }
 const deezerCharts_21=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_20([data]);
     if(deezer_20!==undefined){console.log(deezer_20)}
 }
 const deezerCharts_22=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_21([data]);
     if(deezer_21!==undefined){console.log(deezer_21)}
 }
 const deezerCharts_23=async()=>{ 
    const results =await fetch(`${url}/playlist/668126235`)    
     const data= await results.json()
     console.log(data);
     setDeezer_22([data]);
     if(deezer_22!==undefined){console.log(deezer_22)}
 }


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
deezerCharts_12();
deezerCharts_13();
deezerCharts_14();
deezerCharts_15();
deezerCharts_16();
deezerCharts_17();
deezerCharts_18();
deezerCharts_19();
deezerCharts_20();
deezerCharts_21();
deezerCharts_22();
deezerCharts_23();
getUser();
})

const addToLibrary=()=>{
//    fetch(`${url}user/albums&request_method=`)
}

const getUser=async()=>{
    const results=await fetch(`${url}user/me&access_token=${localStorage.getItem('token')}`)
    const data=await results.json()
    console.log(data);
    // setUser(data);
    if(data!==undefined){localStorage.setItem('user_id',data.id)}
   }

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
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
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
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
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
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
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
<div className="arrange2">
{deezer_3.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        <button>PLAY</button>
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
    </div>
    })} 
{deezer_4.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
        <button>PLAY</button>
        <button onClick={()=>{addToLibrary()}}>ADD TO LIBRARY</button>
    </div>
    })} 

{deezer_5.map((song)=>{
        const{title,picture_medium,id}=song
        return <div  className="box">
        <Link to={`playlist/${id}`}>
        <img src={picture_medium}alt=""/>
        <h4>{title}</h4>
        </Link>
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


