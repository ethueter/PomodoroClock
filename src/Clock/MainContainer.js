import React, {useState} from 'react';
import Session from './Session';
import Break from "./Break";
import Counter from "./Counter";
import useinterval from "react-useinterval";

const MainContainer = () => {
    const [sessionTime, setSessionTime] = useState(35);
    const [breakTime, setBreakTime] = useState(10);
    const [onBreak, setOnBreak] = useState(false);
    const [display, setDisplay] = useState(sessionTime);
    const [sec, setSec] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
    
    

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

    const startTimer = () => {
        setSec(5);
        
        setIsRunning(test => !test);   
        
    }

    const stopTimer = () => {
        console.log("stop");
        
        setIsRunning(test => !test);
    }

    const leadingZeros = (num) => {
        if(num === 60 || num === 0){
            return "00";
        } else if (num < 10){
            return "0"+num;
        }
    }

    const timer = () => {
        console.log("minutes", display, "seconds", sec);
        if ( sec === 0 && display === 0){
            console.log("test 2")
            flipSession();
        } else if (sec === 0 && display !== 0){
            setDisplay(min => min-1);
            setSec(60);
        }  else if (sec > 0) {
            setSec(sec => sec - 1);
            console.log("test 1", sec)
        } 

    }
    
    useinterval(timer, isRunning ? 1000:null);

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
                start={startTimer}
                stop={stopTimer} 
                flip={flipSession} />
          </div>
        
      </div>
    );
};

export default MainContainer;
