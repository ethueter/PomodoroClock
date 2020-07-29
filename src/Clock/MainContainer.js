import React from 'react';
import Session from './Session';
import Break from "./Break";


const MainContainer = () => {
    
    return(
        <div className='main-container'>
            <h2>I am the main container</h2>
            <div>
                <Session />
                <Break />
            </div>
        </div>
    );
};

export default MainContainer;
