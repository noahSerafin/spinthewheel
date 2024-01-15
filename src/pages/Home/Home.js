import React from "react";
import TurntableScene from "../../components/TurntableScene/TurntableScene";
import TrackList from "../../components/TrackList/TrackList";
import Deck from "../../components/Deck/Deck";
import './Home.scss';
import Mixer from "../../components/Mixer/Mixer";

const Home = () => {

    return(
        <div className="homepage-container">
            <div className="decks">
                <Deck/>
                <Mixer/>
                <Deck/>
            </div>           
            <TrackList />
        </div>
    )
}

export default Home;