export default function SectionHeader({ eyebrow, title, desc, image }) {
  return (
    <section className="relative mb-6 overflow-hidden rounded-[1.5rem] border border-[#E8DCCB] bg-[#FFFDF8] p-5 dark:border-[#3A2A22] dark:bg-[#21150F] sm:mb-8 sm:rounded-[2rem] sm:p-8 lg:p-10">
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 opacity-80 md:block"
        style={{
          backgroundImage: image
            ? `linear-gradient(90deg,#FFFDF8 0%,rgba(255,253,248,.75) 35%,rgba(255,253,248,.1)), url(${image})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-3xl">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold text-[#8B4A22] sm:text-sm">
            Trang chủ 〉 {eyebrow}
          </p>
        )}

        <h1 className="text-3xl font-black tracking-tight text-[#2B1A12] dark:text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>

        {desc && (
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5A331E]/75 dark:text-white/70 sm:mt-5 sm:text-base sm:leading-8">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
