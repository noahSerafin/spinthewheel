import React from "react";
//import TurntableScene from "../../components/TurntableScene/TurntableScene";
import './Mixer.scss';

const Mixer = (props) => {
    const {trackL, trackR} = props;

    var crossfade = 50;
    var leftVolume = 50;
    var rightVolume = 50;

    return(
        <div className="mixer">
            <div className="flex">
                <input className='slider-vert' orient='vertical' type="range" min='1' max='100' value={leftVolume}/>
                <input className='slider-vert' orient='vertical' type="range" min='1' max='100' value={rightVolume}/>
            </div>
            <input className='slider-horiz' type="range" min='1' max='100' value={crossfade}/>
        </div>
    )
}

export default Mixer;