import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Landmark,
  Atom,
  Users,
  ClipboardCheck,
  Search,
  UserCircle,
  BarChart3,
  FileText,
  CheckCircle,
  Layers,
  GitBranch,
  Trophy,
  Clock,
  Home,
  Scale,
} from "lucide-react";
const sidebarItems = [
  { icon: Home, label: "Trang chủ", path: "/" },
  { icon: BookOpen, label: "Chương 1", path: "/chuong-1" },
  { icon: BookOpen, label: "Chương 2", path: "/chuong-2" },
  { icon: BookOpen, label: "Chương 3", path: "/chuong-3" },
  { icon: ClipboardCheck, label: "Ôn tập", path: "/on-tap" },
  { icon: FileText, label: "Tài liệu", path: "/tai-lieu" },
];

const benefitCards = [
  {
    icon: Landmark,
    title: "Khoa học",
    desc: "Hệ thống kiến thức logic, rõ ràng",
  },
  {
    icon: Brain,
    title: "Dễ hiểu",
    desc: "Giải thích đơn giản, ví dụ thực tiễn",
  },
  { icon: Layers, title: "Ứng dụng", desc: "Vận dụng vào học tập, công việc" },
  { icon: GitBranch, title: "Tư duy", desc: "Phát triển tư duy biện chứng" },
  { icon: Trophy, title: "Hiệu quả", desc: "Ôn tập thông minh theo tiến độ" },
];

const courseCards = [
  {
    no: "01",
    icon: Landmark,
    title: "Chương 1",
    desc: "Triết học và vai trò của triết học",
    path: "/chuong-1",
  },
  {
    no: "02",
    icon: Atom,
    title: "Chương 2",
    desc: "Chủ nghĩa duy vật biện chứng",
    path: "/chuong-2",
  },
  {
    no: "03",
    icon: Users,
    title: "Chương 3",
    desc: "Chủ nghĩa duy vật lịch sử",
    path: "/chuong-3",
  },
  {
    no: "04",
    icon: Brain,
    title: "Lý luận nhận thức",
    desc: "Của chủ nghĩa duy vật biện chứng",
    path: "/chuong-2",
  },
  {
    no: "05",
    icon: ClipboardCheck,
    title: "Ôn tập",
    desc: "Trắc nghiệm và flashcard",
    path: "/on-tap",
  },
];

const reviewCards = [
  { icon: ClipboardCheck, title: "Trắc nghiệm", meta: "120+ câu hỏi" },
  { icon: BookOpen, title: "Flashcard", meta: "200+ thẻ" },
  { icon: CheckCircle, title: "Đúng / Sai", meta: "80+ câu" },
  { icon: GitBranch, title: "Ghép cặp", meta: "60+ cặp" },
  { icon: Layers, title: "Timeline", meta: "30+ bài" },
];

