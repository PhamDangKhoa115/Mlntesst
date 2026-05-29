export default function SectionHeader({ eyebrow, title, desc, image }) {
  return (
    <section className="relative mb-8 overflow-hidden rounded-[2rem] border border-[#E8DCCB] bg-[#FFFDF8] p-8 md:p-10">
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
          <p className="mb-4 text-sm font-semibold text-[#8B4A22]">
            Trang chủ 〉 {eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-black tracking-tight text-[#2B1A12] md:text-5xl">
          {title}
        </h1>

        {desc && (
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5A331E]/75">
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
