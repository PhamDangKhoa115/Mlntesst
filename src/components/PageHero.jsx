export default function PageHero({
  breadcrumb,
  title,
  desc,
  image,
  dark = false,
}) {
  return (
    <section
      className={`relative mb-8 overflow-hidden rounded-[2rem] border p-10 ${
        dark
          ? "border-[#3A2A22] bg-[#2B1308] text-white"
          : "border-[#E6D7C4] bg-[#FFFDF8] text-[#2B1A12] dark:border-[#3A2A22] dark:bg-[#21150F] dark:text-white"
      }`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-right opacity-70"
      />

      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-gradient-to-r from-[#2B1308] via-[#2B1308]/90 to-[#2B1308]/25"
            : "bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/95 to-[#FFFDF8]/35 dark:from-[#21150F] dark:via-[#21150F]/92 dark:to-[#21150F]/35"
        }`}
      />

      <div className="relative z-10">
        <p className="mb-6 text-sm text-[#A75A2A]">{breadcrumb}</p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight">{title}</h1>

        <p className="mt-5 max-w-3xl leading-8 text-[#5A331E]/75 dark:text-white/70">
          {desc}
        </p>
      </div>
    </section>
  );
}
