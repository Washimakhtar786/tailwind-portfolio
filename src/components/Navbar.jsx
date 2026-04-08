import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        <h1 className="text-xl font-bold text-blue-600">
          MyPortfolio
        </h1>

        <div className="flex items-center gap-4">

          <ul className="space-x-6 hidden md:flex text-sm text-gray-600 dark:text-gray-200">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button
            onClick={() => setDark(!dark)}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            {dark ? "Light" : "Dark"}
          </button>

        </div>
      </div>
    </nav>
  );
}