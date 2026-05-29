import Layout from "../components/Layout";
import { chapter3Sections, chapter3Map } from "../data/mlnData";
import { useState } from "react";
import {
  Factory,
  Handshake,
  Building2,
  Scale,
  Users,
  Landmark,
  Brain,
  User,
  ArrowRight,
  Network,
} from "lucide-react";

const mapIcons = [
  Factory,
  Handshake,
  Building2,
  Scale,
  Users,
  Landmark,
  Brain,
  User,
];

export default function Chapter3Page() {
  const [showAllDetails, setShowAllDetails] = useState(false);
  return (
    <Layout>
      <section className="relative mb-8 overflow-hidden rounded-[2rem] border border-[#E8DCCB] bg-[#FFFDF8] p-10 text-[#2B1A12] dark:border-[#3A2A22] dark:bg-[#21150F] dark:text-white">
        <img
          src="/chapter3-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-right opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/95 to-[#FFFDF8]/35 dark:from-[#21150F] dark:via-[#21150F]/92 dark:to-[#21150F]/40" />

        <div className="relative z-10">
          <p className="mb-6 text-sm text-[#8B4A22]">Trang chủ 〉 Chương 3</p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight text-[#2B1A12] dark:text-white">
            Chương 3: Chủ nghĩa duy vật lịch sử
          </h1>

          <p className="mt-6 max-w-4xl leading-8 text-[#5A331E]/75 dark:text-white/70">
            Trình bày những nội dung cơ bản của chủ nghĩa duy vật lịch sử, gồm
            vấn đề hình thái kinh tế - xã hội; giai cấp và dân tộc; nhà nước và
            cách mạng; ý thức xã hội; triết học về con người.
          </p>
        </div>
      </section>
      <section className="grid gap-5 md:grid-cols-5">
        {chapter3Sections.map((section, index) => (
          <article
            key={section.title}
            className="rounded-2xl border border-[#E8DCCB] bg-[#FFFDF8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-[#3A2A22] dark:bg-[#21150F]"
          >
            <span className="rounded-lg bg-[#8B4A22] px-3 py-2 text-sm font-black text-white">
              3.{index + 1}
            </span>

            <h2 className="mt-6 min-h-[82px] text-2xl font-black leading-tight text-[#2B1A12] dark:text-white">
              {section.title}
            </h2>

            <img
              src={section.image}
              alt={section.title}
              className="mt-5 h-40 w-full rounded-xl object-cover"
            />

            <p className="mt-5 min-h-[110px] text-sm font-semibold leading-7 text-[#5A331E]/75 dark:text-white/70">
              {section.desc}
            </p>

            <button
              onClick={() => setShowAllDetails(!showAllDetails)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#E8DCCB] bg-white py-3 text-sm font-black text-[#8B4A22] dark:border-[#3A2A22] dark:bg-[#2A1A12]"
            >
              {showAllDetails ? "Ẩn chi tiết ↑" : "Xem chi tiết →"}
            </button>

            {showAllDetails && (
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5A331E]/75 dark:text-white/70">
                {section.details.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-[1.7rem] border border-[#E8DCCB] bg-[#FFFDF8] p-8 dark:border-[#3A2A22] dark:bg-[#21150F]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#2B1A12] dark:text-white">
            Sơ đồ tổng quan chương 3
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-center">
          {chapter3Map.map((item, index) => {
            const Icon = mapIcons[index] || Landmark;

            return (
              <div key={item} className="flex items-center gap-5">
                <div>
                  <Icon className="mx-auto text-[#A97451]" size={48} />
                  <p className="mt-3 max-w-[120px] text-sm font-black leading-5 text-[#2B1A12] dark:text-white">
                    {item}
                  </p>
                </div>

                {index < chapter3Map.length - 1 && (
                  <ArrowRight className="hidden text-[#8B4A22] md:block" />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
