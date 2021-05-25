import React,{useState,useEffect} from 'react'
import {url,APIKey,md5,secret} from './stats'

const Loading = () => {
   const [token, setToken] = useState();
   const [session, setSession] = useState();

const signature=md5(`api_key${APIKey}methodauth.getSessiontoken${token}${secret}`)
const sessUrl=`${url}?method=auth.getSession&api_key=${APIKey}&api_sig=${signature}&token=${token}&format=json`

   

    useEffect(() => {
        
        getToken();
       
        if(token!==undefined) {localStorage.setItem('token',token);
        getSession();}
         
        if(session!==undefined){localStorage.setItem('sk',session)}
    
     handleRedirect();
    // return () => {localStorage.deleteItem('token');
    // localStorage.deleteItem('sk');
        //  }
    }, [])
    const handleRedirect=()=>{
        if(session!==undefined){
            window.location.href='http://localhost:3000/r'
        }
    }
const getToken=()=>{
    let link=window.location.search;
    const urlParams=new URLSearchParams(link)
    const key= urlParams.get('token')
    setToken(key)
}
    const getSession=()=>{
   localStorage.getItem('token')
   
   fetchSession(); 
       }
       const fetchSession=async ()=>{ 
        const result= await fetch(sessUrl)
        const data=await result.json();
        // const lock=data.session.key;
        if(data!==undefined){console.log(data.session.key);
        setSession(data.session.key);}
    }          
if(token!==undefined){console.log(token);}
if(session!==undefined){console.log(session);}
return <div>
    <h1>Loading...</h1>
</div>
}
export default Loading;