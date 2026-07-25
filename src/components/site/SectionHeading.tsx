export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
