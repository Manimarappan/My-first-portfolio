import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.header
      id="portfolio-navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050810]/80 backdrop-blur-[20px] border-b border-[#00a8ff]/15 shadow-[0_10px_30px_rgba(5,8,16,0.3)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, '#')}
          className="font-mono text-xl font-bold tracking-tight text-[#00a8ff] hover:text-[#00a8ff]/80 transition-colors"
        >
          portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium tracking-wide text-slate-300 hover:text-[#00a8ff] transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00a8ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="text-xs font-mono font-bold tracking-wider text-[#00a8ff] hover:text-[#050810] hover:bg-[#00a8ff] border border-[#00a8ff]/40 px-4 py-2 transition-all duration-200 cursor-pointer"
          >
            RESUME
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-[#00a8ff] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden w-full bg-[#050810]/95 backdrop-blur-[20px] border-b border-[#00a8ff]/15 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium tracking-wide text-slate-300 hover:text-[#00a8ff] transition-colors py-2 border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="text-center text-sm font-mono font-bold tracking-wider text-[#00a8ff] border border-[#00a8ff]/40 py-3 mt-2 hover:bg-[#00a8ff]/10 transition-colors cursor-pointer"
              >
                VIEW RESUME
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
