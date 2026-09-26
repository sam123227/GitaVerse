import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center gap-4 border-b border-gray-200 bg-blue-500 px-4 py-4 text-lg text-white dark:bg-gray-700 sm:px-6">
      <h2 className="font-semibold">Gita Verse</h2>

      <div className="flex flex-wrap items-center gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/chapters" className="hover:underline">
          Chapters
        </Link>

        <Link href="/bookmarks" className="hover:underline">
          Bookmarks
        </Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}
