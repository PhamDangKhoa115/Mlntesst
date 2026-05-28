import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { resources } from "../data/mlnData";

export default function ResourcesPage() {
  return (
    <Layout>
      <SectionHeader
        eyebrow="Tài liệu"
        title="Tài liệu tham khảo"
        desc="Danh sách giáo trình, bài giảng và tài liệu ôn tập môn Triết học Mác - Lênin."
      />

      <div className="rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6 shadow-sm">
        <div className="space-y-4">
          {resources.map(({ icon: Icon, title, desc, button }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-[#E5D8C8] bg-[#F7F1E8] p-5 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#8B5A36]/10 p-3 text-[#8B5A36]">
                  <Icon />
                </div>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-[#5A331E]/70">{desc}</p>
                </div>
              </div>
              <button className="rounded-xl border border-[#8B5A36] px-4 py-2 text-sm font-bold text-[#8B5A36] transition hover:bg-[#8B5A36] hover:text-white">
                {button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
