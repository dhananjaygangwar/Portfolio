import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google'

import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { ScrollReveal } from './components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Dhananjay Gangwar — Developer',
  description: 'Full Stack Developer. Next.js, Node.js, C++ simulations.',
}

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${bebasNeue.className} ${jetBrainsMono.className}`}
      >
        <Cursor />
        <ScrollReveal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}