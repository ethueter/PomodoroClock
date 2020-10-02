import React from 'react';


const Counter = ({displayTime, flip}) => {
    
    return(
        <div className="counter">
            <h2>I am the counter</h2>
            <p className="time">{displayTime}</p>
        </div>
    )
};

export default Counter;