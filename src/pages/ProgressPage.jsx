import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";

export default function ProgressPage() {
  const progress = [
    ["Chương 1: Triết học và vai trò của triết học", 100],
    ["Chương 2: Chủ nghĩa duy vật biện chứng", 90],
    ["Chương 3: Chủ nghĩa duy vật lịch sử", 70],
    ["Ôn tập & Trắc nghiệm", 60],
  ];

  return (
    <Layout>
      <SectionHeader
        eyebrow="Tiến độ"
        title="Tiến độ học tập"
        desc="Theo dõi mức độ hoàn thành các chương và thành tích học tập."
      />

      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.4fr_0.8fr]">
        <div className="rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6 text-center shadow-sm">
          <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border-[16px] border-[#C08B5C] text-4xl font-black">
            85%
          </div>
          <p className="mt-4 font-bold">Hoàn thành</p>
        </div>

        <div className="rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-black">Tiến độ theo chương</h3>
          <div className="space-y-5">
            {progress.map(([title, value]) => (
              <div key={title}>
                <div className="mb-2 flex justify-between text-sm font-bold">
                  <span>{title}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[#E5D8C8]">
                  <div
                    className="h-full rounded-full bg-[#8B5A36]"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6 text-center shadow-sm">
          <p className="text-5xl">🏆</p>
          <h3 className="mt-4 font-black">Học viên chăm chỉ</h3>
          <p className="mt-2 text-sm text-[#5A331E]/70">
            Bạn đã hoàn thành 32/38 bài học.
          </p>
        </div>
      </div>
    </Layout>
  );
}
