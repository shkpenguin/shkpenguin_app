import React, { useState, useEffect } from 'react';
import './Timer.css';

const WORK_DURATION = 25 * 60;
const BREAK_DURATION = 5 * 60;

const PomodoroTimer = ({ currentTask }) => {
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION); // Start with WORK_DURATION
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          const nextSession = isWorkSession ? BREAK_DURATION : WORK_DURATION;
          setIsWorkSession(!isWorkSession);
          setIsRunning(false);
          return nextSession;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isWorkSession]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(isWorkSession ? WORK_DURATION : BREAK_DURATION);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="timer-box">
      <h1 className="skibidi">Pomodoro Timer</h1>
      <h1 className="timer-title">
        {isWorkSession ? "Work Session" : "Break Session"}
      </h1>
      <p className="timer-time">{formatTime(timeLeft)}</p>
      <p className="current-task">Current Assignment: {currentTask}</p>
      <div className="timer-buttons">
        <button onClick={toggleTimer} className="start-btn">
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
