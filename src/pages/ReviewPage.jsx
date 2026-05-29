import { useMemo, useRef, useState } from "react";
import Layout from "../components/Layout";
import { reviewGroups } from "../data/mlnData";

export default function ReviewPage() {
  const [selected, setSelected] = useState({});
  const [activeGroup, setActiveGroup] = useState(reviewGroups[0].title);
  const questionRefs = useRef({});

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

  const scrollToNextQuestion = (qIndex) => {
    const nextKey = `${activeGroup}-${qIndex + 1}`;
    questionRefs.current[nextKey]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Layout>
      <section className="mb-10">
        <p className="mb-5 text-sm text-[#8B4A22]">Trang chủ 〉 Ôn tập</p>

        <div className="grid gap-8 ">
          <div>
            <h1 className="text-5xl font-black text-[#2B1A12] dark:text-white">
              Ôn tập & Trắc nghiệm
            </h1>
            <p className="mt-5 leading-8 text-[#5A331E]/75 dark:text-white/65">
              Kiểm tra kiến thức và củng cố những nội dung đã học.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="rounded-[1.3rem] border border-[#E6D7C4] bg-[#FFFDF8] p-5 dark:border-[#3A2A22] dark:bg-[#21150F]">
          <h2 className="mb-4 font-black text-[#2B1A12] dark:text-white">
            Danh sách câu hỏi
          </h2>

          <div className="space-y-2">
            {reviewGroups.map((group, index) => (
              <button
                key={group.title}
                onClick={() => {
                  setActiveGroup(group.title);
                  setSelected({});
                }}
                className={`flex w-full gap-4 rounded-xl px-4 py-4 text-left text-sm font-bold ${
                  activeGroup === group.title
                    ? "bg-[#F1E3D4] text-[#8B4A22]"
                    : "text-[#2B1A12] hover:bg-[#F7F1E8] dark:text-white dark:hover:bg-[#2A1A12]"
                }`}
              >
                <span>{index + 1}</span>
                <span>{group.title}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="rounded-[1.3rem] border border-[#E6D7C4] bg-[#FFFDF8] p-8 dark:border-[#3A2A22] dark:bg-[#21150F]">
          {activeQuestions.map((quiz, qIndex) => {
            const key = `${activeGroup}-${qIndex}`;
            const isLastQuestion = qIndex === activeQuestions.length - 1;

            return (
              <div
                key={key}
                ref={(el) => {
                  questionRefs.current[key] = el;
                }}
                className="scroll-mt-28 mb-16 last:mb-0"
              >
                <p className="mb-4 text-sm font-bold text-[#8B4A22]">
                  Câu {qIndex + 1}/{activeQuestions.length}
                </p>

                <h3 className="text-2xl font-black text-[#2B1A12] dark:text-white">
                  {quiz.q}
                </h3>

                <div className="mt-6 space-y-4">
                  {quiz.options.map((option, index) => {
                    const active = selected[key] === option;
                    const correct = option === quiz.answer;

                    let optionClass =
                      "border-[#E6D7C4] bg-white text-[#5A331E] hover:bg-[#F7F1E8] dark:bg-[#F4E9DB] dark:text-[#5A331E]";

                    if (active && correct) {
                      optionClass =
                        "border-green-500 bg-green-100 text-green-800";
                    }

                    if (active && !correct) {
                      optionClass = "border-red-400 bg-red-100 text-red-700";
                    }

                    return (
                      <button
                        key={option}
                        onClick={() =>
                          setSelected({ ...selected, [key]: option })
                        }
                        className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left font-semibold transition ${optionClass}`}
                      >
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full border text-sm ${
                            active && correct
                              ? "border-green-500 bg-green-500 text-white"
                              : active && !correct
                                ? "border-red-400 bg-red-400 text-white"
                                : "border-[#D8C8B8] bg-white text-[#8B4A22]"
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>

                        {option}
                      </button>
                    );
                  })}
                </div>

                {selected[key] && (
                  <p
                    className={`mt-5 rounded-xl px-4 py-3 text-sm font-bold ${
                      selected[key] === quiz.answer
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {selected[key] === quiz.answer
                      ? "Bạn đã chọn đúng!"
                      : `Bạn đã chọn sai. Đáp án đúng: ${quiz.answer}`}
                  </p>
                )}

                {!isLastQuestion && (
                  <button
                    onClick={() => scrollToNextQuestion(qIndex)}
                    className="mt-6 rounded-lg bg-[#8B4A22] px-6 py-3 font-bold text-white transition hover:bg-[#A75A2A]"
                  >
                    Câu tiếp theo →
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
