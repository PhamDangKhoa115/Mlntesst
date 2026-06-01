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
      <section className="mb-8 sm:mb-10">
        <p className="mb-4 text-sm text-[#8B4A22] sm:mb-5">
          Trang chủ 〉 Ôn tập
        </p>

        <div className="grid gap-8">
          <div>
            <h1 className="text-3xl font-black text-[#2B1A12] dark:text-white sm:text-5xl">
              Ôn tập & Trắc nghiệm
            </h1>

            <p className="mt-4 text-sm leading-7 text-[#5A331E]/75 dark:text-white/65 sm:mt-5 sm:text-base sm:leading-8">
              Kiểm tra kiến thức và củng cố những nội dung đã học.
            </p>

            <p className="mt-3 text-sm font-bold text-[#8B4A22]">
              Tổng số câu hỏi: {totalQuestions}
            </p>
          </div>
        </div>
      </section>

      <section className="grid min-w-0 gap-6 overflow-hidden lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="min-w-0 overflow-hidden rounded-[1.3rem] border border-[#E6D7C4] bg-[#FFFDF8] p-4 dark:border-[#3A2A22] dark:bg-[#21150F] sm:p-5 lg:sticky lg:top-24 lg:self-start">
          <h2 className="mb-4 font-black text-[#2B1A12] dark:text-white">
            Danh sách câu hỏi
          </h2>

          <div className="flex max-w-full gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
            {reviewGroups.map((group, index) => (
              <button
                key={group.title}
                onClick={() => {
                  setActiveGroup(group.title);
                  setSelected({});
                }}
                className={`flex min-w-[180px] max-w-[180px] shrink-0 gap-3 rounded-xl px-4 py-4 text-left text-sm font-bold lg:min-w-0 lg:max-w-none lg:w-full ${
                  activeGroup === group.title
                    ? "bg-[#F1E3D4] text-[#8B4A22]"
                    : "text-[#2B1A12] hover:bg-[#F7F1E8] dark:text-white dark:hover:bg-[#2A1A12]"
                }`}
              >
                <span className="shrink-0">{index + 1}</span>
                <span className="line-clamp-2 break-words leading-6">
                  {group.title}
                </span>
              </button>
            ))}
          </div>
        </aside>

        <div className="min-w-0 overflow-hidden rounded-[1.3rem] border border-[#E6D7C4] bg-[#FFFDF8] p-5 dark:border-[#3A2A22] dark:bg-[#21150F] sm:p-8">
          {activeQuestions.map((quiz, qIndex) => {
            const key = `${activeGroup}-${qIndex}`;
            const isLastQuestion = qIndex === activeQuestions.length - 1;

            return (
              <div
                key={key}
                ref={(el) => {
                  questionRefs.current[key] = el;
                }}
                className="scroll-mt-28 mb-12 min-w-0 last:mb-0 sm:mb-16"
              >
                <p className="mb-4 text-sm font-bold text-[#8B4A22]">
                  Câu {qIndex + 1}/{activeQuestions.length}
                </p>

                <h3 className="break-words text-xl font-black leading-8 text-[#2B1A12] dark:text-white sm:text-2xl sm:leading-9">
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
                        className={`flex w-full min-w-0 items-start gap-3 rounded-xl border px-4 py-4 text-left text-sm font-semibold transition sm:items-center sm:gap-4 sm:px-5 sm:text-base ${optionClass}`}
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm ${
                            active && correct
                              ? "border-green-500 bg-green-500 text-white"
                              : active && !correct
                                ? "border-red-400 bg-red-400 text-white"
                                : "border-[#D8C8B8] bg-white text-[#8B4A22]"
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>

                        <span className="min-w-0 break-words leading-6">
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {selected[key] && (
                  <p
                    className={`mt-5 break-words rounded-xl px-4 py-3 text-sm font-bold leading-6 ${
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
                    className="mt-6 w-full rounded-lg bg-[#8B4A22] px-6 py-3 font-bold text-white transition hover:bg-[#A75A2A] sm:w-auto"
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
