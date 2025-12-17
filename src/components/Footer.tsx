import { useState } from 'react';

// Logo component with fallback handling for Footer
const FooterLogo = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const [imgSrc, setImgSrc] = useState(`${baseUrl}assets/garami_logo.png`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.includes('garami_logo.svg')) {
      setImgSrc(`${baseUrl}assets/garami_logo.png`);
    } else if (imgSrc.includes('garami_logo.png')) {
      setImgSrc(`${baseUrl}assets/garami_logo.jpg`);
    } else if (imgSrc.includes('garami_logo.jpg')) {
      setImgSrc(`${baseUrl}assets/garami_logo.jpeg`);
    } else if (imgSrc.includes('garami_logo.jpeg')) {
      setImgSrc(`${baseUrl}assets/garami_jiujitsulogo.jpeg`);
    } else if (imgSrc.includes('garami_jiujitsulogo.jpeg')) {
      setImgSrc(`${baseUrl}assets/logo.png`);
    } else if (imgSrc.includes('.svg')) {
      setImgSrc(`${baseUrl}assets/logo.png`);
    } else if (imgSrc.includes('.png')) {
      setImgSrc(`${baseUrl}assets/logo.jpg`);
    } else if (imgSrc.includes('.jpg')) {
      setImgSrc(`${baseUrl}assets/logo.jpeg`);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return null; // Hide image if all formats fail
  }

  return (
    <img 
      src={imgSrc} 
      alt="Garami Jiu Jitsu Logo" 
      className="h-16 w-16 object-contain"
      onError={handleError}
    />
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16 border-t border-white/5">
      <div className="container text-center space-y-10">
        <a
          href="/free-trial"
          className="inline-flex items-center justify-center bg-brand-green text-white px-10 py-4 rounded-full font-semibold tracking-[0.3em] uppercase hover:bg-white hover:text-brand-dark transition-colors"
        >
          Free Trial Class
        </a>

        <div className="flex flex-col items-center space-y-4">
          <FooterLogo />
          <div className="space-y-3 text-sm">
            <p className="uppercase tracking-[0.4em] text-white/60">Garami Jiu Jitsu</p>
          <p className="text-white/70">
            5519 Waldos Beach Road, Fayetteville, North Carolina 28306, United States
          </p>
          <p>
            <a href="tel:9109881212" className="text-brand-green hover:underline">
              (910) 988-1212
            </a>
          </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Follow Us</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/61579625956144/photos/d41d8cd9/122107151786987531/?set=a.122107148792987531&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green transition-colors group"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current text-white group-hover:text-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/garamijiujitsu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green transition-colors group"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current text-white group-hover:text-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@garamijiujitsu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green transition-colors group"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 fill-current text-white group-hover:text-white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-xs text-white/50 space-y-2">
          <p>Copyright © 2019 — Garami Jiu Jitsu</p>
          <p>This website uses cookies. By using this site, you accept our use of cookies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

