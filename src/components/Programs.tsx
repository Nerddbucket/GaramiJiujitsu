const Programs = () => {
  const programs = [
    {
      title: "Kids Jiu Jitsu Program",
      description:
        "Does your child need discipline? Self confidence? Mental and spiritual strength? We forge warriors through structure, accountability, and a whole lot of fun.",
      cta: "Learn More",
    },
    {
      title: "Adults Jiu Jitsu Program",
      description:
        "Brazilian Jiu Jitsu will change your life. Our ECO Model blends technique, intensity, and community to develop skillful grapplers quickly.",
      cta: "ECO Model",
    },
    {
      title: "MMA and Striking Program",
      description:
        "Compliment your Jiu Jitsu with striking, wrestling, and movement. Build a complete game with coaches that understand the modern fight landscape.",
      cta: "Learn More",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-white text-brand-dark">
      <div className="container">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.6em] text-xs text-brand-dark/60">
            Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[0.2em] mt-4">
            Brazilian Jiu Jitsu and MMA Programs
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {programs.map((program, index) => {
            // Create anchor ID from program title
            const anchorId = program.title.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '');
            return (
            <div
              key={index}
              id={anchorId}
              className="bg-brand-accent/80 rounded-2xl p-8 shadow-lg border border-brand-dark/10 hover:-translate-y-2 transition-transform scroll-mt-20"
            >
              <p className="text-sm uppercase tracking-[0.4em] text-brand-dark/60 mb-4">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-display uppercase tracking-[0.15em] mb-4">
                {program.title}
              </h3>
              <p className="text-base text-brand-dark/80 leading-relaxed mb-8">
                {program.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 uppercase tracking-[0.3em] text-sm font-semibold"
              >
                {program.cta}
                <span className="block h-px w-12 bg-brand-dark" />
              </a>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;

