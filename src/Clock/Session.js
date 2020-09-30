import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faThLarge} from "@fortawesome/free-solid-svg-icons";


const Session = ({currentSessionTime, increment}) => {
    
    return (
      <div className="session">
        <h2>I am the session setting</h2>
        <p className="time">{currentSessionTime}:00 min</p>
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="2x"
          onClick={() => increment("up", "session")}
        />
        <span> </span>
        <FontAwesomeIcon
          icon={faMinusCircle}
          size="2x"
          onClick={() => increment("down", "session")}
        />
      </div>
    );
};

export default Session;