import { Link, NavLink } from "react-router-dom";
import { Search, UserCircle, BookOpen } from "lucide-react";
import { navItems } from "../data/mlnData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5D8C8] bg-[#2B1A12]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-[#FFFDF8]">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B5A36]">
            <BookOpen size={20} />
          </div>
          <div>
            <p className="text-sm font-bold leading-none">MLN111</p>
            <p className="text-xs text-[#C08B5C]">Triết học Mác - Lênin</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#C08B5C]"
                  : "text-[#FFFDF8]/80 transition hover:text-[#C08B5C]"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Search size={19} />
          <UserCircle size={24} />
        </div>
      </div>
    </header>
  );
}
