import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  BookOpen,
  Brain,
  Landmark,
  Atom,
  ClipboardCheck,
  Scale,
  ArrowRight,
} from "lucide-react";

const featureCards = [
  {
    icon: BookOpen,
    title: "Triết học là gì?",
    desc: "Khái niệm, nguồn gốc và chức năng",
  },
  {
    icon: Brain,
    title: "Vấn đề cơ bản",
    desc: "Mối quan hệ giữa vật chất và ý thức",
  },
  {
    icon: Landmark,
    title: "Sự ra đời",
    desc: "Triết học Mác - Lênin ra đời như thế nào?",
  },
  {
    icon: Atom,
    title: "Duy vật biện chứng",
    desc: "Thế giới quan khoa học của thời đại",
  },
  {
    icon: Scale,
    title: "3 Quy luật",
    desc: "Nền tảng của sự vận động và phát triển",
  },
  { icon: Brain, title: "Nhận thức", desc: "Con đường đi đến chân lý" },
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
    icon: Scale,
    title: "Chương 3",
    desc: "Chủ nghĩa duy vật lịch sử",
    path: "/chuong-3",
  },
  {
    no: "04",
    icon: Brain,
    title: "Ôn tập",
    desc: "Trắc nghiệm và flashcard",
    path: "/on-tap",
  },
  {
    no: "05",
    icon: ClipboardCheck,
    title: "Game",
    desc: "Game học Triết học",
    path: "/game",
  },
];

export default function HomePage() {
  return (
    <Layout>
      <section
        className="overflow-hidden rounded-[2rem] p-12 text-white shadow-sm"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(37,18,8,.98),rgba(88,43,18,.82),rgba(88,43,18,.25)), url('/home-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <span className="rounded-lg bg-[#8B4A22] px-4 py-2 text-sm font-black">
          MLN111
        </span>

        <h1 className="mt-6 text-6xl font-black leading-none tracking-tight">
          TRIẾT HỌC
          <br />
          <span className="text-[#C97945]">MÁC - LÊNIN</span>
        </h1>

        <p className="mt-6 text-2xl font-bold">
          Tổng quan kiến thức Chương 1 + 2 + 3
        </p>

        <p className="mt-5 max-w-lg leading-8 text-white/80">
          Hiểu thế giới bằng tư duy biện chứng, cải tạo thế giới bằng thực tiễn
          cách mạng.
        </p>

        <div className="mt-8 flex flex-wrap gap-5">
          <Link
            to="/chuong-1"
            className="rounded-xl bg-[#A75A2A] px-7 py-4 font-black text-white"
          >
            Bắt đầu học →
          </Link>

          <Link
            to="/game"
            className="rounded-xl border border-[#D8B391] px-7 py-4 font-black text-white"
          >
            Chơi game
          </Link>
        </div>
      </section>

      <section className="mt-8 grid overflow-hidden rounded-[1.5rem] border border-[#E8DCCB] bg-[#FFFDF8] dark:border-[#3A2A22] dark:bg-[#21150F] md:grid-cols-6">
        {featureCards.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="border-r border-[#E8DCCB] px-5 py-7 text-center last:border-r-0 dark:border-[#3A2A22]"
          >
            <Icon className="mx-auto text-[#A97451]" size={42} />
            <h3 className="mt-4 font-black dark:text-white">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-[#5A331E]/70 dark:text-white/60">
              {desc}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-[#E8DCCB] bg-[#FFFDF8] p-8 dark:border-[#3A2A22] dark:bg-[#21150F]">
        <h2 className="mb-7 text-xl font-black uppercase dark:text-white">
          Nội dung học tập
        </h2>

        <div className="grid gap-5 md:grid-cols-5">
          {courseCards.map(({ no, icon: Icon, title, desc, path }) => (
            <Link
              key={no}
              to={path}
              className="rounded-xl border border-[#E8DCCB] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-[#3A2A22] dark:bg-[#2A1A12]"
            >
              <p className="text-2xl font-black text-[#A97451]">{no}</p>
              <h3 className="mt-5 font-black dark:text-white">{title}</h3>
              <p className="mt-2 min-h-[50px] text-sm font-bold leading-6 text-[#5A331E]/75 dark:text-white/65">
                {desc}
              </p>
              <Icon className="mx-auto mt-8 text-[#A97451]" size={56} />

              <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B4A22] py-3 text-sm font-bold text-white">
                Xem chi tiết <ArrowRight size={16} />
              </button>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="mt-8 rounded-[1.5rem] p-10 text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(91,45,20,.96),rgba(91,45,20,.65)), url('/quote-books.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <p className="text-5xl text-[#D8B391]">“</p>
        <p className="max-w-xl text-xl font-semibold leading-9">
          Triết học không chỉ giải thích thế giới, mà còn định hướng cách con
          người nhận thức và cải tạo thế giới.
        </p>
        <p className="mt-4 text-[#D8B391]">– C. Mác</p>
      </section>
    </Layout>
  );
}
