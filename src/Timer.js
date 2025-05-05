import React, { useState } from 'react';
import './Timer.css'; // スタイリング用のCSSをインポート

const Timer = ({ initialTime = 10 }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = async () => {
    if (isRunning) return;
    setIsRunning(true);

    for (let i = time; i > 0; i--) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTime((prevTime) => prevTime - 1);
    }

    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <div className="timer-clock">
        <span className="timer-time">{formatTime(time)}</span>
      </div>
      <div className="timer-controls">
        <button className="timer-button" onClick={startTimer} disabled={isRunning}>
          スタート
        </button>
        <button className="timer-button" onClick={resetTimer} disabled={isRunning}>
          リセット
        </button>
      </div>
    </div>
  );
};

export default Timer;