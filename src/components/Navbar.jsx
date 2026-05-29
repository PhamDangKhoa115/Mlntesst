import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, BookOpen, Gamepad2 } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data/mlnData";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DCCB] bg-[#FFFDF8]/95 backdrop-blur dark:border-[#3A2A22] dark:bg-[#1B120D]/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B4A22] text-white">
            <BookOpen size={20} />
          </div>

          <div>
            <p className="font-black leading-none text-[#2B1A12] dark:text-white">
              MLN111
            </p>

            <p className="mt-1 text-xs text-[#8B5A36]">Triết học Mác - Lênin</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#8B4A22]"
                  : "text-[#2B1A12]/75 hover:text-[#8B4A22] dark:text-white/80"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/game"
            className="flex items-center gap-2 rounded-xl bg-[#8B4A22] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#A75A2A]"
          >
            <Gamepad2 size={17} />
            Game
          </Link>

          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8DCCB] bg-white text-[#8B4A22] transition hover:bg-[#F7F1E8] dark:border-[#4B382E] dark:bg-[#2A1C15] dark:text-[#F6D2B5]"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
