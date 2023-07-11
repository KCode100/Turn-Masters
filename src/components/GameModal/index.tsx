import { ModalProps } from "@/types";

const GameModal = ({ points, nextRoundData, handleClick, isFirstRound }: ModalProps) => {
  return ( 
    <>
      <div className="fixed top-0 left-0 right-0 z-50 p-4 min-h-screen max-h-full backdrop-blur-md flex items-center">
        <div className="grow relative bg-white rounded-lg shadow px-6 py-10 text-center w-full max-w-md m-auto">
          {!isFirstRound && (
            <h1 className="score-feature mb-8 text-3xl font-mono text-gray-500 flex items-center justify-center gap-4">🎯👏 <span className="text-6xl">440</span> 🎯👏</h1>
          )}
          <div className={!isFirstRound ? `fade-in` : ""}>
            <h2 className="mb-2 text-sm text-gray-500">Round {nextRoundData.index}</h2>
            <h2 className="mb-6 font-mono text-3xl">{nextRoundData.name}</h2>
            <p className="text-sm text-gray-500 pb-6">ℹ️ {nextRoundData.description}</p>
            {/* <button type="button" className="text-red-500 bg-white rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5">Quit</button> */}
          </div>
          <button onClick={() => handleClick()} type="button" className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm items-center px-5 py-3.5 text-center ml-2">
            {isFirstRound ? 'Start' : 'Next Round'}
          </button>
        </div>
      </div>
    </>
  );
}

export default GameModal;
