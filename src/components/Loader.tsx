import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400); // Small pause at 100% for smooth transition
          return 100;
        }
        // Random increment for realistic loading simulation
        const rand = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + rand, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-950 px-6 text-white font-sans">
      {/* Background radial soft light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,40,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-2xl text-center flex flex-col items-center">
        {/* Academic crest motion logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8 p-4 rounded-full bg-navy-900 border border-gold-500/30 shadow-[0_0_25px_rgba(197,160,40,0.15)]"
        >
          <BookOpen className="w-12 h-12 text-gold-400 stroke-[1.5]" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Philosophy academic quote */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative px-6 py-4"
        >
          {/* Subtle quote markers */}
          <span className="absolute left-0 top-0 font-serif text-6xl text-gold-500/20 pointer-events-none">“</span>
          <p className="font-serif italic text-lg text-navy-100 max-w-lg leading-relaxed md:text-xl">
            The highest education is that which does not merely give us information but makes our life in harmony with all existence.
          </p>
          <span className="absolute right-0 bottom-0 font-serif text-6xl text-gold-500/20 pointer-events-none">”</span>
          
          <p className="mt-3 text-gold-400 font-mono text-xs tracking-widest font-semibold uppercase">
            — Rabindranath Tagore
          </p>
        </motion.div>

        {/* Progress display */}
        <div className="mt-12 w-64 md:w-80">
          <div className="flex justify-between items-center mb-2 text-xs font-mono text-gold-400/80">
            <span>SCHOLASTIC INDEX LOADING</span>
            <span>{progress}%</span>
          </div>
          
          <div className="h-[2px] w-full bg-navy-800 rounded-full overflow-hidden border border-navy-900">
            <motion.div 
              className="h-full bg-gradient-to-r from-navy-500 via-gold-400 to-gold-500 duration-150 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-4 font-mono text-[10px] tracking-wider text-navy-400"
        >
          CURATING SUSMITA SAHA'S PORTFOLIO
        </motion.p>
      </div>
    </div>
  );
}
