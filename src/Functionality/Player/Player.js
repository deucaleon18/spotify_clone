import React, { useState, useRef,useEffect} from "react";
import "../../styles/player.css";

import Slider from "./components/slider/Slider";
import ControlPanel from "./components/controls/ControlPanel";

const Player = ({percent,time,duration}) => {
  const [percentage, setPercentage] = useState(percent);
  const [isPlaying, setIsPlaying] = useState(true);
  // const [duration, setDuration] = useState(localStorage.getItem('duration'));
  const [currentTime, setCurrentTime] = useState(time);
  const song = localStorage.getItem("song");
  const audioRef = useRef();
  //  if(song==undefined||song==null){setIsPlaying(false)}

  useEffect(()=>{
    const audio = audioRef.current;
    if(currentTime!=undefined){
      audio.currentTime=currentTime;
     
    }
    // audio.currentTime=0;
  },[])




  const onChange = (e) => {
    const audio = audioRef.current;
   audio.currentTime=currentTime;
   setPercentage(percentage);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 1.0;

    // eslint-disable-next-line
    if (isPlaying == false) {
      setIsPlaying(true);
      audio.currentTime=currentTime;
      audio.play();
      // localStorage.removeItem('song')
    }
    // eslint-disable-next-line
    if (isPlaying == true) {
      setIsPlaying(false);
      audio.currentTime=currentTime;
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
    localStorage.setItem('currentTime',currentTime);
    localStorage.setItem('percentage',percent)
  };

  return (
    <div className="player">
      <div className="app-container">
        <ControlPanel
          play={play}
          isPlaying={!isPlaying}
          duration={duration}
          currentTime={currentTime}
          percentage={percentage}
        />
        <Slider percentage={percentage} onChange={onChange} />
        <audio
         currentTime={currentTime}
          controls
          loop
          autoplay="true"
          percentage={percentage}
          preload="auto"
          ref={audioRef}
          onTimeUpdate={getCurrDuration}

         
          onLoadedData={(e) => {
            localStorage.setItem('duration',e.currentTarget.duration.toFixed(2));

          }}
          src={song}t={currentTime}
        ></audio>
      </div>
    </div>
  );
};

export default Player;
