"use client";
import {useState} from "react";
export default function ThemeToggle(){
    const [dark,setDark] =useState(false);

    function toggleTheme() {
    const newTheme = !dark;

    setDark(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);
  }

    return (
        <button onClick={toggleTheme} className="rounded-lg border px-3 py-2">
            {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}