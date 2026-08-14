import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
export default function Navbar(){
    return(
        <nav className="flex items-center border-b border-gray-200 gap-6 text-xl bg-blue-500 dark:bg-gray-700 px-6 py-4 text-white">
            <h2>Gita Verse</h2>
            <div className="flex items-center gap-4">
                <Link href="/">Home</Link>
                <Link href="/chapters">Chapters</Link>
                <Link href="/bookmarks">Bookmarks</Link>
            </div>
            <ThemeToggle />
        </nav>
    );
}