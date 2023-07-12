import { ModalProps } from "@/types";
import Link from "next/link";
import CountUp from 'react-countup';
import HighScores from "../HighScores";

const GameModal = ({ points, nextRoundData, handleClick, isFirstRound, isLastRound }: ModalProps) => {
  return ( 
    <>
      <div className="fixed top-0 left-0 right-0 z-50 p-4 min-h-screen max-h-full backdrop-blur-3xl flex items-center">
        <div className="grow relative bg-white rounded-lg shadow px-6 py-10 text-center w-full max-w-md m-auto">
          {!isFirstRound && (
            <h1 className="score-feature mb-8 text-xl font-mono text-gray-500 flex items-center justify-center gap-6">
              🎯💰 <span className="text-3xl"><CountUp duration={1} end={points?.newScore || 0} /></span> 💰🎯
            </h1>
          )}
          {!isLastRound && (
            <>
              <div className={!isFirstRound ? `fade-in` : ""}>
                <h2 className="mb-2 text-xs text-gray-500">Round {nextRoundData.index} Game rules</h2>
                <h2 className="mb-3 font-mono text-2xl">{nextRoundData.name}</h2>
                <p className="text-sm text-gray-500 pb-6">{nextRoundData.description}</p>
                {/* <button type="button" className="text-red-500 bg-white rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5">Quit</button> */}
              </div>
              <button onClick={() => handleClick()} type="button" className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm items-center px-5 py-3.5 text-center ml-2">
                {isFirstRound ? 'Start' : 'Next Round'}
              </button>
            </>
          )}
          {isLastRound && (
            <div className="fade-in text-left">
              <div className="text-lg pb-4">High Scores</div>
              <HighScores newScore={points?.newScore} />
              <Link href="/" className="relative w-full m-auto p-3 max-w-xs block overflow-hidden text-lg text-center mt-12 font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 text-white">Play Again</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GameModal;
