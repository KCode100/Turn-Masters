import Link from "next/link";

type Props = {
  handleCloseModal: ()=> void
  score: number
}

const SingleGameModal = ({handleCloseModal, score}: Props) => {
  return ( 
    <div className="fixed top-0 left-0 right-0 z-50 p-4 min-h-screen max-h-full backdrop-blur-3xl flex items-center">
      <div className="grow relative bg-white rounded-lg shadow px-6 py-10 text-center w-full max-w-md m-auto">
        <h1 className="mb-8 text-xl font-mono text-gray-500 flex items-center justify-center gap-6">
          🎯💰 <span className="text-3xl">{score}</span> 💰🎯
        </h1>
        <div className="flex">
          <Link href="/" className="border-gray-500 border font-medium rounded-lg text-sm items-center px-5 py-3.5 text-center ml-2">
            Home
          </Link>
          <button onClick={handleCloseModal} type="button" className="w-full text-white bg-gradient-to-br from-blue-500 to-purple-500 font-medium rounded-lg text-sm items-center px-5 py-3.5 text-center ml-2">
            Play again
          </button>
        </div>
      </div>
    </div>

  );
}
 
export default SingleGameModal;