import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { chapter3Sections, socialTheory } from "../data/mlnData";
export default function Chapter3Page() {
  return (
    <Layout>
      <SectionHeader
        eyebrow="Chương 3"
        title="Chủ nghĩa duy vật lịch sử"
        desc="Trình bày vai trò của sản xuất vật chất, quy luật quan hệ sản xuất phù hợp với lực lượng sản xuất, cơ sở hạ tầng - kiến trúc thượng tầng, tồn tại xã hội - ý thức xã hội, hình thái kinh tế - xã hội, giai cấp, cách mạng xã hội và con người."
      />

      <div className="rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6 shadow-sm">
        <h2 className="text-2xl font-black">
          Sơ đồ nền tảng của chủ nghĩa duy vật lịch sử
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            "Sản xuất vật chất",
            "LLSX ↔ QHSX",
            "CSHT ↔ KTTT",
            "Tồn tại XH ↔ Ý thức XH",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-[#F7F1E8] p-5 text-center font-bold text-[#8B5A36]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {chapter3Sections.map((section, index) => (
          <div
            key={section.title}
            className="rounded-2xl border border-[#E5D8C8] bg-[#FFFDF8] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="mb-2 text-sm font-black text-[#C08B5C]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-black text-[#8B5A36]">{section.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#5A331E]/75">
              {section.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {socialTheory.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-[#E5D8C8] bg-[#FFFDF8] p-6 shadow-sm"
          >
            <h3 className="text-lg font-black text-[#8B5A36]">
              {section.title}
            </h3>

            <div className="mt-4 space-y-2">
              {section.items.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-[#F7F1E8] px-4 py-3 text-sm font-semibold text-[#5A331E]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
