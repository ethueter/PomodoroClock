import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

const Break = ({currentBreakTime, increment, reset}) => {
    
    return (
      <div className="break">
        <h2>Break Time</h2>
        <p className="time">{currentBreakTime}:00</p>
        <div className="controls">
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="2x"
          onClick={() => increment("up", "break")}
        />
        
        <FontAwesomeIcon
          icon={faMinusCircle}
          size="2x"
          onClick={() => increment("down", "break")}
        />
        
            <FontAwesomeIcon
                icon={faRedoAlt}
                size="2x"
                onClick={() => reset("break")}
            />
            </div>
      </div>
    );
};

export default Break;
