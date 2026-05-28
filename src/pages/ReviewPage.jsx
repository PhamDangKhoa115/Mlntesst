import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import { reviewGroups } from "../data/mlnData";

export default function ReviewPage() {
  const [selected, setSelected] = useState({});
  const [activeGroup, setActiveGroup] = useState(reviewGroups[0].title);

  const activeQuestions = useMemo(
    () =>
      reviewGroups.find((group) => group.title === activeGroup)?.questions ||
      [],
    [activeGroup],
  );

  const totalQuestions = reviewGroups.reduce(
    (sum, group) => sum + group.questions.length,
    0,
  );

  return (
    <Layout>
      <SectionHeader
        eyebrow="Ôn tập"
        title="Ôn tập lý thuyết & Trắc nghiệm"
        desc={`Bộ ${totalQuestions}+ câu hỏi được tạo từ nội dung lý thuyết Chương mở đầu, chủ nghĩa duy vật biện chứng, phép biện chứng duy vật, lý luận nhận thức và chủ nghĩa duy vật lịch sử.`}
      />

      <div className="mb-8 grid gap-5 md:grid-cols-5">
        {["Trắc nghiệm", "Flashcard", "Đúng / Sai", "Ghép cặp", "Timeline"].map(
          (item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#E5D8C8] bg-[#FFFDF8] p-6 text-center shadow-sm"
            >
              <p className="text-3xl">📝</p>
              <h3 className="mt-3 font-bold">{item}</h3>
            </div>
          ),
        )}
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {reviewGroups.map((group) => (
          <button
            key={group.title}
            onClick={() => setActiveGroup(group.title)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              activeGroup === group.title
                ? "bg-[#8B5A36] text-white"
                : "border border-[#E5D8C8] bg-[#FFFDF8] text-[#8B5A36] hover:bg-[#F7F1E8]"
            }`}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        {activeQuestions.map((quiz, qIndex) => {
          const key = `${activeGroup}-${qIndex}`;
          return (
            <div
              key={quiz.q}
              className="rounded-[2rem] border border-[#E5D8C8] bg-[#FFFDF8] p-6 shadow-sm"
            >
              <h3 className="font-black">
                {qIndex + 1}. {quiz.q}
              </h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {quiz.options.map((option) => {
                  const active = selected[key] === option;
                  const correct = option === quiz.answer;
                  return (
                    <button
                      key={option}
                      onClick={() =>
                        setSelected({ ...selected, [key]: option })
                      }
                      className={`rounded-xl border p-4 text-left transition ${
                        active && correct
                          ? "border-green-500 bg-green-50"
                          : active
                            ? "border-red-400 bg-red-50"
                            : "border-[#E5D8C8] bg-[#F7F1E8] hover:border-[#8B5A36]"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {selected[key] && (
                <p className="mt-4 text-sm font-bold text-[#8B5A36]">
                  Đáp án: {quiz.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
