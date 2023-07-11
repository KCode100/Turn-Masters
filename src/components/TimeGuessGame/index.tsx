'use client'
import React, { useState, useEffect } from 'react';

const TimeGuessGame: React.FC = () => {
  const [playPressed, setPlayPressed] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [stopTime, setStopTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (playPressed) {
      setStartTime(Date.now());
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [playPressed]);

  const handlePlayClick = () => {
    setPlayPressed(true);
  };

  const handleStopClick = () => {
    if (playPressed) {
      setStopTime(Date.now());
      setPlayPressed(false);
    }
  };

  const actualTime = 10000; // 10 seconds in milliseconds

  return (
    <div>
      <button onClick={handlePlayClick} disabled={playPressed}>
        Play
      </button>
      <button onClick={handleStopClick} disabled={!playPressed}>
        Stop
      </button>
      {stopTime > 0 && (
        <div>
          <p>Actual Time: {actualTime / 1000} seconds</p>
          <p>Your Time: {elapsedTime / 1000} seconds</p>
        </div>
      )}
    </div>
  );
};

export default TimeGuessGame;
