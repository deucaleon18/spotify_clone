import React from 'react';
import "../styles/login.css"; 
import {loginURL} from "./stats.js";
const Login = () => {
   //When logged in
  if(localStorage.getItem('token')!==null){return (<div className="login">
       
        <a href="/home"> HOME 
       </a>
     </div>)}
 //When not logged in
     return (<div className="login">
        
     <a href={loginURL}> Login
      </a>
    <a href='/home'>Continue without login</a>
    </div>)
     }

export default Login;
