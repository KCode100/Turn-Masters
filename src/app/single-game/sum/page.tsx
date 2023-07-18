'use client'

import SingleGameModal from "@/components/SingleGameModal";
import SumGame from "@/components/SumGame";
import { useState } from "react";

const Sum = () => {
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
    <SumGame handleGameComplete={handleGamecomplete} />
  );
}
 
export default Sum;