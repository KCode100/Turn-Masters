'use client'

import { useEffect, useState } from "react";

function generateRandomNumber():string {
  let result = "07"

  for (let i = 0; i < 9; i++) {
    const randomNumber = Math.floor(Math.random() * 10); // Random number between 0 and 9
    result+=randomNumber.toString()
  }

  return result;
}

const PhoneNumberGame = () => {
  const [numbersClicked, setNumbersClicked] = useState<string>("")
  const [numberToGuess, setNumberToGuess] = useState<string>(generateRandomNumber())

  function handleClick(btnClicked: string) {
    setNumbersClicked(prev => prev += btnClicked)
  }

  console.log(numberToGuess);
  console.log(numbersClicked);

  function checkAnswer() {
    console.log(numbersClicked === numberToGuess);
  }
  

  return ( 
    <div className="w-full">
      <button onClick={checkAnswer}>Check</button>
      <div className="relative max-w-xs m-auto">
        <img className="block m-auto max-h-screen" src="/phone-keyboard.png" alt="phone keyboard" />
        <div className="grid grid-cols-3 gap-x-4 gap-y-2.5 place-content-start absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-38%] opacity-40 w-[60%] bg-green-200 m-auto" style={{aspectRatio: "200/320"}}>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("1")}></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("2")}></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("3")}></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("4")}></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("5")}></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("6")}></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("7")}></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("8")}></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("9")}></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square" onClick={()=>handleClick("0")}></div>
        </div>
      </div>
    </div>
  );
}
//  556 : 1102
export default PhoneNumberGame;