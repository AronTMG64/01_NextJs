import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    <h1>Welcome to a NextJs Home page</h1>
      <div>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </main>
  )
}
