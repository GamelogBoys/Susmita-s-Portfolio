import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDownRight, FileText, Send, ScrollText, Sparkles, CheckCircle, Loader2, X, Download, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const titles = [
    "Academic Professional",
    "Philosophy Graduate",
    "Education Researcher",
    "Scholastic Mentor"
  ];
  
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Resume AJAX download state
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStep, setDownloadStep] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Typewriting state logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[currentTitleIdx];

    const tick = () => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(50);
          return;
        }
      } else {
        // Deleting
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
          setTypingSpeed(100);
          return;
        }
      }
      timer = setTimeout(tick, typingSpeed);
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIdx, typingSpeed]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    setIsDownloading(true);
    setDownloadStep(1);
    setDownloadProgress(15);

    // Step 1: Connecting (0ms - 500ms)
    setTimeout(() => {
      setDownloadStep(2);
      setDownloadProgress(45);
      
      // Step 2: Location and validation (500ms - 1100ms)
      setTimeout(() => {
        setDownloadStep(3);
        setDownloadProgress(80);
        
        // Trigger browser's programmatic document download from assets
        const link = document.createElement('a');
        link.href = '/assets/cv.docx';
        link.download = 'Susmita_Saha_CV.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Step 3: Resolving stream (1100ms - 1700ms)
        setTimeout(() => {
          setDownloadStep(4);
          setDownloadProgress(100);
          
          // Complete and auto-fadeout (1700ms - 4700ms)
          setTimeout(() => {
            setIsDownloading(false);
            setDownloadStep(0);
            setDownloadProgress(0);
          }, 3500);
        }, 600);
      }, 600);
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-navy-50 to-white dark:from-navy-950 dark:to-navy-900 transition-colors duration-300"
    >
      {/* Blurred decorative luxury background orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gold-400/10 dark:bg-gold-500/5 filter blur-[90px] animate-pulse-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-navy-400/10 dark:bg-navy-700/5 filter blur-[120px] animate-pulse-glow-2 pointer-events-none" />

      {/* Decorative floating micro-particles */}
      <div className="absolute inset-0 select-none pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => {
          const size = Math.random() * 5 + 2;
          const left = Math.random() * 100;
          const delay = Math.random() * 10;
          const duration = Math.random() * 15 + 10;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gold-500/20 dark:bg-gold-400/30 filter blur-[0.5px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${Math.random() * 80 + 10}%`,
                animation: `floatUp ${duration}s infinite linear`,
                animationDelay: `${delay}s`
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(120px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-280px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Editorial Greeting Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-100 hover:bg-navy-200/80 dark:bg-navy-900 border border-navy-200/30 dark:border-gold-500/20 text-navy-800 dark:text-gold-300 text-xs font-mono font-medium tracking-wider uppercase mb-7 shadow-sm cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
          <span>WELCOME TO THE ACADEMIC PORTFOLIO OF</span>
        </motion.div>

        {/* Large Main Name Display */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-navy-800 dark:text-white leading-none capitalize"
          id="hero-name"
        >
          Susmita <span className="text-navy-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-gold-300 dark:via-gold-400 dark:to-gold-500 relative inline-block">
            Saha
            <span className="absolute left-0 bottom-2 w-full h-[6px] bg-gold-400/40 rounded-full hidden md:block" />
          </span>
        </motion.h1>

        {/* Dynamic Subtitle with smooth typing simulation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6 flex items-center justify-center gap-1.5 h-8 font-serif text-base sm:text-lg md:text-2xl text-gold-600 dark:text-gold-400 font-medium tracking-wide"
        >
          <span>{displayedText}</span>
          <span className="inline-block w-[3px] h-6 bg-navy-800 dark:bg-gold-400 rounded-full animate-[blink_0.8s_infinite]" />
        </motion.div>

        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 0 }
            50% { opacity: 1 }
          }
        `}</style>

        {/* Core Objective intro text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-8 font-sans text-sm sm:text-base md:text-lg text-navy-600 dark:text-navy-300 max-w-2xl leading-relaxed font-light mx-auto"
        >
          Dedicated and self-motivated professional with strong academic background and problem-solving abilities, seeking opportunities to utilize knowledge efficiently and contribute meaningfully.
        </motion.p>

        {/* Interactive Luxury Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4.5 w-full max-w-sm sm:max-w-none"
        >
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-7.5 py-4.5 rounded-xl bg-navy-800 hover:bg-navy-900 text-white dark:bg-gold-500 dark:hover:bg-gold-600 dark:text-navy-950 font-sans font-semibold text-sm tracking-wide shadow-lg border border-transparent dark:border-gold-400/30 flex items-center justify-center gap-2.5 hover:shadow-[0_12px_24px_rgba(26,42,74,0.15)] dark:hover:shadow-[0_12px_24px_rgba(197,160,40,0.15)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            id="hero-contact-btn"
          >
            <span>Contact Me</span>
            <Send className="w-4 h-4" />
          </button>

          <button
            onClick={handleDownloadCV}
            disabled={isDownloading}
            className="w-full sm:w-auto px-7.5 py-4.5 rounded-xl bg-white dark:bg-navy-900 text-navy-800 dark:text-gold-300 hover:bg-navy-100/55 dark:hover:bg-navy-800 hover:text-navy-900 font-sans font-semibold text-sm tracking-wide shadow-md border border-navy-200/50 dark:border-navy-800 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
            id="hero-download-btn"
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 text-gold-500 animate-spin" />
                <span>Preparing Dynamic CV...</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 text-gold-500" />
                <span>Download Resume</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Bottom Scroll Indicator Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById('about');
            if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="font-mono text-[9px] tracking-wider text-navy-400 dark:text-navy-500 uppercase font-semibold">
            SCROLL TO DISCOVER
          </span>
          <ArrowDownRight className="w-4 h-4 text-gold-400 transform rotate-45" />
        </motion.div>
      </div>

      {/* Dynamic AJAX Download Overlay Screen */}
      <AnimatePresence>
        {isDownloading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-md bg-white dark:bg-navy-950 rounded-2xl border border-navy-150 dark:border-navy-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left"
            >
              <button
                onClick={() => {
                  setIsDownloading(false);
                  setDownloadStep(0);
                  setDownloadProgress(0);
                }}
                className="absolute top-4 right-4 text-navy-400 hover:text-navy-700 dark:hover:text-white transition-colors cursor-pointer"
                type="button"
                aria-label="Close download overlay"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                {/* Visual Circle Indicator with Dynamic Pulse */}
                <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                  {/* Rotating dashed ring */}
                  <div className={`absolute inset-0 rounded-full border-2 border-dashed border-navy-100 dark:border-navy-800 ${downloadStep < 4 ? 'animate-spin [animation-duration:8s]' : ''}`} />
                  
                  {/* Glowing core */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-500 shadow-md ${downloadStep === 4 ? 'bg-green-50 dark:bg-green-950/35 text-green-550' : 'bg-gold-50 dark:bg-navy-900 text-gold-500'}`}>
                    {downloadStep === 4 ? (
                      <CheckCircle className="w-7 h-7 stroke-[2]" />
                    ) : (
                      <Loader2 className="w-7 h-7 animate-spin text-gold-500" />
                    )}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy-850 dark:text-gold-100 mb-2">
                  {downloadStep === 4 ? "Download Dispatched" : "Dispatching Academic Assets"}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-navy-650 dark:text-navy-300 leading-relaxed mb-6 max-w-xs h-10 flex items-center justify-center">
                  {downloadStep === 1 && "Connecting to secure repository stream..."}
                  {downloadStep === 2 && "Authenticating credentials for download..."}
                  {downloadStep === 3 && "Packaging Susmita_Saha_CV.docx file stream..."}
                  {downloadStep === 4 && "Handshake verified! Check your browser's download queue."}
                </p>

                {/* AJAX Progress bar with real percentage numbers */}
                <div className="w-full bg-navy-50 dark:bg-navy-900 rounded-full h-2.5 overflow-hidden mb-2 border border-navy-100/20">
                  <motion.div 
                    className="bg-navy-800 dark:bg-gold-500 h-full rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${downloadProgress}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
                
                <div className="flex justify-between w-full text-[10px] font-mono text-navy-400 dark:text-navy-500 mt-2">
                  <span>SSL SECURED STREAM</span>
                  <span className="font-bold">{downloadProgress}% COMPILED</span>
                </div>

                {downloadStep === 4 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 w-full"
                  >
                    <button
                      onClick={() => {
                        setIsDownloading(false);
                        setDownloadStep(0);
                        setDownloadProgress(0);
                      }}
                      className="w-full py-3 rounded-xl bg-navy-850 hover:bg-navy-900 dark:bg-gold-500 dark:hover:bg-gold-600 text-white dark:text-navy-950 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer text-center"
                    >
                      Return to Portfolio
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
