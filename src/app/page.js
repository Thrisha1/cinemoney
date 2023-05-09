import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold text-center text-green-500">
        Welcome to <a href="#">dcfvgbhNext.js!</a>
      </h1>

      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          href="https://nextjs.org/docs"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
          <p className="mt-4 text-xl">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Learn &rarr;</h3>
          <p className="mt-4 text-xl">
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </a>
      </div>
    </main>
  )
}
