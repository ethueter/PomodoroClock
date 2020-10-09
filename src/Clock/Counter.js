import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";



const Counter = ({displayTime, displaySec, running, start, stop, zero, flip}) => {

    return (
      <div className="counter">
        <h2>The Countdown</h2>
        <p className="time">
          {zero(displayTime)}:{zero(displaySec)}
        </p>
        <button onClick={flip}>Flip</button>
        {running ? (
          <FontAwesomeIcon icon={faStopCircle} size="2x" onClick={stop} />
        ) : (
          <FontAwesomeIcon icon={faPlayCircle} size="2x" onClick={start} />
        )}
      </div>
    );
};

export default Counter;