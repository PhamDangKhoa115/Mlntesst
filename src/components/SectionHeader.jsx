export default function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8B5A36]">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-black tracking-tight md:text-5xl">
        {title}
      </h1>
      {desc && (
        <p className="mt-4 max-w-3xl leading-7 text-[#5A331E]/75">{desc}</p>
      )}
    </div>
  );
}
