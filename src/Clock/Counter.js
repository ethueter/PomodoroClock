import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faStopCircle, faRedoAlt } from "@fortawesome/free-solid-svg-icons";



const Counter = ({displayTime, displaySec, running, start, stop, zero, reset}) => {

    return (
      <div className="counter">
        <h1>The Countdown</h1>
        <p className="timeCountdown">
          {zero(displayTime)}:{zero(displaySec)}
        </p>
        <audio className="alarm">
          <source src="https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg"></source>
        </audio>
        <audio className="breakSound">
          <source src="https://actions.google.com/sounds/v1/ambiences/barnyard_with_animals.ogg"></source>
        </audio>
        <div className="controls">
          {running ? (
            <FontAwesomeIcon icon={faStopCircle} size="3x" onClick={stop} />
          ) : (
            <FontAwesomeIcon icon={faPlayCircle} size="3x" onClick={start} />
          )}
          <FontAwesomeIcon icon={faRedoAlt} size="3x" onClick={() => reset()} />
        </div>
        <div>
          <p className="description">
            What is Pomodoro? It is a work time management strategy. Simply it
            is setting a set time to focus on work and then a set break.
          </p>
        </div>
      </div>
    );
};

export default Counter;