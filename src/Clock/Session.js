import React from 'react';


const Session = ({currentSessionTime}) => {
    
    return(
        <div className='session'>
            <h2>I am the session setting</h2>
            <i class="far fa-arrow-alt-circle-up"></i>
            <p>currentSessionTime</p>
        </div>
    );
};

export default Session;