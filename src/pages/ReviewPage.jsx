import { useMemo, useRef, useState } from "react";
import Layout from "../components/Layout";
import {
  questionBank,
  getQuestionsByChapter,
  generateMockExam,
  calculateScore,
  getChapterResult,
} from "../data/mln111QuestionBank";

const reviewTabs = [
  {
    id: "chapter-1",
    title: "Chương 1",
    desc: "Triết học và vai trò của triết học",
    type: "chapter",
    chapter: "Chương 1",
  },
  {
    id: "chapter-2",
    title: "Chương 2",
    desc: "Chủ nghĩa duy vật biện chứng",
    type: "chapter",
    chapter: "Chương 2",
  },
  {
    id: "chapter-3",
    title: "Chương 3",
    desc: "Chủ nghĩa duy vật lịch sử",
    type: "chapter",
    chapter: "Chương 3",
  },
  {
    id: "mock-exam",
    title: "Thi thử MLN111",
    desc: "60 câu random từ 3 chương",
    type: "mockExam",
  },
];

export default function ReviewPage() {
  const [activeTab, setActiveTab] = useState(reviewTabs[0]);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [mockQuestions, setMockQuestions] = useState(() => generateMockExam());
  const questionRefs = useRef({});

  const activeQuestions = useMemo(() => {
    if (activeTab.type === "mockExam") {
      return mockQuestions;
    }

    return getQuestionsByChapter(activeTab.chapter);
  }, [activeTab, mockQuestions]);

  const score = submitted ? calculateScore(selected, activeQuestions) : null;

  const chapterResult = submitted
    ? getChapterResult(selected, activeQuestions)
    : null;

  const answeredCount = Object.keys(selected).length;

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
    setSelected({});
    setSubmitted(false);

    if (tab.type === "mockExam") {
      setMockQuestions(generateMockExam());
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSelect = (questionId, optionIndex) => {
    if (submitted) return;

    setSelected((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleRetryMockExam = () => {
    setMockQuestions(generateMockExam());
    setSelected({});
    setSubmitted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleReset = () => {
    setSelected({});
    setSubmitted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToNextQuestion = (qIndex) => {
    const nextQuestion = activeQuestions[qIndex + 1];

    if (!nextQuestion) return;

    questionRefs.current[nextQuestion.id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Layout>
      <section className="mb-8">
        <p className="mb-4 text-sm text-[#8B4A22]">Trang chủ 〉 Ôn tập</p>

        <div className="rounded-[1.5rem] border border-[#E6D7C4] bg-[#FFFDF8] p-6 dark:border-[#3A2A22] dark:bg-[#21150F] sm:p-8">
          <h1 className="text-3xl font-black text-[#2B1A12] dark:text-white sm:text-5xl">
            Ôn tập & Thi thử MLN111
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5A331E]/75 dark:text-white/65 sm:text-base sm:leading-8">
            Hệ thống gồm 300 câu hỏi: Chương 1, Chương 2, Chương 3 và phần thi
            thử 60 câu random giống format đề MLN111.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-[#F4E9DB] p-4 font-black text-[#5A331E] dark:bg-[#2A1A12] dark:text-white">
              Tổng câu hỏi: {questionBank.length}
            </div>

            <div className="rounded-xl bg-[#F4E9DB] p-4 font-black text-[#5A331E] dark:bg-[#2A1A12] dark:text-white">
              Đang hiển thị: {activeQuestions.length}
            </div>

            <div className="rounded-xl bg-[#F4E9DB] p-4 font-black text-[#5A331E] dark:bg-[#2A1A12] dark:text-white">
              Đã chọn: {answeredCount}/{activeQuestions.length}
            </div>
          </div>
        </div>
      </section>

      <section className="grid min-w-0 gap-6 overflow-hidden lg:grid-cols-[310px_minmax(0,1fr)]">
        <aside className="min-w-0 overflow-hidden rounded-[1.3rem] border border-[#E6D7C4] bg-[#FFFDF8] p-4 dark:border-[#3A2A22] dark:bg-[#21150F] sm:p-5 lg:sticky lg:top-24 lg:self-start">
          <h2 className="mb-4 font-black text-[#2B1A12] dark:text-white">
            Danh sách ôn tập
          </h2>

          <div className="flex max-w-full gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
            {reviewTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleChangeTab(tab)}
                className={`flex min-w-[210px] shrink-0 gap-3 rounded-xl px-4 py-4 text-left text-sm font-bold lg:min-w-0 lg:w-full ${
                  activeTab.id === tab.id
                    ? "bg-[#F1E3D4] text-[#8B4A22] dark:bg-[#2A1A12] dark:text-[#F6D2B5]"
                    : "text-[#2B1A12] hover:bg-[#F7F1E8] dark:text-white dark:hover:bg-[#2A1A12]"
                }`}
              >
                <span className="shrink-0">{index + 1}</span>

                <span>
                  <span className="block leading-6">{tab.title}</span>
                  <span className="block text-xs font-semibold opacity-70">
                    {tab.desc}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {activeTab.type === "mockExam" && (
            <button
              onClick={handleRetryMockExam}
              className="mt-5 w-full rounded-xl bg-[#8B4A22] px-4 py-3 text-sm font-black text-white transition hover:bg-[#A75A2A]"
            >
              Random đề mới
            </button>
          )}
        </aside>

        <div className="min-w-0 overflow-hidden rounded-[1.3rem] border border-[#E6D7C4] bg-[#FFFDF8] p-5 dark:border-[#3A2A22] dark:bg-[#21150F] sm:p-8">
          <div className="mb-8 rounded-xl bg-[#F7F1E8] p-5 dark:bg-[#2A1A12]">
            <h2 className="text-2xl font-black text-[#2B1A12] dark:text-white">
              {activeTab.title}
            </h2>

            <p className="mt-2 text-sm font-semibold leading-6 text-[#5A331E]/75 dark:text-white/65">
              {activeTab.type === "mockExam"
                ? "Đề thi thử gồm 60 câu random: 20 câu Chương 1, 20 câu Chương 2, 20 câu Chương 3."
                : `Danh sách 100 câu hỏi thuộc ${activeTab.title}.`}
            </p>
          </div>

          {submitted && score && (
            <div className="mb-8 rounded-2xl border border-green-300 bg-green-50 p-5 text-green-800">
              <h3 className="text-xl font-black">
                Kết quả: {score.correct}/{score.total} câu đúng (
                {score.percentage}%)
              </h3>

              {chapterResult && (
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {Object.entries(chapterResult).map(([chapter, result]) => (
                    <div
                      key={chapter}
                      className="rounded-xl bg-white px-4 py-3 text-sm font-black"
                    >
                      {chapter}: {result.correct}/{result.total}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeQuestions.map((quiz, qIndex) => {
            const isLastQuestion = qIndex === activeQuestions.length - 1;
            const selectedIndex = selected[quiz.id];
            const hasSelected = selectedIndex !== undefined;
            const isCorrect = selectedIndex === quiz.correctAnswer;

            return (
              <div
                key={quiz.id}
                ref={(el) => {
                  questionRefs.current[quiz.id] = el;
                }}
                className="scroll-mt-28 mb-12 min-w-0 last:mb-0 sm:mb-16"
              >
                <p className="mb-4 text-sm font-bold text-[#8B4A22]">
                  Câu {qIndex + 1}/{activeQuestions.length} · {quiz.chapter}
                </p>

                <h3 className="break-words text-xl font-black leading-8 text-[#2B1A12] dark:text-white sm:text-2xl sm:leading-9">
                  {quiz.question}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#8B4A22]">
                  Chủ đề: {quiz.category}
                </p>

                <div className="mt-6 space-y-4">
                  {quiz.options.map((option, index) => {
                    const active = selectedIndex === index;
                    const correct = index === quiz.correctAnswer;

                    let optionClass =
                      "border-[#E6D7C4] bg-white text-[#5A331E] hover:bg-[#F7F1E8] dark:bg-[#F4E9DB] dark:text-[#5A331E]";

                    if (submitted && correct) {
                      optionClass =
                        "border-green-500 bg-green-100 text-green-800";
                    } else if (submitted && active && !correct) {
                      optionClass = "border-red-400 bg-red-100 text-red-700";
                    } else if (!submitted && active) {
                      optionClass =
                        "border-[#8B4A22] bg-[#F1E3D4] text-[#8B4A22]";
                    }

                    return (
                      <button
                        key={`${quiz.id}-${option}`}
                        onClick={() => handleSelect(quiz.id, index)}
                        className={`flex w-full min-w-0 items-start gap-3 rounded-xl border px-4 py-4 text-left text-sm font-semibold transition sm:items-center sm:gap-4 sm:px-5 sm:text-base ${optionClass}`}
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm ${
                            submitted && correct
                              ? "border-green-500 bg-green-500 text-white"
                              : submitted && active && !correct
                                ? "border-red-400 bg-red-400 text-white"
                                : active
                                  ? "border-[#8B4A22] bg-[#8B4A22] text-white"
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

                {submitted && hasSelected && (
                  <p
                    className={`mt-5 break-words rounded-xl px-4 py-3 text-sm font-bold leading-6 ${
                      isCorrect
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {isCorrect
                      ? "Bạn đã chọn đúng!"
                      : `Bạn đã chọn sai. Đáp án đúng: ${
                          quiz.options[quiz.correctAnswer]
                        }`}
                  </p>
                )}

                {submitted && !hasSelected && (
                  <p className="mt-5 break-words rounded-xl bg-yellow-100 px-4 py-3 text-sm font-bold leading-6 text-yellow-800">
                    Bạn chưa chọn đáp án. Đáp án đúng:{" "}
                    {quiz.options[quiz.correctAnswer]}
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

          <div className="mt-10 flex flex-col gap-3 border-t border-[#E6D7C4] pt-6 dark:border-[#3A2A22] sm:flex-row">
            <button
              onClick={() => setSubmitted(true)}
              className="rounded-xl bg-[#8B4A22] px-6 py-4 font-black text-white transition hover:bg-[#A75A2A]"
            >
              Nộp bài / Xem kết quả
            </button>

            <button
              onClick={handleReset}
              className="rounded-xl border border-[#E6D7C4] px-6 py-4 font-black text-[#8B4A22] transition hover:bg-[#F7F1E8] dark:border-[#3A2A22] dark:text-[#F6D2B5] dark:hover:bg-[#2A1A12]"
            >
              Làm lại
            </button>

            {activeTab.type === "mockExam" && (
              <button
                onClick={handleRetryMockExam}
                className="rounded-xl border border-[#E6D7C4] px-6 py-4 font-black text-[#8B4A22] transition hover:bg-[#F7F1E8] dark:border-[#3A2A22] dark:text-[#F6D2B5] dark:hover:bg-[#2A1A12]"
              >
                Thi lại đề mới
              </button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
