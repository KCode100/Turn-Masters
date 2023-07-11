import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Turn Masters',
  description: 'Engage in an exhilarating head-to-head battle of wit and skill in this thrilling 2-player mobile game. Test your knowledge and strategy across various game modes, from math challenges to rock-paper-scissors showdowns. With each player taking turns to answer questions, the intensity builds as you compete for points over 5 rounds. Will you emerge as the ultimate victor in this exciting duel of intellect and decision-making?',
  themeColor: '#f9f9f9',
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
    </html>
  )
}
