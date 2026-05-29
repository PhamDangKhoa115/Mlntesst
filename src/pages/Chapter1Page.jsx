import Layout from "../components/Layout";
import { chapter1Sections, extendedTheory } from "../data/mlnData";
import { Landmark, ChevronDown } from "lucide-react";
import PageHero from "../components/PageHero";
export default function Chapter1Page() {
  return (
    <Layout>
      <PageHero
        breadcrumb="Trang chủ 〉 Chương 1"
        title={
          <>
            Triết học <br /> và vai trò của triết học
          </>
        }
        desc="Tìm hiểu nguồn gốc, khái niệm, chức năng của triết học và vấn đề cơ bản của triết học."
        image="/chapter1-bg.png"
      />

      <section className="rounded-[1.5rem] border border-[#E6D7C4] bg-[#FFFDF8] p-7 dark:border-[#3A2A22] dark:bg-[#21150F]">
        <div className="mb-8">
          <h2 className="text-2xl font-black dark:text-white">
            1. Nguồn gốc của triết học
          </h2>
          <p className="mt-4 leading-8 text-[#5A331E]/75 dark:text-white/70">
            Triết học xuất hiện khoảng thế kỷ VI - V TCN tại ba trung tâm lớn
            của tư tưởng cổ đại: Trung Quốc, Ấn Độ và Hy Lạp.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["origin-china.png", "Trung Quốc"],
              ["origin-india.png", "Ấn Độ"],
              ["origin-greece.png", "Hy Lạp"],
            ].map(([img, title]) => (
              <div
                key={title}
                className="rounded-xl border border-[#E6D7C4] bg-white p-6 dark:border-[#3A2A22] dark:bg-[#2A1A12]"
              >
                <img
                  src={`/${img}`}
                  className="mb-4 h-24 w-full rounded-lg object-cover"
                  alt={title}
                />
                <h3 className="text-lg font-black dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5A331E]/70 dark:text-white/65">
                  Trung tâm tư tưởng triết học cổ đại.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {chapter1Sections.slice(1).map((section, index) => (
            <details
              key={section.title}
              className="group rounded-xl border border-[#E6D7C4] bg-white p-5 dark:border-[#3A2A22] dark:bg-[#2A1A12]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-black dark:text-white">
                {index + 2}. {section.title}
                <ChevronDown className="transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 leading-8 text-[#5A331E]/75 dark:text-white/70">
                {section.content}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {extendedTheory.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.5rem] border border-[#E6D7C4] bg-[#FFFDF8] p-6 dark:border-[#3A2A22] dark:bg-[#21150F]"
          >
            <Landmark size={42} className="mb-5 text-[#A97451]" />
            <h3 className="text-xl font-black dark:text-white">{item.title}</h3>
            <div className="mt-4 space-y-3">
              {item.content.map((point) => (
                <p
                  key={point}
                  className="rounded-xl bg-[#F4E9DB] px-4 py-3 text-sm font-semibold text-[#5A331E] dark:bg-[#2A1A12] dark:text-white/75"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
