import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import {
  Users,
  BookOpen,
  Palette,
  Code2,
  Sparkles,
  Target,
} from "lucide-react";

const members = [
  {
    name: "Lê Phạm Mỹ Duyên",
    role: "Phụ trách nội dung học thuật",
    icon: BookOpen,
    desc: "Là người xây dựng nền tảng kiến thức cho website, tập trung chọn lọc, hệ thống hóa và diễn giải nội dung Triết học Mác – Lênin sao cho rõ ràng, dễ hiểu và phù hợp.",
    strengths: ["Chọn lọc nội dung", "Diễn giải kiến thức"],
  },
  {
    name: "Trần Như Ý",
    role: "Phụ trách thiết kế giao diện/nội dung học thuật",
    icon: Palette,
    desc: "Là người định hình phong cách trực quan cho sản phẩm,  tạo nên giao diện học thuật, hiện đại và thân thiện, giúp việc học Triết học trở nên nhẹ nhàng và hấp dẫn hơn.",
    strengths: ["Thiết kế giao diện", "Diễn giải kiến thức"],
  },
  {
    name: "Phạm Đăng Khoa",
    role: "Phụ trách lập trình và tương tác",
    icon: Code2,
    desc: "Là người hiện thực hóa ý tưởng thành website hoàn chỉnh, phụ trách xây dựng chức năng, tối ưu trải nghiệm học tập và phát triển các phần tương tác như ôn tập, trắc nghiệm và game.",
    strengths: ["Lập trình Web", "Tối ưu tương tác"],
  },
];

export default function TeamPage() {
  return (
    <Layout>
      <PageHero
        breadcrumb="Trang chủ 〉 Nhóm thực hiện"
        title={
          <>
            Các thành viên thực hiện dự án <br />
          </>
        }
        image="/home-hero.png"
      />

      <section className="rounded-[1.5rem] border border-[#E8DCCB] bg-[#FFFDF8] p-5 dark:border-[#3A2A22] dark:bg-[#21150F] sm:p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B4A22] text-white">
            <Users size={30} />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {members.map(({ name, role, icon: Icon, desc, strengths }, index) => (
            <article
              key={name}
              className="rounded-2xl border border-[#E8DCCB] bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg dark:border-[#3A2A22] dark:bg-[#2A1A12]"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F4E9DB] text-[#8B4A22] dark:bg-[#21150F] dark:text-[#F6D2B5]">
                <Icon size={38} />
              </div>

              <p className="mt-5 text-sm font-black text-[#A97451]">
                Thành viên {index + 1}
              </p>

              <h3 className="mt-2 text-xl font-black text-[#2B1A12] dark:text-white">
                {name}
              </h3>

              <p className="mt-2 text-sm font-bold text-[#8B4A22] dark:text-[#F6D2B5]">
                {role}
              </p>

              <p className="mt-4 text-sm leading-7 text-[#5A331E]/75 dark:text-white/70">
                {desc}
              </p>

              <div className="mt-5 space-y-2">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-[#F7F1E8] px-4 py-3 text-left text-sm font-semibold text-[#5A331E] dark:bg-[#21150F] dark:text-white/75"
                  >
                    <Sparkles size={16} className="shrink-0 text-[#A97451]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Cùng học",
            desc: "Cùng tìm hiểu kiến thức, chia nhỏ nội dung và hỗ trợ nhau trong quá trình hoàn thiện sản phẩm.",
          },
          {
            title: "Cùng làm",
            desc: "Cùng biến ý tưởng thành website thực tế thông qua thiết kế, lập trình, chỉnh sửa và kiểm thử.",
          },
          {
            title: "Cùng phát triển",
            desc: "Cùng rèn luyện kỹ năng làm việc nhóm, tư duy sáng tạo và khả năng ứng dụng kiến thức vào sản phẩm học tập.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[1.5rem] border border-[#E8DCCB] bg-[#FFFDF8] p-6 dark:border-[#3A2A22] dark:bg-[#21150F]"
          >
            <Target className="text-[#A97451]" size={36} />
            <h3 className="mt-4 text-xl font-black text-[#2B1A12] dark:text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#5A331E]/75 dark:text-white/70">
              {item.desc}
            </p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
