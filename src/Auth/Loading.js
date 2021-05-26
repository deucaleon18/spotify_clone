import React,{useState,useEffect} from 'react'
import {tokenURL} from './stats'

const Loading = () => {
    const [code, setCode] = useState();
  const [token, setToken] = useState();
    useEffect(() => {
        
        getCode();
       
         if(code!==undefined) {localStorage.setItem('code',code);
         getToken();
        };
               
//        if(session!==undefined){localStorage.setItem('sk',session)}
//      handleRedirect();
//     // return () => {localStorage.deleteItem('token');
//     // localStorage.deleteItem('sk');
//  }
    }, [])
//     const handleRedirect=()=>{
//         if(session!==undefined){
//             window.location.href='http://localhost:3000/r'
//         }
//     }
const getCode=()=>{
    let link=window.location.search;
    const urlParams=new URLSearchParams(link)
    const key= urlParams.get('code')
    setCode(key)
}
    const getToken=()=>{
        
  fetchToken();
       }
        const fetchToken=async ()=>{ 
        window.localStorage.getItem('code')
       const result= await fetch(`${tokenURL}&code=${code}`,{
        mode: 'no-cors'
       })
       const data=await result.json();
       
       if(data!==undefined){console.log(data);
     setToken(data);}
   }          
 if(code!==undefined){console.log(code);}
if(token!==undefined){console.log(token);}
return <div>
    <h1>Loading...</h1>
</div>
}
export default Loading;