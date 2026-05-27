import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Award, GraduationCap } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'professional', label: 'Prof. Credentials' },
  { id: 'personal', label: 'Personal' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Sticky Nav Style
      setIsScrolled(window.scrollY > 30);

      // 2. Active section highlights
      const scrollPosition = window.scrollY + 120; // offset for nav height
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offsetPos = target.offsetTop - 80; // height of sticky nav
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-navy-950/95 shadow-md backdrop-blur-md border-b border-navy-100/10 dark:border-navy-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Academic branding monogram */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-lg bg-navy-800 dark:bg-navy-900 border border-gold-500/20 flex items-center justify-center p-1 relative shadow-inner overflow-hidden transition-all duration-300 group-hover:border-gold-400 group-hover:shadow-[0_0_12px_rgba(197,160,40,0.2)]">
            <GraduationCap className="text-gold-400 w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <span className="block font-serif text-lg font-bold tracking-tight text-navy-800 dark:text-gold-100 group-hover:text-gold-500 transition-colors">
              Susmita Saha
            </span>
            <span className="block font-sans text-[10px] tracking-wider text-navy-500 dark:text-navy-400 uppercase font-semibold">
              Research & Philosophy
            </span>
          </div>
        </button>

        {/* Desktop nav menu links */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-sans font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-navy-800 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                  : 'text-navy-600 hover:text-navy-900 hover:bg-navy-100/50 dark:text-navy-300 dark:hover:text-gold-100 dark:hover:bg-navy-900/40'
              }`}
              id={`navlink-${item.id}`}
            >
              {item.label}
            </button>
          ))}

          <span className="h-5 w-[1px] bg-navy-200 dark:bg-navy-800 mx-2" />

          {/* Theme Switcher Button */}
          <button
            onClick={onThemeToggle}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-navy-100 hover:bg-navy-200 dark:bg-navy-900 dark:hover:bg-navy-850 border border-transparent dark:border-navy-800 text-navy-600 dark:text-gold-400 transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Toggle Theme Mode"
            id="theme-toggle-desktop"
          >
            {isDark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>
        </div>

        {/* Mobile Nav Trigger Button */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Theme switcher on mobile nav header */}
          <button
            onClick={onThemeToggle}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-navy-100 dark:bg-navy-900 border border-transparent dark:border-navy-800 text-navy-600 dark:text-gold-400 cursor-pointer"
            id="theme-toggle-mobile"
          >
            {isDark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 rounded-lg bg-navy-100 hover:bg-navy-200 dark:bg-navy-900 dark:hover:bg-navy-850 text-navy-800 dark:text-gold-200 transition-all cursor-pointer"
            aria-label="Open navigation menu"
            id="mobile-nav-hamburger"
          >
            <Menu className="w-5.5 h-5.5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-Over Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-45"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-navy-950 shadow-2xl z-50 p-6 flex flex-col border-l border-navy-100/10 dark:border-navy-800/80"
              id="mobile-menu-drawer"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-serif text-lg font-bold text-navy-850 dark:text-gold-100">
                  Navigation
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full bg-navy-50 hover:bg-navy-100 dark:bg-navy-900 dark:hover:bg-navy-850 text-navy-700 dark:text-navy-300"
                  id="mobile-nav-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2.5 overflow-y-auto">
                {navItems.map((item, idx) => (
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-sans font-medium text-sm transition-all flex items-center justify-between group ${
                      activeSection === item.id
                        ? 'bg-navy-800 text-white dark:bg-gold-500 dark:text-navy-950 font-semibold'
                        : 'text-navy-700 hover:bg-navy-100/60 dark:text-navy-300 dark:hover:bg-navy-900/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity font-mono text-gold-500">
                      →
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto border-t border-navy-100 dark:border-navy-900 pt-6 text-center">
                <p className="font-serif text-sm font-semibold text-navy-700 dark:text-gold-200">
                  Susmita Saha
                </p>
                <p className="text-[10px] text-navy-400 font-mono mt-1">
                  Kolkata, West Bengal, India
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
