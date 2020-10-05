import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";



const Counter = ({displayTime, flip}) => {

    const [isRunning, setIsRunning] = useState(false);

    const startStop = () => {
        setIsRunning(!isRunning)
    }


    
    return(
        <div className="counter">
            <h2>I am the counter</h2>
            <p className="time">{displayTime}</p>
            <button onClick={flip}>Flip</button>
            {isRunning ? 
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