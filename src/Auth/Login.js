import React from 'react';
import "../styles/login.css"; 
import {loginURL} from "./stats.js"

const Login = () => {
  if(localStorage.getItem('token')!==null){return (<div className="login">
        
        <a href="/home"> HOME 
       </a>
     {/* <a href='http://localhost:3000/home'>Continue without login</a> */}
     {/* <img src={img} alt=""/> */}
     </div>)}

     return (<div className="login">
        
     <a href={loginURL}> Login
      </a>
    <a href='/home'>Continue without login</a>
    {/* <img src={img} alt=""/> */}
    </div>)
     }

export default Login;