const resources = [
  ["Giáo trình Triết học Mác - Lênin", "PDF · 5.2 MB"],
  ["Tóm tắt nội dung môn Triết học", "PDF · 2.8 MB"],
  ["Bài giảng Triết học Mác - Lênin", "PPT · 4.1 MB"],
  ["Bài viết vận dụng phép biện chứng", "DOCX · 1.8 MB"],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#120A05] p-3 text-[#2B1A12]">
      <div className="min-h-[calc(100vh-24px)]">
        <section className="space-y-3">
          <header className="flex items-center justify-between rounded-[1.4rem] bg-[#2B1A12] px-5 py-4 text-[#FFFDF8] shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B5A36]">
                📖
              </div>
              <div>
                <p className="font-black leading-none">MLN111</p>
                <p className="mt-1 text-xs text-[#C08B5C]">
                  Triết học Mác - Lênin
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-7 text-xs font-semibold md:flex">
              <Link to="/">Trang chủ</Link>
              <Link to="/chuong-1">Chương 1</Link>
              <Link to="/chuong-2">Chương 2</Link>
              <Link to="/chuong-3">Chương 3</Link>
              <Link to="/on-tap">Ôn tập</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Search size={18} />
              <UserCircle size={28} className="text-[#C08B5C]" />
            </div>
          </header>

          <div className="grid gap-3 xl:grid-cols-[1.15fr_0.85fr_0.85fr]">
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative min-h-[560px] overflow-hidden rounded-[1.4rem] p-8 text-[#FFFDF8] shadow-2xl xl:row-span-2"
              style={{
                backgroundImage: `
      linear-gradient(
        90deg,
        rgba(20,10,5,0.98) 0%,
        rgba(55,25,8,0.9) 38%,
        rgba(80,35,10,0.58) 62%,
        rgba(20,10,5,0.15) 100%
      ),
      url('/bg.png')
    `,
                backgroundSize: "cover",
                backgroundPosition: "center right",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(192,139,92,0.55),transparent_35%)]" />

              <div className="relative z-10 max-w-[560px]">
                <span className="rounded-full bg-[#8B5A36] px-4 py-2 text-xs font-black">
                  MLN111
                </span>
                <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-[#C08B5C] md:text-6xl">
                  TRIẾT HỌC
                  <br />
                  MÁC - LÊNIN
                </h1>
                <p className="mt-5 text-xl font-bold">
                  Tổng quan kiến thức Chương 1 + 2 + 3
                </p>
                <p className="mt-4 max-w-lg leading-7 text-[#FFFDF8]/80">
                  Hiểu thế giới bằng tư duy biện chứng, cải tạo thế giới bằng
                  thực tiễn cách mạng.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/chuong-1"
                    className="rounded-xl bg-[#8B5A36] px-6 py-3 font-bold text-white transition hover:bg-[#A96C42]"
                  >
                    Bắt đầu học
                  </Link>

                  <button className="rounded-xl border border-[#C08B5C] px-6 py-3 font-bold text-[#F7F1E8] transition hover:bg-[#8B5A36]/20">
                    Xem lộ trình
                  </button>

                  <Link
                    to="/game"
                    className="rounded-xl border border-[#FFD166] bg-[#FFD166]/10 px-6 py-3 font-bold text-[#FFD166] transition hover:bg-[#FFD166] hover:text-[#2B1A12]"
                  >
                    🎮 Chơi Game Triết Học
                  </Link>
                </div>
              </div>
            </motion.section>

            <section className="rounded-[1.4rem] bg-[#FFFDF8] p-6 shadow-xl">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase text-[#8B5A36]">
                    Chương 1
                  </p>
                  <h2 className="mt-2 text-2xl font-black leading-tight">
                    Triết học và vai trò của triết học Mác - Lênin
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#5A331E]/70">
                    Trình bày khái quát nhất về triết học, triết học Mác - Lênin
                    và vai trò trong đời sống xã hội.
                  </p>
                </div>
                <div className="hidden text-6xl md:block">📚</div>
              </div>
              <div className="mt-5 space-y-2">
                {[
                  "Khái niệm triết học",
                  "Nguồn gốc của triết học",
                  "Vấn đề cơ bản của triết học",
                  "Chủ nghĩa duy vật và duy tâm",
                  "Vai trò của triết học Mác - Lênin",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-[#E5D8C8] px-4 py-3 text-sm font-bold"
                  >
                    <span>
                      {i + 1}. {item}
                    </span>
                    <span>⌄</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.4rem] bg-[#FFFDF8] p-6 shadow-xl">
              <p className="text-xs font-black uppercase text-[#8B5A36]">
                Chương 2
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight">
                Chủ nghĩa duy vật biện chứng
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#5A331E]/70">
                Vật chất, ý thức, phép biện chứng duy vật và lý luận nhận thức.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  [Brain, "2.1", "Vật chất và ý thức"],
                  [Scale, "2.2", "Phép biện chứng"],
                  [Atom, "2.3", "Lý luận nhận thức"],
                ].map(([Icon, no, title]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-[#E5D8C8] bg-[#F7F1E8] p-4 text-center"
                  >
                    <Icon className="mx-auto text-[#C08B5C]" />
                    <p className="mt-3 text-sm font-black text-[#8B5A36]">
                      {no}
                    </p>
                    <p className="mt-1 text-xs font-bold leading-4">{title}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.4rem] bg-[#FFFDF8] p-6 shadow-xl">
              <p className="text-xs font-black uppercase text-[#8B5A36]">
                2.2 Phép biện chứng duy vật
              </p>
              <h2 className="mt-2 text-2xl font-black">Hai nguyên lý cơ bản</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-[#F7F1E8] p-5">
                  <p className="text-xl font-black text-[#8B5A36]">1</p>
                  <h3 className="mt-2 font-black">Mối liên hệ phổ biến</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5A331E]/70">
                    Mọi sự vật tồn tại trong mối liên hệ, tác động lẫn nhau.
                  </p>
                </div>
                <div className="rounded-xl bg-[#F7F1E8] p-5">
                  <p className="text-xl font-black text-[#8B5A36]">2</p>
                  <h3 className="mt-2 font-black">Sự phát triển</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5A331E]/70">
                    Mọi sự vật vận động, biến đổi và phát triển.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[1.4rem] bg-[#FFFDF8] p-6 shadow-xl">
              <p className="text-xs font-black uppercase text-[#8B5A36]">
                2.3 Lý luận nhận thức
              </p>
              <h2 className="mt-2 text-2xl font-black">Quá trình nhận thức</h2>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center text-sm font-bold">
                {[
                  "Nhận thức cảm tính",
                  "Nhận thức lý tính",
                  "Thực tiễn",
                  "Chân lý",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#F7F1E8] px-5 py-4">
                      {item}
                    </div>
                    {index < 3 && <span className="text-[#8B5A36]">→</span>}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="grid gap-3 xl:grid-cols-[1fr_1fr]">
            <section className="rounded-[1.4rem] bg-[#FFFDF8] p-6 shadow-xl">
              <div className="grid gap-4 md:grid-cols-5">
                {benefitCards.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="border-r border-[#E5D8C8] text-center last:border-r-0"
                  >
                    <Icon className="mx-auto text-[#8B5A36]" />
                    <h3 className="mt-3 font-black">{title}</h3>
                    <p className="mx-auto mt-1 max-w-[120px] text-xs leading-5 text-[#5A331E]/70">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.4rem] bg-[#FFFDF8] p-6 shadow-xl">
              <h2 className="text-xl font-black">Nội dung môn học</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-5">
                {courseCards.map(({ no, icon: Icon, title, desc, path }) => (
                  <Link
                    key={no}
                    to={path}
                    className="rounded-xl border border-[#E5D8C8] bg-[#F7F1E8] p-4 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="text-lg font-black text-[#8B5A36]">{no}</p>
                    <h3 className="mt-2 text-sm font-black">{title}</h3>
                    <p className="mt-2 min-h-[38px] text-xs leading-5 text-[#5A331E]/70">
                      {desc}
                    </p>
                    <Icon className="mt-4 text-[#C08B5C]" />
                    <p className="mt-4 text-xs font-bold text-[#8B5A36]">
                      Xem chi tiết →
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-[1.4rem] bg-[linear-gradient(135deg,#5A331E,#2B1A12)] p-7 text-[#FFFDF8] shadow-xl">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_240px]">
              <div>
                <p className="text-5xl text-[#C08B5C]">“</p>
                <blockquote className="max-w-2xl text-xl font-semibold leading-9">
                  Triết học không chỉ giải thích thế giới, mà còn định hướng
                  cách con người nhận thức và cải tạo thế giới.
                </blockquote>
                <p className="mt-3 text-[#C08B5C]">– C. Mác</p>
              </div>
              <div className="hidden rounded-2xl bg-white/10 p-6 text-center text-7xl md:block">
                📖
              </div>
            </div>
          </section>

          <section className="rounded-[1.4rem] bg-[#FFFDF8] p-6 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-black">Ôn tập & Trắc nghiệm</h2>
                <p className="mt-2 text-sm leading-6 text-[#5A331E]/70">
                  Luyện tập bằng trắc nghiệm, flashcard, đúng/sai, ghép cặp và
                  timeline kiến thức.
                </p>
              </div>

              <Link
                to="/on-tap"
                className="rounded-xl bg-[#8B5A36] px-5 py-3 text-sm font-black text-white transition hover:bg-[#A96C42]"
              >
                Bắt đầu ôn tập ngay
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {reviewCards.map(({ icon: Icon, title, meta }) => (
                <div
                  key={title}
                  className="rounded-xl border border-[#E5D8C8] bg-[#F7F1E8] p-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="mx-auto text-[#8B5A36]" />
                  <h3 className="mt-3 text-sm font-black">{title}</h3>
                  <p className="mt-3 rounded-lg bg-[#FFFDF8] py-2 text-xs font-bold text-[#8B5A36]">
                    {meta}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
