import Layout from "../components/Layout";
import {
  Target,
  CheckCircle,
  FileText,
  School,
  Gamepad2,
  Globe,
  Brain,
  Search,
  Lightbulb,
  Clock,
  ShieldCheck,
  Bot,
  User,
  Sparkles,
  Code2,
  Palette,
  BookOpen,
  Check,
  AlertCircle,
} from "lucide-react";

const purposes = [
  "Hệ thống hóa nội dung lý thuyết Chương 1, Chương 2 và Chương 3 theo cấu trúc logic, dễ học.",
  "Gợi ý cách trình bày website học tập theo phong cách học thuật, hiện đại và trực quan.",
  "Hỗ trợ xây dựng câu hỏi ôn tập, đáp án và cách phản hồi đúng / sai cho người học.",
  "Gợi ý ý tưởng game học Triết học nhằm tăng tính tương tác và giúp ghi nhớ kiến thức tốt hơn.",
];

const aiSupports = [
  {
    icon: School,
    title: "Xây dựng và hệ thống hóa lý thuyết",
    points: [
      "Tóm tắt nội dung trọng tâm của Triết học Mác – Lênin theo từng chương.",
      "Sắp xếp kiến thức thành các phần: khái niệm, nội dung chính, mối quan hệ, ý nghĩa phương pháp luận.",
      "Diễn giải lại các nội dung khó như vật chất – ý thức, phép biện chứng duy vật, chủ nghĩa duy vật lịch sử theo cách dễ hiểu hơn.",
    ],
    prompt:
      "Bạn là một trợ lý học thuật về Triết học Mác – Lênin. Hãy giúp tôi hệ thống hóa nội dung Chương 1, Chương 2 và Chương 3 thành các phần rõ ràng, dễ hiểu, phù hợp để đưa vào website học tập cho sinh viên.",
  },
  {
    icon: Globe,
    title: "Thiết kế giao diện website học tập",
    points: [
      "Gợi ý bố cục trang chủ, trang chương học, trang ôn tập và trang game.",
      "Đề xuất phong cách giao diện màu nâu – kem, học thuật, tối giản, gần giống tài liệu cổ điển.",
      "Hỗ trợ chỉnh dark mode, card, hero banner, tab, sơ đồ tư duy và khu vực câu hỏi trắc nghiệm.",
    ],
    prompt:
      "Bạn là một UI/UX Designer chuyên nghiệp. Hãy thiết kế giao diện website học Triết học Mác – Lênin với phong cách học thuật, màu nâu – kem, có dark mode, có trang chủ, trang chương học, trang ôn tập và game tương tác.",
  },
  {
    icon: Gamepad2,
    title: "Hỗ trợ ý tưởng game học Triết học",
    points: [
      "Gợi ý cơ chế game giúp người học vừa chơi vừa ôn lại khái niệm.",
      "Đề xuất cách hiển thị thông báo đúng / sai, vượt màn, thất bại và giải thích kiến thức.",
      "Hỗ trợ xây dựng logic tương tác để game phù hợp với nội dung môn học.",
    ],
    prompt:
      "Hãy gợi ý một game tương tác đơn giản cho website học Triết học Mác – Lênin, trong đó người chơi phải chọn đúng khái niệm, quy luật hoặc nội dung lý thuyết để vượt qua thử thách.",
  },
];

const tools = [
  [
    "ChatGPT",
    "Hỗ trợ hệ thống hóa nội dung,chỉnh sửa code, chỉnh giao diện và tối ưu trải nghiệm học tập.",
  ],
  [
    "Claude",
    "Hỗ trợ kiểm tra chất lượng nội dung, rà soát logic trình bày và góp ý cách diễn đạt.",
  ],
];

const studentWorks = [
  "Chọn lọc nội dung phù hợp với yêu cầu môn học.",
  "Đối chiếu lại lý thuyết với tài liệu học tập.",
  "Chỉnh sửa bố cục, màu sắc và cách trình bày website.",
  "Bổ sung hình ảnh, câu hỏi ôn tập và nội dung phù hợp với sản phẩm cuối cùng.",
];

