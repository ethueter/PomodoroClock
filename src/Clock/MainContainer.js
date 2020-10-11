import React, {useState} from 'react';
import Session from './Session';
import Break from "./Break";
import Counter from "./Counter";
import useinterval from "react-useinterval";

const MainContainer = () => {
    const [sessionTime, setSessionTime] = useState(1);
    const [breakTime, setBreakTime] = useState(10);
    const [onBreak, setOnBreak] = useState(true);
    const [display, setDisplay] = useState(sessionTime);
    const [sec, setSec] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    
    

    const increment = (direction, timeType) => {
        if(timeType === "session"){
            if(direction === "up"){
                if(sessionTime < 90){
                    setSessionTime(sessionTime + 1);
                }
            } else if (direction === "down"){
                if(sessionTime > 1){
                    setSessionTime(sessionTime - 1);
                }
            }
        } else if (timeType === "break"){
            if (direction === "up") {
                if(breakTime < 45){
                    setBreakTime(breakTime + 1);
                } 
            } else if (direction === "down") {
                if(breakTime > 1){
                    setBreakTime(breakTime - 1);
                }
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

    const resetCountdown = () => {
        setDisplay(sessionTime);
        setSec(0);
        setOnBreak(false);
        setIsRunning(false);
    }

    const flipSession = () => {
        
        onBreak ? setDisplay(breakTime) : setDisplay(sessionTime)
        soundAlarm();
    }

    const startTimer = () => {
        setIsRunning(test => !test);     
    }

    const stopTimer = () => {
        setIsRunning(test => !test);
    }

    const leadingZeros = (num) => {
        if(num === 60 || num === 0){
            return "00";
        } else if (num < 10){
            return "0"+num;
        } else {
            return num;
        }
    }

    const timer = () => {
        console.log("minutes", display, "seconds", sec);
        if ( sec === 0 && display === 0){
            setOnBreak(test => !test);
            flipSession();
        } else if (sec === 0 && display !== 0){
            setDisplay(min => min-1);
            setSec(59);
        }  else if (sec > 0) {
            setSec(sec => sec - 1);
        } 

    }

    const soundAlarm = () => {
        console.log("testing sound");
        const audioEl = document.getElementsByClassName("alarm")[0];
        console.log(audioEl);
        audioEl.play();
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
                flip={flipSession}
                zero={leadingZeros}
                reset={resetCountdown} />
          </div>
        
      </div>
    );
};

export default MainContainer;
