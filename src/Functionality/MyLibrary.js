import React, { useState, useEffect } from "react";

// import Sidebar from './Sidebar.js';

import "../styles/mylibrary.css";
// import {Link} from "react-router-dom"
import Bottombar from "../Functionality/Bottombar";
// import Player from "./Player/Player"
import Typography from "@material-ui/core/Typography";

const MyLibrary = () => {
  // eslint-disable-next-line
  const [player, setPlayer] = useState(false);
  const [active, setActive] = useState();
  // eslint-disable-next-line
  useEffect(() => {
    if (
      localStorage.getItem("song") != null &&
      localStorage.getItem("song") != undefined
    ) {
      setPlayer(true);
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem("active");
    localStorage.setItem("active", active);
  }, [active]);

  return (
    <div className="library-middle">
      <div className="library-title">
        {/* <Typography variant="h1">My Library</Typography> */}
      </div>

      <a href="/app">
        <div
          className="link-to-liked-songs"
          onClick={() => {
            setActive("likedsection");
          }}
        >
          <h1>LIKED SONGS</h1>
        </div>
      </a>

      <a href="/app">
        <div
          className="link-to-playlists"
          onClick={() => {
            setActive("myplaylistssection");
          }}
        >
          <h1>MY PLAYLISTS</h1>
        </div>
      </a>

      {/*     
{player? <Player song={localStorage.getItem('song')}></Player>:<div className="empty-player">
   </div>} */}

      <Bottombar />
    </div>
  );
};

export default MyLibrary;
