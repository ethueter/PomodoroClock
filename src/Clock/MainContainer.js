import React, {useState} from 'react';
import Session from './Session';
import Break from "./Break";
import Counter from "./Counter";


const MainContainer = () => {
    const [sessionTime, setSessionTime] = useState(35);
    const [breakTime, setBreakTime] = useState(10);
    
    return(
        <div className='main-container'>
            <div>
                <Session currentSessionTime={sessionTime}/>
                <Break currentBreakTime={breakTime}/>
            </div>
            <div className="counter-container">
                <Counter />
            </div>
        </div>
    );
};

export default MainContainer;
