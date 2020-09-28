import React, {useState} from 'react';
import Session from './Session';
import Break from "./Break";
import Counter from "./Counter";


const MainContainer = () => {
    const [sessionTime, setSessionTime] = useState(35);
    const [breakTime, setBreakTime] = useState(10);

    const increment = (direction, timeType) => {
        if(timeType === "session"){
            if(direction === "up"){
                setSessionTime(sessionTime + 1);
            } else if (direction === "down"){
                setSessionTime(sessionTime - 1);
            }
        } else if (timeType === "break"){
            if (direction === "up") {
                setBreakTime(breakTime + 1);
            } else if (direction === "down") {
                setBreakTime(breakTime - 1);
            }
        }
    }
    
    return(
        <div className='main-container'>
            <div>
                <Session currentSessionTime={sessionTime} increment={increment}/>
                <Break currentBreakTime={breakTime}/>
            </div>
            <div className="counter-container">
                <Counter />
            </div>
        </div>
    );
};

export default MainContainer;
