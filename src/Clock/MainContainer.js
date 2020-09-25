import React, {useState} from 'react';
import Session from './Session';
import Break from "./Break";
import Counter from "./Counter";


const MainContainer = () => {
    const [sessionTime, setSessionTime] = useState(35);
    const [breackTime, setBreakTime] = useState(10);
    
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
