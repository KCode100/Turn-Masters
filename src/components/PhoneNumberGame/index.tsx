'use client'

import { GameProps } from "@/types";
import { useEffect, useState } from "react";

function generateRandomNumber():string {
  let result = "07"

  for (let i = 0; i < 9; i++) {
    const randomNumber = Math.floor(Math.random() * 10); // Random number between 0 and 9
    result+=randomNumber.toString()
  }

  return result;
}

const PhoneNumberGame = ({handleGameComplete}: GameProps) => {
  const [numbersClicked, setNumbersClicked] = useState<string>("")
  const [numberToGuess, setNumberToGuess] = useState<string>("")
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  function handleClick(btnClicked: string) {
    setNumbersClicked(prev => prev += btnClicked)
  }

  function checkAnswer() {
    const score: number = numbersClicked === numberToGuess ? 150 : 0
    handleGameComplete(score)
  }

  function handleDelete() {
    const removeLastDigit = numbersClicked.slice(0, -1);
    setNumbersClicked(removeLastDigit)
  }

  function toggleNumberDialog() {
    setDialogOpen(!dialogOpen)
  }

  useEffect(() => {
    setNumberToGuess(generateRandomNumber())
    toggleNumberDialog()
  }, [])

  console.log(numberToGuess);

  if(dialogOpen) {
    return (
      <div className="flex justify-center items-center p-4 h-screen">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-sm">
          <div className="p-6 text-center">
            <h3 className="mb-5 text-xl font-mono">{numberToGuess}</h3>
            <h4>Take the time you need to memorize it and start when you are ready</h4>
            <button type="button" onClick={toggleNumberDialog} className="mt-6 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Go!</button>
          </div>
        </div>
      </div>
    )
  }

  return ( 
    <div className="w-full">
      <div className="relative max-w-xs m-auto overflow-hidden">
        <img className="block m-auto max-h-screen" src="/phone-keyboard.png" alt="phone keyboard" />
        <div className="absolute top-[25%] left-[50%] translate-x-[-50%] text-3xl text-gray-700 overflow-hidden max-w-[260px]">
          {numbersClicked}
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2.5 place-content-start absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-38%] opacity-40 w-[60%] m-auto" style={{aspectRatio: "200/320"}}>
          <button className="m-auto w-full rounded-full aspect-square" onClick={()=>handleClick("1")}></button>
          <button className="m-auto w-full rounded-full aspect-square" onClick={()=>handleClick("2")}></button>
          <button className="m-auto w-full rounded-full aspect-square" onClick={()=>handleClick("3")}></button>
          <button className="m-auto w-full rounded-full aspect-square" onClick={()=>handleClick("4")}></button>
          <button className="m-auto w-full rounded-full aspect-square" onClick={()=>handleClick("5")}></button>
          <button className="m-auto w-full rounded-full aspect-square" onClick={()=>handleClick("6")}></button>
          <button className="m-auto w-full rounded-full aspect-square" onClick={()=>handleClick("7")}></button>
          <button className="m-auto w-full rounded-full aspect-square" onClick={()=>handleClick("8")}></button>
          <button className="m-auto w-full rounded-full aspect-square" onClick={()=>handleClick("9")}></button>
        </div>
        <div className="absolute bottom-[30%] left-[50%] translate-x-[-50%] opacity-40 w-[70%] m-auto">
          <button className="block m-auto w-1/4 rounded-full aspect-square" onClick={()=>handleClick("0")}></button>
        </div>
        <div className="z-20 absolute bottom-[20%] left-[50%] translate-x-[-50%] opacity-40 w-[70%] m-auto">
          <button className="block m-auto w-1/4 rounded-full aspect-square" onClick={checkAnswer}></button>
        </div>
        <div className="z-30 absolute bottom-[20%] left-[73%] translate-x-[-50%] opacity-40 w-[15%] m-auto aspect-square">
          <button className="block m-auto w-full rounded-full aspect-square" onClick={handleDelete}></button>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberGame;