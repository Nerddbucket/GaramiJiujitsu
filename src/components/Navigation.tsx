import { useState } from 'react';
import { Link } from 'react-router-dom';

// Logo component with fallback handling
const LogoImage = ({ className }: { className: string }) => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <img 
      src={`${baseUrl}assets/garami_logo.png`} 
      alt="Garami Jiu Jitsu Logo" 
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src.includes('.png')) {
          target.src = `${baseUrl}assets/garami_logo.jpg`;
        } else if (target.src.includes('.jpg')) {
          target.src = `${baseUrl}assets/garami_logo.jpeg`;
        } else if (target.src.includes('.jpeg')) {
          target.src = `${baseUrl}assets/logo.png`;
        }
      }}
    />
  );
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', isHash: false },
    { name: 'Location', href: '#locations', isHash: true },
    { name: 'Schedule', href: '#schedule', isHash: true },
    { name: 'Programs', href: '#programs', isHash: true, submenu: [
      { label: 'Kids Jiu Jitsu Program', anchor: '#kids-jiu-jitsu-program' },
      { label: 'Adults Jiu Jitsu Program', anchor: '#adults-jiu-jitsu-program' },
      { label: 'MMA and Striking Program', anchor: '#mma-and-striking-program' },
      { label: 'Women\'s Jiu Jitsu Classes', anchor: '#programs' }
    ]},
    { name: 'Gallery', href: '#gallery', isHash: true },
    { name: 'Contact', href: '#contact', isHash: true },
    { name: 'Next Event', href: '#contact', isHash: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur border-b border-white/5">
      <div className="container">
        <div className="flex items-center justify-between h-16 text-white">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <LogoImage className="h-14 w-auto max-w-[120px] object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 text-sm uppercase tracking-[0.3em]">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.isHash ? (
                  <a
                    href={item.href}
                    className="hover:text-brand-green transition-colors py-6 inline-flex"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="hover:text-brand-green transition-colors py-6 inline-flex"
                  >
                    {item.name}
                  </Link>
                )}
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-brand-gray text-xs tracking-normal uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
                    {item.submenu.map((subItem: { label: string; anchor: string }) => (
                      <a
                        key={subItem.label}
                        href={subItem.anchor}
                        className="block px-5 py-3 hover:bg-brand-dark/80"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/free-trial"
              className="ml-4 inline-flex items-center bg-brand-green px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-colors"
            >
              Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 text-white uppercase tracking-[0.2em] space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.isHash ? (
                  <a
                    href={item.href}
                    className="block py-2 border-b border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-2 border-b border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.submenu && (
                  <div className="pl-3 text-xs tracking-normal space-y-1 mt-2 text-white/70">
                    {item.submenu.map((subItem: { anchor: string; label: string }) => (
                      <a
                        key={subItem.label}
                        href={subItem.anchor}
                        className="block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/free-trial"
              className="block text-center bg-brand-green py-3 rounded-full font-semibold tracking-[0.3em]"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Trial
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

