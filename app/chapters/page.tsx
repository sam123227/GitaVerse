import Navbar from '../components/Navbar';
import Link from 'next/link';
const chapters = [
  { id: 1, title: "Arjuna Visada Yoga" },
  { id: 2, title: "Sankhya Yoga" },
  { id: 3, title: "Karma Yoga" },
  { id: 4, title: "Jnana Karma Sanyasa Yoga" },
  { id: 5, title: "Karma Sanyasa Yoga" },
  { id: 6, title: "Dhyana Yoga" },
  { id: 7, title: "Jnana Vijnana Yoga" },
  { id: 8, title: "Aksara Brahma Yoga" },
  { id: 9, title: "Raja Vidya Raja Guhya Yoga" },
  { id: 10, title: "Vibhuti Yoga" },
  { id: 11, title: "Visvarupa Darsana Yoga" },
  { id: 12, title: "Bhakti Yoga" },
  { id: 13, title: "Ksetra Ksetrajna Vibhaga Yoga" },
  { id: 14, title: "Gunatraya Vibhaga Yoga" },
  { id: 15, title: "Purushottama Yoga" },
  { id: 16, title: "Daivasura Sampad Vibhaga Yoga" },
  { id: 17, title: "Sraddhatraya Vibhaga Yoga" },
  { id: 18, title: "Moksha Sanyasa Yoga" },
];

export default function Chapters(){
    return(
        <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
            <Navbar/>
            <h1 className="text-2xl font-bold text-center mt-4">Bhagavad Gita Chapters</h1>
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((chapter)=>(
                <Link key={chapter.id} href={`/chapters/${chapter.id}`} className="rounded-lg border p-6 shadow-sm">
                    <h2 className="text-xl font-bold">Chapter {chapter.id} </h2>
                    <p className="mt-2">{chapter.title}</p>
                </Link>
            ))}
            </div>
        </main>

    );
}