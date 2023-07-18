'use client'

import PhoneNumberGame from "@/components/PhoneNumberGame/page";
import SingleGameModal from "@/components/SingleGameModal";
import { useState } from "react";

const PhoneNumber = () => {
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
    <PhoneNumberGame handleGameComplete={handleGamecomplete} />
  );
}
 
export default PhoneNumber;