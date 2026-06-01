import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
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
  ArrowDown,
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
      <PageHero
        breadcrumb="Trang chủ 〉 Chương 3"
        title="Chương 3: Chủ nghĩa duy vật lịch sử"
        desc="Trình bày những nội dung cơ bản của chủ nghĩa duy vật lịch sử, gồm vấn đề hình thái kinh tế - xã hội; giai cấp và dân tộc; nhà nước và cách mạng; ý thức xã hội; triết học về con người."
        image="/chapter3-bg.png"
      />

      <div className="mb-5 flex justify-end">
        <button
          onClick={() => setShowAllDetails(!showAllDetails)}
          className="w-full rounded-xl bg-[#8B4A22] px-5 py-3 text-sm font-black text-white transition hover:bg-[#A75A2A] sm:w-auto"
        >
          {showAllDetails ? "Ẩn toàn bộ chi tiết ↑" : "Xem toàn bộ chi tiết →"}
        </button>
      </div>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {chapter3Sections.map((section, index) => (
          <article
            key={section.title}
            className="rounded-2xl border border-[#E8DCCB] bg-[#FFFDF8] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-[#3A2A22] dark:bg-[#21150F] sm:p-6"
          >
            <span className="rounded-lg bg-[#8B4A22] px-3 py-2 text-xs font-black text-white sm:text-sm">
              3.{index + 1}
            </span>

            <h2 className="mt-5 text-xl font-black leading-tight text-[#2B1A12] dark:text-white sm:mt-6 sm:text-2xl xl:min-h-[82px]">
              {section.title}
            </h2>

            <img
              src={section.image}
              alt={section.title}
              className="mt-4 h-36 w-full rounded-xl object-cover sm:mt-5 sm:h-40"
            />

            <p className="mt-4 text-sm font-semibold leading-7 text-[#5A331E]/75 dark:text-white/70 xl:min-h-[110px]">
              {section.desc}
            </p>

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

      <section className="mt-8 rounded-[1.5rem] border border-[#E8DCCB] bg-[#FFFDF8] p-5 dark:border-[#3A2A22] dark:bg-[#21150F] sm:rounded-[1.7rem] sm:p-8">
        <h2 className="mb-6 text-2xl font-black text-[#2B1A12] dark:text-white sm:text-3xl">
          Sơ đồ tổng quan chương 3
        </h2>

        <div className="flex flex-col items-center gap-3 xl:flex-row xl:flex-wrap xl:justify-center xl:gap-5">
          {chapter3Map.map((item, index) => {
            const Icon = mapIcons[index] || Landmark;

            return (
              <div
                key={item}
                className="flex w-full flex-col items-center xl:w-auto xl:flex-row xl:gap-5"
              >
                <div className="w-full rounded-2xl bg-[#F7F1E8] p-5 text-center dark:bg-[#2A1A12] sm:max-w-[360px] xl:w-[135px] xl:p-4">
                  <Icon className="mx-auto text-[#A97451]" size={42} />

                  <p className="mt-3 text-sm font-black leading-5 text-[#2B1A12] dark:text-white">
                    {item}
                  </p>
                </div>

                {index < chapter3Map.length - 1 && (
                  <>
                    <ArrowDown className="my-1 text-[#8B4A22] xl:hidden" />
                    <ArrowRight className="hidden text-[#8B4A22] xl:block" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
