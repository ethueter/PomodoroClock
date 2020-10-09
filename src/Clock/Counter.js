import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStopCircle, faRedoAlt } from "@fortawesome/free-solid-svg-icons";



const Counter = ({displayTime, displaySec, running, start, stop, zero, reset}) => {

    return (
      <div className="counter">
        <h2>The Countdown</h2>
        <p className="time">
          {zero(displayTime)}:{zero(displaySec)}
        </p>
        {running ? (
          <FontAwesomeIcon icon={faStopCircle} size="3x" onClick={stop} />
        ) : (
          <FontAwesomeIcon icon={faPlayCircle} size="3x" onClick={start} />
        )}
            <FontAwesomeIcon
                icon={faRedoAlt}
                size="3x"
                onClick={()=> reset()}
            />
      </div>
    );
};

export default Counter;