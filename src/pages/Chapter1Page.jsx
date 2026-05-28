import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { chapter1Sections, extendedTheory } from "../data/mlnData";
export default function Chapter1Page() {
  return (
    <Layout>
      <SectionHeader
        eyebrow="Chương 1"
        title="Triết học và vai trò của triết học Mác - Lênin"
        desc="Trình bày những nét khái quát nhất về triết học, triết học Mác - Lênin và vai trò của triết học Mác - Lênin trong đời sống xã hội."
      />

      <div className="rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6 shadow-sm">
        <div className="space-y-3">
          {chapter1Sections.map((section, index) => (
            <details
              key={section.title}
              className="group rounded-2xl border border-[#E5D8C8] bg-[#F7F1E8] p-5"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none font-bold text-[#2B1A12]">
                {index + 1}. {section.title}
              </summary>
              <p className="mt-4 leading-8 text-[#5A331E]/80">
                {section.content}
              </p>
            </details>
          ))}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {extendedTheory.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E5D8C8] bg-[#FFFDF8] p-6"
              >
                <h3 className="text-xl font-black text-[#5A331E]">
                  {item.title}
                </h3>

                <div className="mt-4 space-y-3">
                  {item.content.map((point) => (
                    <div
                      key={point}
                      className="rounded-xl bg-[#F7F1E8] px-4 py-3 text-sm font-semibold text-[#8B5A36]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
