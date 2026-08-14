import Link from "next/link";
import BookmarkButton from "../../../../components/BookmarkButton";
import Navbar from "../../../../components/Navbar";
export default async function VersesPage({
  params,
}: {
  params: Promise<{ id: string; range: string }>;
}) {
  const { id, range } = await params;
  const [start, end] = range.split("-").map(Number);

  const chapterResponse = await fetch(
    `https://vedicscriptures.github.io/chapter/${id}`,
  );

  const apiChapter = await chapterResponse.json();
  const totalVerses = apiChapter.verses_count;
  const verses=await Promise.all(Array.from({length:end-start+1},(_,index)=>start+index)
  .map(async(verseNumber)=>{
    const response = await fetch(
      `https://vedicscriptures.github.io/slok/${id}/${verseNumber}`
    );
    if(!response.ok){
      throw new Error(`Failed to fetch verse ${verseNumber}`);
    }
    return response.json();
  })
);


  const previousStart = Math.max(1, start - 10);
  const previousEnd = start - 1;

  const nextStart = end + 1;
  const nextEnd = Math.min(end + 10, totalVerses);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar/>
      <section className="mx-auto max-w-4xl mt-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">Chapter {id}</h1>
        <h2 className="mt-2 text-xl text-gray-600 text-center ">
          Verse {start}-{end}
        </h2>
        {verses.map((verse) => (
          <div key={verse.verse} className=" p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">Verse {verse.verse}</h3>
            <p className="mt-5 font-medium text-gray-500">{verse.slok}</p>
            <p className="mt-2 font-normal">{verse.adi.et}</p>
            <BookmarkButton chapter={id} verse={verse.verse} slok={verse.slok} translation={verse.adi.et} />
          </div>
        ))}
      </section>
      <section>
        <div className="flex items-center justify-between pt-6">
          {start > 1 ? (
            <Link
              href={`/chapters/${id}/verses/${previousStart}-${previousEnd}`}
              className="rounded-lg border px-4 py-2 hover:bg-gray-100"
            >
              Previous
            </Link>
          ) : (
            <div />
          )}
          {end < totalVerses ? (
            <Link
              href={`/chapters/${id}/verses/${nextStart}-${nextEnd}`}
              className="rounded-lg border px-4 py-2 hover:bg-gray-100"
            >
              Next
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </main>
  );
}
