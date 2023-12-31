/*

10 Second Stopwatch Game is a test of your body's internal clock.

Objective:
With your eyes closed, stop the clock as close to 10.000 seconds as possible without going over. (The Price is Right rules)

Rules:
Player must not be able to view or feel any time keeping source. (Basically, player should be blindfolded)

*/

'use client'
import { useState, useEffect } from 'react';
import { GameProps } from '@/types';

const TimeGuessGame = ({handleGameComplete}: GameProps) => {
  const [time, setTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)
  const SECONDS_TO_GUESS = 10

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isPlaying) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  function handleStartTimer() {
    setIsPlaying(true)
  }

  function handleEndTimer() {
    setIsPlaying(false)
    setGameComplete(true)
    const score = calculateScore(time)
    setTimeout(() => {
      handleGameComplete(score)
    }, 1800);
  }

  function calculateScore(time: number): number {
    if (time > 13000 || time < 7000) {
      return 0;
    }
    const target = SECONDS_TO_GUESS * 1000
    var closeness = Math.abs(time - target);
    var calculatedScore = 100 - Math.floor(closeness / 100); // Higher score for closer values
  
    return calculatedScore
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-32">
      <div className={`text-center text-6xl font-mono ${gameComplete ? 'mb-0' : 'mb-12'}`}>
        {isPlaying ? (
          <span>##.##</span>
        ) : (
          <>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </>
        )}
        {gameComplete && (
          <p className="slide-up text-blue-500 block text-2xl text-center pt-4">{Math.abs((SECONDS_TO_GUESS - (time / 1000))).toFixed(2)} seconds out!</p>
        )}
      </div>
      <div className='w-full'>
        <button
          onClick={ isPlaying ? handleEndTimer : handleStartTimer }
          className="relative w-full m-auto p-0.5 max-w-xs block overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-purple-500"
          disabled={gameComplete}
        >
          <span className="relative block px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
            { (isPlaying || gameComplete) ? 'STOP' : 'START 10s TIMER' }
          </span>
        </button>
      </div>
    </div>
  );
};

export default TimeGuessGame;