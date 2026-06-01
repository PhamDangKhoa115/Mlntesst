export default function PageHero({
  breadcrumb,
  title,
  desc,
  image,
  dark = false,
}) {
  return (
    <section
      className={`relative mb-6 overflow-hidden rounded-[1.5rem] border p-5 sm:mb-8 sm:rounded-[2rem] sm:p-8 lg:p-10 ${
        dark
          ? "border-[#3A2A22] bg-[#2B1308] text-white"
          : "border-[#E6D7C4] bg-[#FFFDF8] text-[#2B1A12] dark:border-[#3A2A22] dark:bg-[#21150F] dark:text-white"
      }`}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60 sm:object-right sm:opacity-70"
        />
      )}

      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-gradient-to-r from-[#2B1308] via-[#2B1308]/90 to-[#2B1308]/35"
            : "bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/95 to-[#FFFDF8]/45 dark:from-[#21150F] dark:via-[#21150F]/92 dark:to-[#21150F]/45"
        }`}
      />

      <div className="relative z-10">
        <p className="mb-4 text-xs font-semibold text-[#A75A2A] sm:mb-6 sm:text-sm">
          {breadcrumb}
        </p>

        <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5A331E]/75 dark:text-white/70 sm:mt-5 sm:text-base sm:leading-8">
          {desc}
        </p>
      </div>
    </section>
  );
}
