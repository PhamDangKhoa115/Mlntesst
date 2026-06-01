import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F3EA] text-[#2B1A12] dark:bg-[#120D09] dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
        {children}
      </main>
    </div>
  );
}
