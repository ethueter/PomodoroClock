import React from 'react';
import Session from './Session';
import Break from "./Break";
import Counter from "./Counter";


const MainContainer = () => {
    
    return(
        <div className='main-container'>
            <div>
                <Session />
                <Break />
            </div>
            <div className="counter-container">
                <Counter />
            </div>
        </div>
    );
};

export default MainContainer;
