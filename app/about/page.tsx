import Image from 'next/image'
import { Inter } from 'next/font/google'

import Form from '@/components/Form';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-lg">About Page</h1>
      {/* <p>
        <button className="plausible-event-name=Signup">Signup</button>
      </p> */}
      <Form />
    </main>
  )
}
