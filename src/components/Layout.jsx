import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#2B1A12]">
      <Navbar />
      <main className="w-full px-5 py-6 lg:px-8">{children}</main>
    </div>
  );
}