export default function AIAppendixPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden rounded-[2rem] border border-[#E8DCCB] bg-[#FFFDF8] p-10 dark:border-[#3A2A22] dark:bg-[#21150F]">
        <div className="absolute right-10 top-10 hidden opacity-10 md:block">
          <Bot size={180} />
        </div>

        <div className="relative z-10">
          <p className="mb-5 text-sm font-bold text-[#8B4A22]">
            Trang chủ 〉 Phụ lục AI
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight text-[#2B1A12] dark:text-white">
            Phụ lục: Ứng dụng Trí tuệ Nhân tạo AI
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5A331E]/75 dark:text-white/70">
            Trong quá trình xây dựng website học tập môn Triết học Mác – Lênin,
            nhóm đã sử dụng AI như một công cụ hỗ trợ học thuật, thiết kế và lập
            trình. AI không thay thế quá trình học tập, mà đóng vai trò hỗ trợ
            hệ thống hóa kiến thức, gợi ý ý tưởng và tối ưu cách trình bày.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-[1.7rem] border border-[#E8DCCB] bg-[#FFFDF8] p-8 dark:border-[#3A2A22] dark:bg-[#21150F]">
        <div className="mb-6 flex items-center gap-3">
          <Target className="text-[#A75A2A]" />
          <h2 className="text-3xl font-black text-[#2B1A12] dark:text-white">
            1. Mục đích sử dụng AI
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {purposes.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl bg-[#F7F1E8] p-5 dark:bg-[#2A1A12]"
            >
              <CheckCircle className="mt-1 shrink-0 text-[#8B4A22]" size={20} />
              <p className="font-semibold leading-7 text-[#5A331E] dark:text-white/75">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-6 flex items-center gap-3">
          <FileText className="text-[#A75A2A]" />
          <h2 className="text-3xl font-black text-[#2B1A12] dark:text-white">
            2. Nội dung AI đã hỗ trợ
          </h2>
        </div>

        <div className="space-y-6">
          {aiSupports.map(({ icon: Icon, title, points, prompt }, index) => (
            <article
              key={title}
              className="rounded-[1.7rem] border border-[#E8DCCB] bg-[#FFFDF8] p-8 dark:border-[#3A2A22] dark:bg-[#21150F]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B4A22] text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-black text-[#2B1A12] dark:text-white">
                  2.{index + 1}. {title}
                </h3>
              </div>

              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 leading-7 text-[#5A331E]/80 dark:text-white/70"
                  >
                    <Check size={18} className="mt-1 shrink-0 text-[#A75A2A]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-[#F7F1E8] p-5 dark:bg-[#2A1A12]">
                <p className="mb-3 text-sm font-black uppercase tracking-wide text-[#8B4A22]">
                  Prompt chính đã sử dụng
                </p>
                <p className="leading-7 text-[#5A331E] dark:text-white/75">
                  “{prompt}”
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.7rem] border border-[#E8DCCB] bg-[#FFFDF8] p-8 dark:border-[#3A2A22] dark:bg-[#21150F]">
        <div className="mb-6 flex items-center gap-3">
          <Brain className="text-[#A75A2A]" />
          <h2 className="text-3xl font-black text-[#2B1A12] dark:text-white">
            3. Vai trò của AI trong quá trình thực hiện
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              Search,
              "Tăng hiệu quả",
              "Hỗ trợ tìm kiếm, tóm tắt và xử lý thông tin nhanh hơn.",
            ],
            [
              Lightbulb,
              "Gợi ý sáng tạo",
              "Đề xuất cách trình bày, ý tưởng game và bố cục website.",
            ],
            [
              Clock,
              "Tiết kiệm thời gian",
              "Rút ngắn thời gian thử nghiệm giao diện và chỉnh sửa code.",
            ],
          ].map(([Icon, title, desc]) => (
            <div
              key={title}
              className="rounded-2xl bg-[#F7F1E8] p-6 dark:bg-[#2A1A12]"
            >
              <Icon className="text-[#A75A2A]" size={36} />
              <h3 className="mt-4 text-xl font-black text-[#2B1A12] dark:text-white">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-[#5A331E]/75 dark:text-white/70">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.7rem] border border-[#E8DCCB] bg-[#FFFDF8] p-8 dark:border-[#3A2A22] dark:bg-[#21150F]">
          <div className="mb-6 flex items-center gap-3">
            <Bot className="text-[#A75A2A]" />
            <h2 className="text-2xl font-black text-[#2B1A12] dark:text-white">
              4. Công cụ AI đã sử dụng
            </h2>
          </div>

          <div className="space-y-4">
            {tools.map(([name, desc]) => (
              <div
                key={name}
                className="rounded-2xl bg-[#F7F1E8] p-5 dark:bg-[#2A1A12]"
              >
                <h3 className="font-black text-[#8B4A22]">{name}</h3>
                <p className="mt-2 leading-7 text-[#5A331E]/75 dark:text-white/70">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.7rem] border border-[#E8DCCB] bg-[#FFFDF8] p-8 dark:border-[#3A2A22] dark:bg-[#21150F]">
          <div className="mb-6 flex items-center gap-3">
            <User className="text-[#A75A2A]" />
            <h2 className="text-2xl font-black text-[#2B1A12] dark:text-white">
              5. Phần sinh viên đã chỉnh sửa và hoàn thiện
            </h2>
          </div>

          <div className="space-y-3">
            {studentWorks.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-[#F7F1E8] px-4 py-3 dark:bg-[#2A1A12]"
              >
                <Sparkles className="mt-1 shrink-0 text-[#A75A2A]" size={18} />
                <p className="font-semibold leading-6 text-[#5A331E]/80 dark:text-white/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[1.7rem] border border-[#E8DCCB] bg-[#FFFDF8] p-8 dark:border-[#3A2A22] dark:bg-[#21150F]">
        <div className="mb-6 flex items-center gap-3">
          <ShieldCheck className="text-[#A75A2A]" />
          <h2 className="text-3xl font-black text-[#2B1A12] dark:text-white">
            6. Cam kết minh bạch và liêm chính học thuật
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-[#F7F1E8] p-6 dark:bg-[#2A1A12]">
            <AlertCircle className="text-[#A75A2A]" size={34} />
            <h3 className="mt-4 text-xl font-black text-[#2B1A12] dark:text-white">
              Không sử dụng AI để làm thay toàn bộ
            </h3>
            <p className="mt-3 leading-7 text-[#5A331E]/75 dark:text-white/70">
              AI chỉ được dùng như công cụ hỗ trợ. Nhóm vẫn chịu trách nhiệm đọc
              hiểu, chỉnh sửa, kiểm tra và hoàn thiện sản phẩm cuối cùng.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F7F1E8] p-6 dark:bg-[#2A1A12]">
            <BookOpen className="text-[#A75A2A]" size={34} />
            <h3 className="mt-4 text-xl font-black text-[#2B1A12] dark:text-white">
              Nội dung được chọn lọc và kiểm chứng
            </h3>
            <p className="mt-3 leading-7 text-[#5A331E]/75 dark:text-white/70">
              Các phần lý thuyết, câu hỏi ôn tập và nội dung trình bày được nhóm
              đối chiếu với tài liệu học tập trước khi đưa vào website.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
