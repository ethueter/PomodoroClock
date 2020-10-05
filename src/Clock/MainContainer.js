import React, {useState} from 'react';
import Session from './Session';
import Break from "./Break";
import Counter from "./Counter";


const MainContainer = () => {
    const [sessionTime, setSessionTime] = useState(35);
    const [breakTime, setBreakTime] = useState(10);
    const [onBreak, setOnBreak] = useState(false);
    const [display, setDisplay] = useState(sessionTime);
    const [sec, setSec] = useState(20);
    const [isRunning, setIsRunning] = useState(false);
    let counterID;

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

    const reset = (timeType) => {
        if (timeType === "session"){
            setSessionTime(35);
        } else if (timeType === "break"){
            setBreakTime(10);
        }
    }

    const flipSession = () => {
        setOnBreak(!onBreak);
        onBreak ? setDisplay(breakTime) : setDisplay(sessionTime)
    }

    const startStop = () => {
        
        if(isRunning){
            console.log("canceling timer");
            clearInterval(counterID);
            setIsRunning(test => !test);
            counterID = null;
        } else {
            
            counterID = setInterval(timer, 1000);
            setIsRunning(test => !test);
        }
         
        
        
    }

    const timer = () => {
        if(sec > 0){
            console.log("seconds", sec)
            setSec(sec => sec - 1);
        } else if ( sec === 0){
            if(display === 0) {
                /// flip session and restart
                flipSession();
            } else if ( display > 0){
                setDisplay(display - 1);
            }
        }

    }
    
    return (
      <div className="main-container">
        <div>
          <Session
            currentSessionTime={sessionTime}
            increment={increment}
            reset={reset}
          />
          <Break
            currentBreakTime={breakTime}
            increment={increment}
            reset={reset}
          />
        </div>
        
          <div className="counter-container">
            <Counter 
                displayTime={display} 
                displaySec={sec} 
                running={isRunning} 
                startStop={startStop} 
                flip={flipSession} />
          </div>
        
      </div>
    );
};

export default MainContainer;
