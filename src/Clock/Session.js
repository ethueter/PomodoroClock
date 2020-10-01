import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faRedoAlt} from "@fortawesome/free-solid-svg-icons";


const Session = ({currentSessionTime, increment, reset}) => {
    
    return (
      <div className="session">
        <h2>I am the session setting</h2>
        <p className="time">{currentSessionTime}:00 min</p>
        <div className="controls">
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="2x"
            onClick={() => increment("up", "session")}
          />
          
          <FontAwesomeIcon
            icon={faMinusCircle}
            size="2x"
            onClick={() => increment("down", "session")}
          />
          
          <FontAwesomeIcon
            icon={faRedoAlt}
            size="2x"
            onClick={() => reset("session")}
          />
        </div>
      </div>
    );
};

export default Session;