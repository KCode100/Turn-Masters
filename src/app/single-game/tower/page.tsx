'use client'

import SingleGameModal from "@/components/SingleGameModal";
import TowerGame from "@/components/TowerGame";
import { useState } from "react";

const Tower = () => {
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  function handleGamecomplete(value: number) {
    setScore(value)
    setGameOver(true)
  }

  function handleCloseModal() {
    setGameOver(false)
  }

  if (gameOver) return (
    <SingleGameModal handleCloseModal={handleCloseModal} score={score} />
  )
  
  return ( 
    <TowerGame handleGameComplete={handleGamecomplete} />
  );
}
 
export default Tower;