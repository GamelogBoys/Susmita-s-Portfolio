import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

// Import our modular sub-sections
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  
  // Theme state synchronized with localStorage (default to light for soft off-whites/gold aesthetic)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to conditionally reveal back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync theme changes with document standard class lists
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white text-navy-900 dark:bg-navy-950 dark:text-navy-100 transition-colors duration-300 font-sans antialiased overflow-x-hidden selection:bg-gold-200 dark:selection:bg-gold-800">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="academic-loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Nav Menu */}
            <Navbar isDark={isDark} onThemeToggle={toggleTheme} />

            {/* Content Segments */}
            <main className="flex-grow">
              {/* Home / Hero */}
              <Hero />

              {/* About & objective */}
              <About />

              {/* Skills competency */}
              <Skills />

              {/* Timelines and governmental certificates */}
              <Timeline />

              {/* Achievements metrics counts */}
              <Highlights />

              {/* Validated form */}
              <Contact />
            </main>

            {/* Footer citation */}
            <Footer />

            {/* Floating Back to Top Button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-navy-800 dark:bg-gold-500 text-white dark:text-navy-950 shadow-xl border border-gold-500/10 dark:border-gold-400 hover:bg-navy-900 dark:hover:bg-gold-600 transition-all cursor-pointer hover:-translate-y-0.5"
                  aria-label="Scroll back to top"
                  id="back-to-top-floating"
                >
                  <ChevronUp className="w-5 h-5 stroke-[2]" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
