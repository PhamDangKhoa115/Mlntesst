import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Chapter1Page from "./pages/Chapter1Page";
import Chapter2Page from "./pages/Chapter2Page";
import Chapter3Page from "./pages/Chapter3Page";
import ReviewPage from "./pages/ReviewPage";
import PhilosophyGame from "./pages/PhilosophyGame";
import AIAppendixPage from "./pages/AIApendixPage";
import TeamPage from "./pages/TeamPage";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chuong-1" element={<Chapter1Page />} />
        <Route path="/chuong-2" element={<Chapter2Page />} />
        <Route path="/chuong-3" element={<Chapter3Page />} />
        <Route path="/on-tap" element={<ReviewPage />} />
        <Route path="/game" element={<PhilosophyGame />} />
        <Route path="/phu-luc-ai" element={<AIAppendixPage />} />
        <Route path="/nhom" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}
