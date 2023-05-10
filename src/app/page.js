import Image from 'next/image'
import SignUp from './signup/page.jsx'

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-10 pb-16 bg-[#E5EEFF]">
      <SignUp/>
    </main>
  )
}
