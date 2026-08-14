import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { notFound } from "next/navigation";
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
export default async function ChapterDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `https://vedicscriptures.github.io/chapter/${id}`,
  );
  const apiChapter = await response.json();

  const chapter = chapters.find((chapter) => chapter.id === Number(id));
  const chapterid = Number(id);
  if (!Number.isInteger(chapterid) || chapterid < 1 || chapterid > 18) {
    notFound();
  }
  const ranges = [];
  for (let start = 1; start <= apiChapter.verses_count; start += 10) {
    const end = Math.min(start + 9, apiChapter.verses_count);
    ranges.push({ start, end });
  }
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar/>
      <h1 className="text-2xl font-bold text-center">Chapter {id}</h1>
      <h2 className="text-xl font-semibold text-center mt-2">
        {chapter?.title}
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {ranges.map((range) => (
          <Link
            key={range.start}
            href={`/chapters/${id}/verses/${range.start}-${range.end}`}
            className="rounded-lg border p-6 hover:bg-gray-100"
          >
            <p className="text-lg font-semibold">
              Verses {range.start}-{range.end}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
