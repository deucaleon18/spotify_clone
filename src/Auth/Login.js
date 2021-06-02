import React from 'react';
import "../styles/login.css"; 
import {loginURL} from "./stats.js";
import {BrowserRouter as Router,Route} from "react-router-dom";
const Login = () => {

 <Router><Route exact path="/"><Login/></Route></Router> 
   //When logged in
  if(localStorage.getItem('token')!==null){return (<div className="login">
       
        <a href="/app"  onClick={()=>{localStorage.setItem('active','homesection')}}> HOME 
       </a>
     </div>)}
 //When not logged in
     return (<div className="login">
        
     <a href={loginURL}> Login
      </a>
    <a href="/app" onClick={()=>{localStorage.setItem('active','homesection')}}>Continue without login</a>
    </div>)
     }

export default Login;
