import { useState } from 'react';

// Logo component with fallback handling for Hero
const HeroLogo = () => {
  const [imgSrc, setImgSrc] = useState('/assets/garami_logo.png');
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.includes('garami_logo.svg')) {
      setImgSrc('/assets/garami_logo.png');
    } else if (imgSrc.includes('garami_logo.png')) {
      setImgSrc('/assets/garami_logo.jpg');
    } else if (imgSrc.includes('garami_logo.jpg')) {
      setImgSrc('/assets/garami_logo.jpeg');
    } else if (imgSrc.includes('garami_logo.jpeg')) {
      setImgSrc('/assets/garami_jiujitsulogo.jpeg');
    } else if (imgSrc.includes('garami_jiujitsulogo.jpeg')) {
      setImgSrc('/assets/logo.png');
    } else if (imgSrc.includes('.svg')) {
      setImgSrc('/assets/logo.png');
    } else if (imgSrc.includes('.png')) {
      setImgSrc('/assets/logo.jpg');
    } else if (imgSrc.includes('.jpg')) {
      setImgSrc('/assets/logo.jpeg');
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return null; // Hide image if all formats fail
  }

  return (
    <div className="flex justify-center mb-8">
      <img 
        src={imgSrc} 
        alt="Garami Jiu Jitsu Logo" 
        className="h-24 md:h-32 w-24 md:w-32 object-contain"
        onError={handleError}
      />
    </div>
  );
};

const Hero = () => {
  const repeated = Array(4).fill("GARAMI JIU JITSU");

  return (
    <section id="home" className="relative overflow-hidden bg-brand-dark text-white py-24 md:py-36">
      <div className="absolute inset-0 opacity-30 bg-hero-grid bg-[length:120px_120px]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="rotate-2 translate-y-[-30%] space-y-6 text-[12vw] font-display text-white/5 leading-none">
          {repeated.map((text, index) => (
            <p key={index} className="whitespace-nowrap">{text}</p>
          ))}
        </div>
      </div>

      <div className="relative container text-center">
        <HeroLogo />
        <p className="uppercase tracking-[0.6em] text-xs text-white/60 mb-6">
          Fayetteville, North Carolina
        </p>
        <h1 className="text-4xl md:text-6xl font-display tracking-[0.2em] leading-tight mb-6">
          Garami Jiu Jitsu
        </h1>
        <p className="text-lg md:text-2xl text-white/80 italic mb-4">
          “to entwine, coil around, get caught in”
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 mb-10">
          Strengthen every part of your life through Brazilian Jiu Jitsu. Our team builds resilient athletes,
          disciplined kids, and confident adults through proven training systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-brand-green px-10 py-3 uppercase tracking-[0.3em] rounded-full font-semibold hover:bg-white hover:text-brand-dark transition-colors"
          >
            Free Class
          </a>
          <a
            href="#locations"
            className="inline-flex items-center justify-center border border-white/40 px-10 py-3 uppercase tracking-[0.3em] rounded-full font-semibold hover:bg-white hover:text-brand-dark transition-colors"
          >
            Locations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

