"use client";
type BookmarkButtonProps = {
    chapter:string;
    verse:number;
    slok:string;
    translation:string;
};
import {useState} from "react";
export default function BookmarkButton({chapter,verse,slok,translation}:BookmarkButtonProps){
   const [bookmarked, setBookmarked] = useState(() => {
    const saved = localStorage.getItem("bookmarks");

    const bookmarks = saved ? JSON.parse(saved) : [];

    return bookmarks.some(
      (item: BookmarkButtonProps) =>
        item.chapter === chapter && item.verse === verse
    );
  });
    function handleBookmark(){
        const bookmark={
            chapter,
            verse,
            slok,
            translation
        };

        const saved=localStorage.getItem("bookmarks");
        const bookmarks=saved ? JSON.parse(saved) : [];
         const alreadyBookmarked = bookmarks.some(
  (item: BookmarkButtonProps) =>
    item.chapter === chapter && item.verse === verse
);
if (alreadyBookmarked) {
  alert("This verse is already bookmarked.");
  return;
}
  
        bookmarks.push(bookmark);
          localStorage.setItem(
         "bookmarks",
        JSON.stringify(bookmarks)
        );
        console.log(bookmarks);
        setBookmarked(true);
        
    }
    return(
        <button onClick={handleBookmark} className="mt-4 rounded-lg border px-4 py-2 hover:bg-gray-100" >
            {bookmarked ? "🔖 Bookmarked" : "🔖Bookmark"}
        </button>
    )
}