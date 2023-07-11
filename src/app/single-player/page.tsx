/*
Stack the blocks to a tower. 
The higher and the straighter you stack the blocks, the more points you earn. 
If you manage to place a block exactly on the one before it will not lose size. 
Sloppy placement on the other hand will cut off the blocks and making them smaller and smaller until it gets impossible to add more blocks.

Inspiration: https://www.1001games.com/skill/stack-tower
*/

'use client'
import GameModal from "@/components/GameModal";
import TimeGuessGame from "@/components/TimeGuessGame";
import TowerGame from "@/components/TowerGame";
import { useState } from "react";

const GAMES = [TowerGame, TimeGuessGame];

const SinglePlayer = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false)

  function handleGameComplete(msg:string) {
    // setCurrentGameIndex((prevIndex) => prevIndex + 1);
    setModalOpen(true)
    console.log(msg);
  };

  const CurrentGame = GAMES[currentGameIndex];

  return (
    <div>
      {modalOpen && <GameModal />}
      {CurrentGame ? (
        <>
          <h2>{`Round ${currentGameIndex + 1}`} {CurrentGame.name}</h2>
          <CurrentGame handleGameComplete={handleGameComplete} />
        </>
      ) : (
        <p>All games completed!</p>
      )}
    </div>
  );
};

export default SinglePlayer;