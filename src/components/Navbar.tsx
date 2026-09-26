import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Scale } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Personal Injury', path: '/personal-injury' },
  { name: 'Probate Law', path: '/probate-law' },
  { name: 'Real Estate Law', path: '/real-estate-law' },
  { name: 'Car & Truck Accidents', path: '/car-truck-accidents' },
  { name: 'Wills & Trusts', path: '/wills-trusts' },
  { name: 'Divorce', path: '/divorces' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-400/20 group-hover:shadow-gold-400/40 transition-shadow duration-300">
                <Scale className="w-6 h-6 text-navy-900" />
              </div>
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <div className="font-playfair text-xl font-bold text-white leading-tight">
                Medford's Best
              </div>
              <div className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">
                Attorneys
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-gold-400 bg-gold-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:5415551234" className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">(541) 555-1234</span>
            </a>
            <Link
              to="/personal-injury"
              className="px-6 py-2.5 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-semibold text-sm rounded-lg hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-white hover:text-gold-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-navy-900/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-gold-400 bg-gold-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a href="tel:5415551234" className="flex items-center gap-2 px-4 py-3 text-gold-400 font-semibold">
                  <Phone className="w-4 h-4" />
                  (541) 555-1234
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
