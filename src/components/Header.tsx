import { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'La Maison' },
    { href: '#location', label: 'Situation' },
    { href: '#gallery', label: 'Galerie' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`flex items-center gap-2 text-2xl font-bold transition-colors ${
              isScrolled ? 'text-stone-800' : 'text-white'
            }`}
          >
            <Home className="w-7 h-7 text-amber-600" />
            <span>Casa d'Oc</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-amber-600 ${
                  isScrolled ? 'text-stone-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Réserver
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-stone-800' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-sm shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-6 mt-3 text-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-sm font-medium transition-colors"
            >
              Réserver
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
