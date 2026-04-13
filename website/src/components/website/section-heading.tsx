interface SectionHeadingProps {
  overline: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({
  overline,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center mb-12" : "mb-12"}>
      <p className="text-accent-gold italic mb-8 text-4xl font-bold font-cursive -rotate-10">
        {overline}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-600 leading-relaxed max-w-2xl">{description}</p>
      )}
    </div>
  );
}
