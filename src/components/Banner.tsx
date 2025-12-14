const Banner = () => {
  return (
    <div className="bg-brand-green text-white text-center py-2 px-4 text-xs sm:text-sm tracking-[0.3em] uppercase">
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 font-semibold"
      >
        <span className="h-2 w-2 rounded-full bg-white" />
        Free Women&apos;s Class in Fayetteville! Click Here!
        <span className="h-2 w-2 rounded-full bg-white" />
      </a>
    </div>
  );
};

export default Banner;

