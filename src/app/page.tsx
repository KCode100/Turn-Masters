'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className='relative w-full text-center'>
        <h1 className='font-mono text-2xl mt-2'>Turn Masters</h1>
        {/* <img className="w-8 h-8 rounded absolute right-0 top-2" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Default avatar" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded absolute right-0 top-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div className="z-10 w-full max-w-5xl items-stretch justify-between font-mono text-sm flex flex-col gap-4 ">
        <Link href="/single-player" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Single Player</h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">Compete for points over 5 rounds</p>
        </Link>
        <Link href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Multi Player</h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">Coming Soon...</p>
        </Link>
        <Link href="/high-scores" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">High Scores</h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">Scores are saved locally</p>
        </Link>
        {/* <Link href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Settings</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Username, profile</p>
        </Link> */}
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