import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const Break = ({currentBreakTime, increment}) => {
    
    return (
      <div className="break">
        <h2>I am the Break Session</h2>
        <p className="time">{currentBreakTime}:00</p>
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="2x"
          onClick={() => increment("up", "break")}
        />
        <span> </span>
        <FontAwesomeIcon
          icon={faMinusCircle}
          size="2x"
          onClick={() => increment("down", "break")}
        />
      </div>
    );
};

export default Break;
