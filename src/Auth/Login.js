import React, {useEffect,useState} from 'react';
import "../styles/login.css"; 
import {loginURL} from "./stats.js"

const Login = () => {
    return (<div className="login">
        
      <a href={loginURL}> Login
       </a>
     <a href='http://localhost:3000/home'>Continue without login</a>
     
     </div>)
     }

export default Login;
