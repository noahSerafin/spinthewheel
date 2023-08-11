import React from "react";
//import TurntableScene from "../../components/TurntableScene/TurntableScene";
import TrackList from "../../components/TrackList/TrackList";
import Deck from "../../components/Deck/Deck";
import Mixer from "../../components/Mixer/Mixer";
import './Home.scss';

const Home = () => {



    return(
        <div className="homepage-container">
            <div className="decks-container">
                <Deck/>
                <Mixer/>
                <Deck/>
            </div>
            <TrackList />
        </div>
    )
}

export default Home;