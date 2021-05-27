import React,{useState,useEffect} from 'react';
import{app_id,secret} from './stats'
 
const Loading = () => {
    const [code,setCode] = useState();
    const tokenURL=`https://deezerclone.herokuapp.com/https://connect.deezer.com/oauth/access_token.php?app_id=${app_id}&secret=${secret}&code=${code}&output=json`
    useEffect(() => {
        getCode();
         if(code!==undefined) {
         fetchToken();
        }
    })

    const handleRedirect=()=>{ 
     window.location.href='/home'   
    }
const getCode=()=>{
    let link=window.location.search;
    const urlParams=new URLSearchParams(link)
    const key= urlParams.get('code')
    setCode(key)
}
        const fetchToken=async()=>{ 
   
       const results= await fetch(tokenURL);
       const data=await results.json();
       if(data!==undefined){
        
          localStorage.setItem('token',data.access_token);
       }
       handleRedirect();
   }   

return <div>
    <h1>Loading...</h1>
</div>
}
export default Loading;