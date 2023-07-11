'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className='relative w-full text-center'>
        <h1 className='font-mono text-2xl mt-2'>Turn Masters</h1>
        <img className="w-8 h-8 rounded absolute right-0 top-2" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Default avatar" />
      </div>
      <div className="z-10 w-full max-w-5xl items-stretch justify-between font-mono text-sm flex flex-col gap-4 ">
        <Link href="/single-player" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Single Player</h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">High Score: 844</p>
        </Link>
        <Link href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Multi Player</h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">14 players online now</p>
        </Link>
        <Link href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">High Scores</h5>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-400">Username, profile</p>
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
          {/* By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          /> */}
          <img src="/bykivi-transparent.png" alt="Bykivi logo" width={100} />
          <p className='text-xs'>Bespoke Software Solutions</p>
        </a>
      </div>
    </main>
  )
}
