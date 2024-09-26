import React, {useState, useRef, useEffect} from "react";
import './Deck.scss';
import * as Tone from 'tone';

//https://codepen.io/taye/pen/wrrxKb
//https://codepen.io/jsguy/pen/NWGapLB

const Deck = (audio) => {

  const buffer = new Tone.ToneAudioBuffer(audio, () => {
    console.log("loaded");
  });
  
  const player = new Tone.Player(audio).toDestination();

  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [angle, setAngle] = useState(0)
  const [active, setActive] = useState(false)//useState?
  const [style, setStyle] = useState({transform: 'rotate(0deg)'})
  
  /*interact('.drag-rotate')
  .draggable({*/
  function getDragAngle(event) {
    var element = event.target;
    var startAngle = parseFloat(element.dataset.angle) || 0;
    var center = {
      x: parseFloat(element.dataset.centerX) || 0,
      y: parseFloat(element.dataset.centerY) || 0,
    };
    var angle = Math.atan2(center.y - event.clientY,
                           center.x - event.clientX);
  
    return angle - startAngle;
  }


  const start =  function (event) {
    setActive(true)
    const element = event.target;
    const rect = element.getBoundingClientRect();

    // store the center as the element has css `transform-origin: center center`
    element.dataset.centerX = rect.left + rect.width / 2;
    element.dataset.centerY = rect.top + rect.height / 2;
    // get the angle of the element when the drag starts
    element.dataset.angle = getDragAngle(event);
  }
  const rotate = function (event) {
    if(active){

      var element = event.target;
      var center = {
        x: parseFloat(element.dataset.centerX) || 0,
        y: parseFloat(element.dataset.centerY) || 0,
      };
      var angle = getDragAngle(event);
      
      // update transform style on dragmove
      element.style.transform = 'rotate(' + angle + 'rad' + ')';
    }
  }
  const stop = function (event) {
    //console.log(active)
    setActive(false)
    //const element = event.target;

    // save the angle on dragend
    //element.dataset.angle = getDragAngle(event);
  }
//})

  useEffect(() => {
    //isPlaying ? audio.play() : audioToPlay.pause();
  },
    [isPlaying]
  );

  const playPause = () => {
    console.log('playpause')    
    if(audio){
      player.start()
      setIsPlaying(true)
    }
  }

  return(
    <div className="deck-container">
    <div className='deck'> 
      <div id='container'> 
        <div id="rotate" onMouseDown={(e) => start(e)} onMouseMove={(e) => rotate(e)} onMouseUp={(e) => stop(e)} onMouseLeave={(e) => stop(e)} style={style} className={`active-${active}`}>
          <div id="drag"></div>
        </div>
      </div>
    </div>
    <button className="playbtn" onClick={() => playPause()}>PlayPause</button>
    </div>
  )
}

export default Deck;