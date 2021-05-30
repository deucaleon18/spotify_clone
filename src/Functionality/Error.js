import React from 'react'
import Header from '../Header';
import Sidebar from './Sidebar.js';

import Player from './Player/Player.js';
import Socials from "../Socials";

 const Error = () => {
    return (
        <div className="error">
             <Header />
    <div className="middle">
    <Sidebar />
    <div >Sorry you need to <a href="/login">Login</a> to access this feature</div>
    <Socials/>
    </div>
    <Player /> 
        </div>
    )
}

export default Error;