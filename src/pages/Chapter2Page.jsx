import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import {
  chapter2Cards,
  chapter2DetailSections,
  dialecticPrinciples,
  dialecticCategories,
  dialecticRules,
  cognitionSections,
  advancedDialectics,
} from "../data/mlnData";

export default function Chapter2Page() {
  return (
    <Layout>
      <SectionHeader
        eyebrow="Chương 2"
        title="Chủ nghĩa duy vật biện chứng"
        desc="Trình bày vật chất, ý thức, mối quan hệ vật chất - ý thức, phép biện chứng duy vật, thực tiễn, nhận thức và chân lý."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {chapter2Cards.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-[#E5D8C8] bg-[#FFFDF8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Icon className="mb-5 text-[#8B5A36]" size={40} />
            <h3 className="text-xl font-black">{title}</h3>
            <p className="mt-3 leading-7 text-[#5A331E]/75">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {advancedDialectics.map((section) => (
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
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {chapter2DetailSections.map((section) => (
          <div
            key={section.title}
            className="rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6 shadow-sm"
          >
            <h2 className="text-xl font-black text-[#8B5A36]">
              {section.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5A331E]/80">
              {section.points.map((point) => (
                <li key={point} className="rounded-xl bg-[#F7F1E8] px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6">
        <h2 className="text-2xl font-black">Phép biện chứng duy vật</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {dialecticPrinciples.map((item) => (
            <div key={item.title} className="rounded-2xl bg-[#F7F1E8] p-5">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5A331E]/75">
                {item.desc}
              </p>
              <p className="mt-3 rounded-xl bg-[#FFFDF8] p-3 text-sm font-semibold text-[#8B5A36]">
                {item.method}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-xl font-black">Sáu cặp phạm trù</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {dialecticCategories.map((category) => (
            <div
              key={category}
              className="rounded-xl border border-[#E5D8C8] bg-[#F7F1E8] p-4 text-sm font-bold text-[#5A331E]"
            >
              {category}
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-xl font-black">Ba quy luật</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {dialecticRules.map((rule) => (
            <div
              key={rule.title}
              className="rounded-2xl border border-[#E5D8C8] p-5"
            >
              <h4 className="font-bold text-[#8B5A36]">{rule.title}</h4>
              <p className="mt-2 text-sm leading-7 text-[#5A331E]/75">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6">
        <h2 className="text-2xl font-black">Lý luận nhận thức</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {cognitionSections.map((section) => (
            <div key={section.title} className="rounded-2xl bg-[#F7F1E8] p-5">
              <h3 className="font-black text-[#8B5A36]">{section.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5A331E]/75">
                {section.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {section.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full bg-[#FFFDF8] px-3 py-1 text-xs font-bold text-[#8B5A36]"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
