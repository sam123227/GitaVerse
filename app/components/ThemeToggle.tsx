"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const currentDark =
      document.documentElement.classList.contains("dark");

    const newTheme = !currentDark;

    document.documentElement.classList.toggle("dark", newTheme);
    setDark(newTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border px-3 py-2"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}