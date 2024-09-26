import React, { useState } from "react";
import TurntableScene from "../../components/TurntableScene/TurntableScene";
import TrackList from "../../components/TrackList/TrackList";
import Deck from "../../components/Deck/DeckB";
import './Home.scss';
import Mixer from "../../components/Mixer/Mixer";
import * as Tone from 'tone';
const chill = '/assets/chill1.mp3'
const softi = '../../assets/Softi.mp3'
//const requestal = '../../assets/requestal3.mp3'

const Home = () => {

    let baseURL = 'http://localhost:3000/'
    const [audioL, setAudioL] = useState(`${baseURL}${chill}`)
    const [audioR, setAudioR] = useState(`${baseURL}${softi}`)

   // let multiPlayer = nTone.Players();

    //const playerL = new Tone.Player(audioL).toDestination();
    //const playerR = new Tone.Player(audioR).toDestination();

    return(
        <div className="homepage-container">
            <div className="decks">
                <Deck audio={audioL}/>
                <Mixer/>
                <Deck audio={audioR}/>
            </div>           
            <TrackList audioL={audioL} audioR={audioR}/>
        </div>
    )
}

export default Home;