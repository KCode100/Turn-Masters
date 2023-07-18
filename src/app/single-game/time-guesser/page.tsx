'use client'

import SingleGameModal from "@/components/SingleGameModal";
import TimeGuessGame from "@/components/TimeGuessGame";
import { useState } from "react";

const TimeGuesser = () => {
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
    <TimeGuessGame handleGameComplete={handleGamecomplete} />
  );
}
 
export default TimeGuesser;