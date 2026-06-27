import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#services' },
  ];

  const secondaryLinks = [
    { name: 'Nosotros', href: '/#about' },
    { name: 'Contacto', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
            <img 
              src="/img/logoTrnasparenteVerde.png" 
              alt="Facilito.ar" 
              className="h-20 w-auto mr-3 transition-transform group-hover:scale-110" 
            />
            <span className="font-bold text-2xl text-white tracking-tight">Facilito<span className="text-brand-500">.ar</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {primaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-brand-400 font-medium transition-colors duration-200">
                Productos
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute right-0 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-64 rounded-2xl border border-gray-800 bg-gray-950/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-md">
                  <Link
                    to="/porte"
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-gray-900"
                  >
                    <span className="block text-sm font-bold text-white">PORTE</span>
                    <span className="mt-1 block text-xs leading-5 text-gray-400">Sistema de gestión comercial</span>
                  </Link>
                </div>
              </div>
            </div>

            {secondaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-400 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {/* Logo and Brand in Mobile Menu */}
            <div className="flex items-center mb-4 pb-4 border-b border-gray-800">
             
              <span className="font-bold text-xl text-white tracking-tight">Facilito<span className="text-brand-500">.Ar</span></span>
            </div>
            {primaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-brand-400 hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Productos</p>
              <Link
                to="/porte"
                className="mt-2 block rounded-lg px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-brand-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                PORTE
                <span className="mt-1 block text-sm text-gray-500">Sistema de gestión comercial</span>
              </Link>
            </div>
            {secondaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-brand-400 hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
