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
  const [score, setScore] = useState<number | string>(0)

  function handleClick(btnClicked: string) {
    setNumbersClicked(prev => prev += btnClicked)
  }

  console.log(numberToGuess);
  console.log(numbersClicked);

  function checkAnswer() {
    setScore(numbersClicked === numberToGuess ? 'Correct! 100 points!' : 'Nope, sorry.')
  }

  function handleDelete() {
    const removeLastDigit = numbersClicked.slice(0, -1);
    setNumbersClicked(removeLastDigit)
  }

  useEffect(() => {
    setNumberToGuess(generateRandomNumber())
  }, [])

  return ( 
    <div className="w-full">
      <h1>{numberToGuess}</h1>
      <button onClick={checkAnswer} className="border-gray-500 border rounded-lg p-1">Check</button>
      {score}
      <div className="relative max-w-xs m-auto">
        <img className="block m-auto max-h-screen" src="/phone-keyboard.png" alt="phone keyboard" />
        <div className="grid grid-cols-3 gap-x-4 gap-y-2.5 place-content-start absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-38%] opacity-40 w-[60%] bg-green-200 m-auto" style={{aspectRatio: "200/320"}}>
          <button className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("1")}></button>
          <button className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("2")}></button>
          <button className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("3")}></button>
          <button className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("4")}></button>
          <button className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("5")}></button>
          <button className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("6")}></button>
          <button className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("7")}></button>
          <button className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("8")}></button>
          <button className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("9")}></button>
        </div>
        <div className="absolute bottom-[30%] left-[50%] translate-x-[-50%] opacity-40 w-[70%] bg-green-200 m-auto">
          <button className="block m-auto bg-red-500 w-1/4 rounded-full aspect-square" onClick={()=>handleClick("0")}></button>
        </div>
        <div className="absolute bottom-[20%] left-[50%] translate-x-[-50%] opacity-40 w-[70%] bg-green-200 m-auto">
          <button className="block m-auto bg-red-500 w-1/4 rounded-full aspect-square" onClick={checkAnswer}></button>
        </div>
        <div className="absolute bottom-[20%] left-[75%] translate-x-[-50%] opacity-40 w-[70%] bg-green-200 m-auto">
          <button className="block m-auto bg-red-500 w-1/4 rounded-full aspect-square" onClick={handleDelete}></button>
        </div>
      </div>
    </div>
  );
}
//  556 : 1102
export default PhoneNumberGame;