import React from "react";
import './Deck.scss';
//https://codepen.io/taye/pen/wrrxKb
//https://codepen.io/jsguy/pen/NWGapLB

const Deck = (audio, rotation, isPlaying) => {

    var init, rotate, start, stop,
      active = false,
      angle = 0,
      rotation = 0,
      startAngle = 0,
      center = {
        x: 0,
        y: 0
      },
      R2D = 180 / Math.PI,
      rot = document.getElementById('rotate');

    rotate = function(e) {
        e.preventDefault();
        var x = e.clientX - center.x,
          y = e.clientY - center.y,
          d = R2D * Math.atan2(y, x);
        rotation = d - startAngle;
        return rot.style.transform = "rotate(" + (angle + rotation) + "deg)";
      };
    
      stop = function() {
        angle += rotation;
        return active = false;
      };

    return(
        <div className='deck'> 
          <div id='container'> 
            <div id="rotate">
            <div id="drag">Deck</div>
            </div>
          </div>
        </div>
    )
}

export default Deck;