import Navbar from './components/Navbar';
import Link from 'next/link';
export default function Home(){
  return(
    <main className="bg-white text-black dark:bg-gray-900 dark:text-white">
     
      <Navbar />

      <section className="px-4 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Discover the wisdom of Bhagavad Gita</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">Explore the teachings of Bhagavad Gita</p>
      <Link href="/chapters" className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 text-white font-medium">Explore Chapters</Link>
      </section>
     <section className="px-4 py-12">
  <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-10">
    <h2 className="text-center text-2xl font-bold md:text-3xl">
      About the Bhagavad Gita
    </h2>

    <p className="mt-6 text-justify leading-7 text-gray-600 dark:text-gray-300">
      The Bhagavad Gita is a 700-verse Hindu scripture from the epic
      Mahabharata, presenting a dialogue between Prince Arjuna and Lord
      Krishna. It teaches dharma (duty), karma (action without attachment),
      and bhakti (devotion) to guide people through moral dilemmas occurring
      in life.
    </p>
  </div>
</section>
      <section className="px-4 py-12">
  <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-xl font-bold">Chapters</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Explore all 18 chapters of the Bhagavad Gita.
      </p>
    </div>

    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-xl font-bold">Verses</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Read individual verses and discover their teachings.
      </p>
    </div>

    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h3 className="text-xl font-bold">Bookmarks</h3>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Save meaningful verses for later.
      </p>
    </div>
  </div>
</section>
</main>
  );
}