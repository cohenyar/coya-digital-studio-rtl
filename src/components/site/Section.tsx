import type { ReactNode } from "react";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`${center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} mb-14`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/80 mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient leading-[1.1]">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-white/60 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
