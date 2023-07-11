const GameModal = () => {
  return ( 
    <>
      <div className="fixed top-0 left-0 right-0 z-50 p-4 min-h-screen max-h-full backdrop-blur-3xl flex items-center">
        <div className="grow relative bg-white rounded-lg shadow px-6 py-10 text-center w-full max-w-md m-auto">
          <h3 className="mb-8 text-4xl font-normal text-gray-500">🎯👏 440 🎯👏</h3>
          {/* <button type="button" className="text-red-500 bg-white rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5">Quit</button> */}
          <button type="button" className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 font-medium rounded-lg text-sm items-center px-5 py-3.5 text-center ml-2">Next Round</button>
        </div>
      </div>
    </>
  );
}

export default GameModal;
