'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className='relative w-full text-left pl-2'>
        <h1 className='font-mono text-2xl mt-2'>Turn Masters</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded absolute right-0 top-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div className="z-10 w-full max-w-lg mt-4 items-stretch justify-between font-mono text-sm flex flex-col gap-4 ">
        <Link href="/single-player" className="block w-full p-6 bg-white border border-blue-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Single Player</h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">Compete for points over 4 rounds</p>
        </Link>
        <Link href="#" className="block w-full p-6 bg-white border border-blue-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Multi Player</h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">Coming Soon...</p>
        </Link>
        <Link href="/high-scores" className="block w-full p-6 bg-white border border-green-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">High Scores</h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">Scores are saved locally</p>
        </Link>
        <h2 className='pt-2'>Practice</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 place-content-star m-auto w-full">
          <Link href="/single-game/tower/" className='border border-grey-200 rounded-lg shadow p-4 text-center'>
            <h2 className='pb-2'>Tower Builder</h2>
            <img src="/tower-game.png" alt="" />
          </Link>
          <Link href="/single-game/time-guesser/" className='border border-grey-200 rounded-lg shadow p-4 text-center'>
            <h2 className='pb-2'>Time Guesser</h2>
            <img src="/time-guesser-game.png" alt="" />
          </Link>
          <Link href="/single-game/sum/" className='border border-grey-200 rounded-lg shadow p-4 text-center'>
            <h2 className='pb-2'>Sum Game</h2>
            <img src="/sum-game.png" alt="" />
          </Link>
          <Link href="/single-game/phone-number/" className='border border-grey-200 rounded-lg shadow p-4 text-center'>
            <h2 className='pb-2'>Phone Number Memory</h2>
            <img src="/phone-number-game.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="flex w-full items-end justify-center">
        <a
          className="ointer-events-none flex flex-col place-items-center p-8 lg:pointer-events-auto lg:p-0"
          href="https://bykivi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/bykivi-transparent.png" alt="Bykivi logo" width={100} />
          <p className='text-xs'>Bespoke Software Solutions</p>
        </a>
      </div>
    </main>
  )
}