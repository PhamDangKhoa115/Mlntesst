import Layout from "../components/Layout";
import {
  chapter2DetailSections,
  dialecticPrinciples,
  dialecticCategories,
  dialecticRules,
  cognitionSections,
} from "../data/mlnData";
import { Atom, Brain, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
export default function Chapter2Page() {
  return (
    <Layout>
      <PageHero
        dark
        breadcrumb="Trang chủ 〉 Chương 2"
        title="Chủ nghĩa duy vật biện chứng"
        desc="Tìm hiểu thế giới quan khoa học của thời đại, chủ nghĩa duy vật biện chứng."
        image="/chapter2-bg.png"
      />

      <section className="rounded-b-[2rem] border border-t-0 border-[#E8DCCB] dark:border-[#3A2A22] bg-[#FFFDF8] dark:bg-[#21150F]">
        <div className="space-y-10 p-8">
          <section className="grid gap-8 lg:grid-cols-[1fr_260px]">
            <div>
              <h2 className="text-2xl font-black">1. Vật chất</h2>
              <p className="mt-5 leading-8 text-[#8B4A22]">
                {chapter2DetailSections[0]?.points?.[0]}
              </p>

              <h3 className="mt-6 font-black">Đặc điểm:</h3>
              <ul className="mt-4 space-y-3 leading-7 text-[#8B4A22]">
                {chapter2DetailSections[0]?.points?.slice(1).map((point) => (
                  <li key={point} className="flex gap-3">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src="/material-galaxy.png"
              className="h-40 w-full rounded-xl object-cover"
            />
          </section>

          <hr className="border-[#E8DCCB] dark:border-[#3A2A22]" />

          <section className="grid gap-8 lg:grid-cols-[1fr_220px]">
            <div>
              <h2 className="text-2xl font-black">2. Ý thức</h2>
              <p className="mt-5 leading-8 text-[#8B4A22]">
                {chapter2DetailSections[1]?.points?.[0]}
              </p>

              <h3 className="mt-6 font-black">Nguồn gốc:</h3>
              <ul className="mt-4 space-y-3 leading-7 text-[#8B4A22]">
                {chapter2DetailSections[1]?.points?.slice(1).map((point) => (
                  <li key={point} className="flex gap-3">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src="/consciousness-head.png"
              className="h-48 w-full rounded-xl object-cover opacity-90"
            />
          </section>

          <hr className="border-[#E8DCCB] dark:border-[#3A2A22]" />

          <section>
            <h2 className="text-2xl font-black">
              3. Mối quan hệ giữa vật chất và ý thức
            </h2>

            <div className="mt-7 flex flex-col items-center justify-center gap-5 md:flex-row">
              <div className="rounded-xl bg-[#F4E9DB] px-12 py-6 text-center font-black text-[#5A331E]">
                Vật chất
                <p className="mt-1 text-sm font-semibold text-[#5A331E]/70">
                  quyết định ý thức
                </p>
              </div>

              <ArrowRight className="text-[#8B4A22]" size={42} />

              <div className="rounded-xl bg-[#F4E9DB] px-12 py-6 text-center font-black text-[#5A331E]">
                Ý thức
                <p className="mt-1 text-sm font-semibold text-[#5A331E]/70">
                  tác động trở lại vật chất
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            {dialecticPrinciples.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#F7F1E8] p-6 text-[#5A331E]"
              >
                <p className="text-2xl font-black text-[#8B4A22]">
                  {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5A331E]/75">{item.desc}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-black">Sáu cặp phạm trù</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {dialecticCategories.map((category) => (
                <div
                  key={category}
                  className="rounded-xl border border-[#E8DCCB] bg-white px-5 py-4 font-bold text-[#5A331E] dark:border-[#3A2A22] dark:bg-[#F4E9DB]"
                >
                  {category}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black">Ba quy luật</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {dialecticRules.map((rule) => (
                <div
                  key={rule.title}
                  className="rounded-2xl border border-[#E8DCCB] bg-white p-6 text-[#5A331E] dark:border-[#3A2A22] dark:bg-[#F4E9DB]"
                >
                  <Atom className="mb-4 text-[#A97451]" size={40} />
                  <h3 className="font-black text-[#8B4A22]">{rule.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5A331E]/75">
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black">Lý luận nhận thức</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {cognitionSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl bg-[#F7F1E8] p-6"
                >
                  <Brain className="mb-4 text-[#A97451]" size={38} />
                  <h3 className="font-black text-[#8B4A22]">{section.title}</h3>
                  <p className="mt-3 leading-7 text-[#5A331E]/75">
                    {section.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
