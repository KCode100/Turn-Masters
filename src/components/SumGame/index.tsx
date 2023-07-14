/*
Code for this game needs to be improved. Do we need useStates and useEffects?
*/

'use client'
import { GameProps } from '@/types';
import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function getRandomThreeDigitNumber() {
  return Math.floor(Math.random() * 900) + 100;
}

function randomlyChooseBoolean() {
  return Math.random() < 0.5;
}

const NumbersPending = () => (
  <div className="flex items-center justify-between gap-8">
    <div className="h-10 bg-gray-300 dark:bg-gray-600 w-20"></div>
    <div className="h-10 bg-gray-300 dark:bg-gray-700 w-20"></div>
    <div className="h-10 bg-gray-300 dark:bg-gray-700 w-20"></div>
  </div>
)

const SumGame = ({handleGameComplete}: GameProps) => {
  const [number1, setNumber1] = useState<number | null>(null)
  const [number2, setNumber2] = useState<number | null>(null)
  const [isSumTrue, setIsSumTrue] = useState<boolean>(true)
  const [correctSum, setCorrectSum] = useState<number | null>(null)
  const [wrongSum, setWrongSum] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [gameComplete, setGameComplete] = useState<boolean>(false)

  useEffect(() => {
    if (!number1 && !number2) {
      setNumber1(getRandomThreeDigitNumber())
      setNumber2(getRandomThreeDigitNumber())
    }
    if (number1 && number2) {
      setIsSumTrue(randomlyChooseBoolean())
      setCorrectSum(number1 + number2)
      setWrongSum((number1 + number2) - 10)
      setLoading(false)
    }
  }, [number1, number2])

  const renderTime = ({ remainingTime }: any) => {
    if (remainingTime === 0) {
      handleGameComplete(0)
      setGameComplete(true)
    }
  
    return (
      <div>
        <div className='text-center text-sm'>Remaining</div>
        <div className={`${remainingTime <= 5 ? 'text-red-500' : ''} text-center text-4xl py-2`}>{remainingTime}</div>
        <div className='text-center text-sm'>seconds</div>
      </div>
    );
  };

  function handleAnswer(answer: boolean) {
    if (answer === isSumTrue) {
      handleGameComplete(100)
    } else {
      handleGameComplete(0)
    }
    setGameComplete(true)
  }
  
  console.log(isSumTrue);

  return ( 
    <div className="container px-4 py-12 flex flex-col items-center min-h-screen justify-between gap-8">
      <div className="flex items-center justify-center text-3xl font-mono bg-white p-4 rounded-md shadow-blue-50 shadow-md w-full text-center">
        {loading ? (
          <NumbersPending />
        ) : (
          `${number1} + ${number2} = ${isSumTrue ? correctSum : wrongSum}`
        )}
      </div>
      {!loading && !gameComplete && (
        <CountdownCircleTimer
          isPlaying
          duration={15}
          colors={['#004777', '#FF5555', '#FF0000']}
          colorsTime={[9, 5, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
      <div className="flex items-center justify-center gap-4 w-full">
        <button onClick={()=>handleAnswer(false)} className="w-full shadow-sm relative m-auto p-0.5 block overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 to-pink-600">
          <span className="relative block px-5 py-1.5 bg-white rounded-md">False</span>
        </button>
        <button onClick={()=>handleAnswer(true)} className="w-full shadow-sm relative m-auto p-0.5 block overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600">
          <span className="relative block px-5 py-1.5 bg-white rounded-md">True</span>
        </button>
      </div>
    </div>
  );
}
 
export default SumGame;