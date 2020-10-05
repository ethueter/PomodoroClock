import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";



const Counter = ({displayTime, displaySec, running, startStop, flip}) => {

    return(
        <div className="counter">
            <h2>I am the counter</h2>
            <p className="time">{displayTime}:{displaySec}</p>
            <button onClick={flip}>Flip</button>
            {running ? 
                <FontAwesomeIcon
                    icon={faStopCircle}
                    size="2x"
                    onClick={startStop}
                /> :
                <FontAwesomeIcon
                    icon={faPlayCircle}
                    size="2x"
                    onClick={startStop}
                />}
        </div>
    )
};

export default Counter;