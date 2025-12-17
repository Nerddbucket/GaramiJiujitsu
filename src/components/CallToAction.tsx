const CallToAction = () => {
  return (
    <section className="bg-brand-gray text-white py-20 border-y border-white/5">
      <div className="container">
        <div className="text-center mb-12">
          <p className="tracking-[0.8em] text-xs text-white/60 uppercase">PSF 3</p>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[0.3em] my-4">
            X7DW
          </h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-3xl mx-auto text-center text-lg text-white/80 leading-relaxed space-y-6">
          <p>
            Are you ready to join a team that pushes each other not only in Jiu Jitsu but in life?
            There is only one way to get stronger. You must face the difficult things in life.
          </p>
          <p>
            Join our team, sign up for a free class, or explore our training paths. We forge athletes
            who embrace the grind and celebrate the wins together.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/free-trial"
            className="inline-flex items-center justify-center bg-white text-brand-dark px-10 py-3 rounded-full font-semibold tracking-[0.3em] uppercase hover:bg-brand-green hover:text-white transition-colors"
          >
            Sign Up for Free Trial
          </a>
          <a
            href="#programs"
            className="inline-flex items-center justify-center border border-white px-10 py-3 rounded-full font-semibold tracking-[0.3em] uppercase hover:bg-white hover:text-brand-dark transition-colors"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

