import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";


const Session = ({currentSessionTime, increment}) => {
    
    return (
      <div className="session">
        <h2>I am the session setting</h2>
        <p>{currentSessionTime}min</p>
            <FontAwesomeIcon icon={faPlusCircle} onClick={() =>increment("up", "session")}/>
        <FontAwesomeIcon icon={faMinusCircle} />
      </div>
    );
};

export default Session;