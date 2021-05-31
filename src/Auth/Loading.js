import React,{useState,useEffect} from 'react';
import{app_id,secret} from './stats'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "../styles/loading.css"
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

return <div className="loading">
    <Loader
    type="ThreeDots"
     color="white"
    height={100}
    width={100}
    timeout={10000} //3 secs
  className="loader"/>
</div>
}
export default Loading;