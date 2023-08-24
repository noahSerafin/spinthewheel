import React, { useState, useEffect } from "react";
//import TurntableScene from "../../components/TurntableScene/TurntableScene";
import './Deck.scss';
import interact from "interactjs";

const Deck = (props) => {
    const {track, bpm, art} = props;

    //const [rotation, setRotation] = useState(0);
    //const [speed, setSpeed] = useState(100);
    //useEffect(() => {});

    interact('.drag-rotate').draggable({//rewind / ff buffer
        onstart: function (event) {
            const element = event.target;
            const rect = element.getBoundingClientRect();

            // store the center as the element has css `transform-origin: center center`
            element.dataset.centerX = rect.left + rect.width / 2;
            element.dataset.centerY = rect.top + rect.height / 2;
            // get the angle of the element when the drag starts
            element.dataset.angle = getDragAngle(event);
        },
        onmove: function (event) {
            var element = event.target;
            var center = {
            x: parseFloat(element.dataset.centerX) || 0,
            y: parseFloat(element.dataset.centerY) || 0,
            };
            var angle = getDragAngle(event);

            // update transform style on dragmove
            element.style.transform = 'rotate(' + angle + 'rad' + ')';

            //set track position
        },
        onend: function (event) {
            const element = event.target;

            // save the angle on dragend
            element.dataset.angle = getDragAngle(event);

            //continue play from position if playing
        },                          
    })

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

    const loadBuffer = () => {
        //load tracck to buffer
    }

    const play = () => {
        //play audio

    }

    const pause = () => {
        //play audio
    }

    const setSpeed = () => {
        //set buffer playback speed
    }

    const findBPM = () => {
        //find current bpm fron track bpm / speed
    }


    return(
        <div className="deck">
            <div className="plate drag-rotate">
                <div className="plate__img-container">
                    <img className="plate__img" src={art} ></img>
                </div>
            </div>
        </div>
    )
}

export default Deck;