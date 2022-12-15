import React from "react";
import TurntableScene from "../../components/TurntableScene/TurntableScene";
import TrackList from "../../components/TrackList/TrackList";

const Home = () => {

    return(
        <div className="homepage-container">
            <TurntableScene />
            <TrackList />
        </div>
    )
}

export default Home;