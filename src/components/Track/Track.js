import React from "react";
//import './Tracklist.scss';

/*
Inside the src/react-app-env.d.ts add this:

/// <reference types="react-scripts" />
declare module '*.mp3';
*/

//import chill from '../../assets/chill1.mp3'
//import requestal from '../../assets/requestal3.mp3'
//import softi from '../../assets/Softi.mp3'

const Track = (url) => {

  //const list = [chill, requestal, softi]
  var song;

  function preload(){
   
  }
  function play(){
    //song.play()
  }

  //const audio = new Audio()

  const handleDrag = (e) =>{
    console.log(e.target)

  }

  return(
    <div className="track" onDrag={(e) =>handleDrag(e)}>
    </div>
  )
}

export default Track;