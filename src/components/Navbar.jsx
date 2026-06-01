import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, BookOpen, Gamepad2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data/mlnData";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navClass = ({ isActive }) =>
    isActive
      ? "rounded-xl bg-[#F1E3D4] px-4 py-3 text-[#8B4A22] dark:bg-[#2A1A12] dark:text-[#F6D2B5]"
      : "rounded-xl px-4 py-3 text-[#2B1A12]/75 hover:bg-[#F7F1E8] hover:text-[#8B4A22] dark:text-white/80 dark:hover:bg-[#2A1A12]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DCCB] bg-[#FFFDF8]/95 backdrop-blur dark:border-[#3A2A22] dark:bg-[#1B120D]/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8B4A22] text-white">
            <BookOpen size={20} />
          </div>

          <div className="min-w-0">
            <p className="font-black leading-none text-[#2B1A12] dark:text-white">
              MLN111
            </p>
            <p className="mt-1 truncate text-xs text-[#8B5A36]">
              Triết học Mác - Lênin
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-bold lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/game"
            className="hidden items-center gap-2 rounded-xl bg-[#8B4A22] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#A75A2A] sm:flex"
          >
            <Gamepad2 size={17} />
            Game
          </Link>

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8DCCB] bg-white text-[#8B4A22] transition hover:bg-[#F7F1E8] dark:border-[#4B382E] dark:bg-[#2A1C15] dark:text-[#F6D2B5]"
            aria-label="Đổi giao diện sáng tối"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8DCCB] bg-white text-[#8B4A22] dark:border-[#4B382E] dark:bg-[#2A1C15] dark:text-[#F6D2B5] lg:hidden"
            aria-label="Mở menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#E8DCCB] px-4 py-3 text-sm font-bold dark:border-[#3A2A22] lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/game"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#8B4A22] px-4 py-3 text-white sm:hidden"
            >
              <Gamepad2 size={17} />
              Game
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
