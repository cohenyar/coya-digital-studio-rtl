import { Section } from "./Section";

export function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-8">
        <div className="absolute inset-0 pointer-events-none" style={{background: "var(--gradient-hero)"}} />
        <div className="container-x relative text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient leading-tight">{title}</h1>
        </div>
      </section>
      <Section>
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-12 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-display font-bold mb-3 text-white">{s.h}</h2>
              <p className="text-white/70 leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
