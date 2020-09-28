import React from 'react';


const Break = ({currentBreakTime}) => {
    
    return(
        <div className="break">
            <h2>I am the Break Session</h2>
            <p>{currentBreakTime}</p>

        </div>
    )
};

export default Break;
