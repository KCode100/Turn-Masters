/*
Inspiration: https://www.1001games.com/skill/stack-tower
*/

'use client'
import GameModal from "@/components/GameModal";
import TimeGuessGame from "@/components/TimeGuessGame";
import TowerGame from "@/components/TowerGame";
import { Game } from "@/types";
import { useState } from "react";

const GAMES: Game[] = [
  {
    name: 'Tower Stack',
    component: TowerGame,
    description: "Stack the blocks to a tower. The higher and the straighter you stack the blocks, the more points you earn. Sloppy placement will cut off the blocks and making them smaller and smaller until it gets impossible to add more blocks."
  },
  {
    name: 'Countdown',
    component: TimeGuessGame,
    description: "10 Second Stopwatch Game is a test of your body's internal clock. Without any time keeping sources, stop the clock as close to 10.000 seconds as possible without going over."
  }
];

const SinglePlayer = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState<number>(-1);
  const [modalOpen, setModalOpen] = useState(true)
  const [score, setScore] = useState(0)
  const [newScore, setNewScore] = useState(0)
  const isFirstRound = currentGameIndex < 0
  const isLastRound = currentGameIndex >= GAMES.length -1

  function handleGameComplete(points: number) {
    setModalOpen(true)
    setNewScore(score + points)
  };

  function nextGame() {
    setModalOpen(false)
    setCurrentGameIndex((prevIndex) => prevIndex + 1);
    setScore(newScore)
  }

  const CurrentGame = GAMES[currentGameIndex]?.component;

  return (
    <div>
      {modalOpen && (
        <GameModal 
          points={{prevScore: score, newScore: newScore}}
          handleClick={nextGame}
          isFirstRound={isFirstRound}
          isLastRound={isLastRound}
          nextRoundData={
            { 
              index: currentGameIndex + 2,
              name: GAMES[currentGameIndex + 1]?.name,
              description: GAMES[currentGameIndex + 1]?.description
            }
          }
        />
      )}
      {CurrentGame ? (
        <>
          <CurrentGame handleGameComplete={handleGameComplete} />
        </>
      ) : (
        <p>All games completed!</p>
      )}
    </div>
  );
};

export default SinglePlayer;