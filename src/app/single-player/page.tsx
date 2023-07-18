/*
Inspiration: https://www.1001games.com/skill/stack-tower
*/

'use client'
import GameModal from "@/components/GameModal";
import PhoneNumberGame from "@/components/PhoneNumberGame/page";
import SumGame from "@/components/SumGame";
import TimeGuessGame from "@/components/TimeGuessGame";
import TowerGame from "@/components/TowerGame";
import { Game } from "@/types";
import { useState } from "react";

const GAMES: Game[] = [
  {
    name: 'Tower Stack',
    component: TowerGame,
    description: "Stack as many blocks as you can into a straight tower."
  },
  {
    name: 'Countdown',
    component: TimeGuessGame,
    description: "Stop the clock as close to 10.00 seconds as possible."
  },
  {
    name: 'Math Game',
    component: SumGame,
    description: "You have 15 seconds to answer a maths question."
  },
  {
    name: 'Phone Number',
    component: PhoneNumberGame,
    description: "Memorize a phone number. When you're done dialing the number, click on the call button to confirm."
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
    console.log('to add: ', points);
    console.log('total', score + points);
    
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