'use client'
import HighScores from "@/components/HighScores";
import Link from "next/link";

const HighScoresPage = () => {
  return ( 
    <div className="container max-w-md m-auto p-4">
      <div className="relative">
        <Link href="/" className="absolute left-0 top-0 p-2">
          <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
        <h1 className="text-center text-lg font-mono">High Scores</h1>
      </div>
      <div className="bg-white shadow-lg p-6 mt-8">
        <HighScores />
      </div>
    </div>
  );
}
 
export default HighScoresPage;