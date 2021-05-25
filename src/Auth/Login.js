import React, {useEffect,useState} from 'react';
import "../styles/login.css"; 
import {loginURL} from "./stats.js"

const Login = () => {
  if(localStorage.getItem('token')!==null){return (<div className="login">
        
        <a href="http://localhost:3000/home"> Login
       </a>
     {/* <a href='http://localhost:3000/home'>Continue without login</a> */}
     
     </div>)}

     return (<div className="login">
        
     <a href={loginURL}> Login
      </a>
    <a href='http://localhost:3000/home'>Continue without login</a>
    
    </div>)
     }

export default Login;
