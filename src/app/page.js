import Image from 'next/image'
import SignUp from './signup/page.jsx'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignUp/>
    </main>
  )
}
