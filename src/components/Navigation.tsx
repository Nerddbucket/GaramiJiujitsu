import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Scroll to in-page section by id (works with HashRouter without breaking route)
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const handleSectionClick = (scrollId: string, navigate: ReturnType<typeof useNavigate>, pathname: string, closeMenu?: () => void) => {
  closeMenu?.();
  if (pathname === '/') {
    scrollToId(scrollId);
  } else {
    navigate('/');
    setTimeout(() => scrollToId(scrollId), 150);
  }
};

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
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/', isHash: false },
    { name: 'Location', href: '/', isHash: true, scrollId: 'locations' },
    { name: 'Schedule', href: '/', isHash: true, scrollId: 'training-schedule' },
    { name: 'Programs', href: '/', isHash: true, scrollId: 'programs', submenu: [
      { label: 'Kids Jiu Jitsu Program', scrollId: 'kids-jiu-jitsu-program' },
      { label: 'Adults Jiu Jitsu Program', scrollId: 'adults-jiu-jitsu-program' },
      { label: 'MMA and Striking Program', scrollId: 'mma-and-striking-program' },
      { label: 'Women\'s Jiu Jitsu Classes', scrollId: 'programs' }
    ]},
    { name: 'Gallery', href: '/', isHash: true, scrollId: 'gallery' },
    { name: 'Contact', href: '/', isHash: true, scrollId: 'contact' },
    { name: 'Next Event', href: '/', isHash: true, scrollId: 'contact' },
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
                {item.isHash && item.scrollId ? (
                  <Link
                    to="/"
                    className="hover:text-brand-green transition-colors py-6 inline-flex"
                    onClick={() => handleSectionClick(item.scrollId!, navigate, location.pathname)}
                  >
                    {item.name}
                  </Link>
                ) : !item.isHash ? (
                  <Link
                    to={item.href}
                    className="hover:text-brand-green transition-colors py-6 inline-flex"
                  >
                    {item.name}
                  </Link>
                ) : null}
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-brand-gray text-xs tracking-normal uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
                    {item.submenu.map((subItem: { label: string; scrollId: string }) => (
                      <Link
                        key={subItem.label}
                        to="/"
                        className="block px-5 py-3 hover:bg-brand-dark/80"
                        onClick={() => handleSectionClick(subItem.scrollId, navigate, location.pathname)}
                      >
                        {subItem.label}
                      </Link>
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
                {item.isHash && item.scrollId ? (
                  <Link
                    to="/"
                    className="block py-2 border-b border-white/10"
                    onClick={() => handleSectionClick(item.scrollId!, navigate, location.pathname, () => setIsMenuOpen(false))}
                  >
                    {item.name}
                  </Link>
                ) : !item.isHash ? (
                  <Link
                    to={item.href}
                    className="block py-2 border-b border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : null}
                {item.submenu && (
                  <div className="pl-3 text-xs tracking-normal space-y-1 mt-2 text-white/70">
                    {item.submenu.map((subItem: { label: string; scrollId: string }) => (
                      <Link
                        key={subItem.label}
                        to="/"
                        className="block py-1"
                        onClick={() => handleSectionClick(subItem.scrollId, navigate, location.pathname, () => setIsMenuOpen(false))}
                      >
                        {subItem.label}
                      </Link>
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

