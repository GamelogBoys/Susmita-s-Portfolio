import { Calendar, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-navy-950 text-white font-sans border-t border-navy-900 overflow-hidden relative">
      {/* Soft background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-gold-400/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left relative z-10">
        
        {/* Left Side: Monogram */}
        <div className="flex flex-col gap-1.5 cursor-pointer select-none" onClick={scrollToHome}>
          <p className="font-serif text-base font-bold text-gold-200 uppercase tracking-widest hover:text-gold-400 transition-colors">
            Susmita Saha
          </p>
          <span className="text-[10px] font-mono tracking-widest text-navy-400 uppercase">
            Academic Researcher & Philosophy Graduate
          </span>
        </div>

        {/* Right Side: Copyright citation */}
        <div className="flex flex-col sm:items-end gap-1.5">
          <p className="text-xs text-navy-300 font-medium tracking-wide">
            © 2026 Susmita Saha. All Rights Reserved.
          </p>
          <p className="text-[9px] text-navy-500 font-mono tracking-wider uppercase flex items-center justify-center sm:justify-end gap-1">
            <span>REGISTRY CODE: KOL-700074-IN</span>
            <span className="h-2 w-[1px] bg-navy-800" />
            <span className="text-gold-500/80">VERIFIED ARCHIVE</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
