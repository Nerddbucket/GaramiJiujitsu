const Location = () => {
  return (
    <section id="locations" className="py-24 bg-brand-dark text-white">
      <div className="container">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.6em] text-xs text-white/60">
            Location
          </p>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[0.2em] mt-4">
            Garami Jiu Jitsu
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
          <div id="fayetteville-downtown" className="bg-brand-gray border border-white/10 rounded-2xl p-8 shadow-brand scroll-mt-20">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
              Fayetteville
            </p>
            <h3 className="text-3xl font-display uppercase tracking-[0.2em] mb-6">
              Garami Jiu Jitsu
            </h3>
            <p className="text-lg text-white/80 mb-4">
              5519 Waldos Beach Road<br />Fayetteville, North Carolina 28306<br />United States
            </p>
            <p className="text-lg text-white/80 mb-8">
              Text:{" "}
              <a href="tel:9109881212" className="text-brand-green hover:underline">
                (910) 988-1212
              </a>
            </p>
            <a
              href="https://maps.google.com/?q=5519+Waldos+Beach+Road,+Fayetteville,+NC+28306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 uppercase tracking-[0.3em] text-sm font-semibold"
            >
              Get Directions
              <span className="block h-px w-16 bg-white" />
            </a>
          </div>
          
          <div id="schedule" className="bg-brand-gray border border-white/10 rounded-2xl p-8 shadow-brand scroll-mt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
            Schedule
          </p>
          <h4 className="text-2xl font-display uppercase tracking-[0.2em] mb-6">
            Training Schedule
          </h4>
          <ul className="space-y-4 text-white/80 text-lg">
            <li className="flex justify-between border-b border-white/10 pb-3">
              <span>Monday - Friday</span>
              <span>4:00 pm - 9:00 pm</span>
            </li>
            <li className="flex justify-between pb-3">
              <span>Saturday</span>
              <span>8:30 am - 12:30 pm</span>
            </li>
          </ul>
          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3">
              Stay Connected
            </p>
            <p className="text-white/70">
              Follow us for event updates, seminars, and free class announcements.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

