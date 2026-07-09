import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img
                src="/image.png"
                alt="Koku Solar - Earn While The Sun Shines"
                className="h-12 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-koku-orange'
                      : 'text-koku-dark hover:text-koku-orange'
                  }`}
                >
                  {link.label}
                  {/* Active underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-koku-orange transform transition-all duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                  {/* Hover underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-koku-orange transform transition-all duration-300 origin-left ${
                    isActive(link.path) ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
              <Link
                to="/contact#contact"
                className="bg-koku-orange text-koku-dark px-6 py-2 rounded-lg font-semibold hover:bg-koku-dark hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                Get a Quote
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-koku-dark" />
              ) : (
                <Menu className="h-6 w-6 text-koku-dark" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium py-2 relative group ${
                    isActive(link.path)
                      ? 'text-koku-orange'
                      : 'text-koku-dark hover:text-koku-orange'
                  } transition-all duration-300`}
                >
                  {link.label}
                  {/* Mobile active underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-koku-orange transform transition-all duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                  {/* Mobile hover underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-koku-orange transform transition-all duration-300 origin-left ${
                    isActive(link.path) ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
              <Link
                to="/contact#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-koku-orange text-koku-dark px-6 py-3 rounded-lg font-semibold text-center hover:bg-koku-dark hover:text-white transition-all shadow-md"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}