"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

type Bookmark = {
  chapter: string;
  verse: number;
  slok: string;
  translation: string;
};

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");

    const data = saved ? JSON.parse(saved) : [];
    

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBookmarks(data);
  }, []);

  
  function removeBookmark(chapter: string, verse: number) {
    const updatedBookmarks = bookmarks.filter(
    (bookmark) =>
      !(bookmark.chapter === chapter && bookmark.verse === verse)
  );

  localStorage.setItem(
    "bookmarks",
    JSON.stringify(updatedBookmarks)
  );

  setBookmarks(updatedBookmarks);
   
  }
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar />
      <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-center">Bookmarked Verses</h1>

      {bookmarks.length === 0 ? (
        <p className="mt-8 text-center text-gray-500">
          No bookmarked verses yet.
        </p>
      ) : (
        <section className="mt-8 space-y-6">
          {bookmarks.map((bookmark) => (
            <div
              key={`${bookmark.chapter}-${bookmark.verse}`}
              className="rounded-lg border p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold">
                Chapter {bookmark.chapter} - Verse {bookmark.verse}
              </h2>

              <p className="mt-5 font-medium text-gray-500">{bookmark.slok}</p>

              <p className="mt-3">{bookmark.translation}</p>
              <button onClick={() => removeBookmark(bookmark.chapter, bookmark.verse)} className="mt-4 rounded-lg border px-4 py-2 hover:bg-gray-100">
                Remove
              </button>
            </div>
          ))}
        </section>
      )}
      </section>
    </main>
  );
}
