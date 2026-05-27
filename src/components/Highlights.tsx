import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, BookOpen, MessageSquareCode, ShieldAlert, BadgeCheck } from 'lucide-react';
import { portfolioData, Achievement } from '../data';

// Custom CountUp hook utility for elegant numbers counters
function CountUpNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = target;
    const duration = 1500; // ms
    const increment = end / (duration / 16); // ~60fps
    
    const h = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(h);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(h);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl md:text-6xl font-black text-navy-800 dark:text-gold-400">
      {count}{suffix}
    </span>
  );
}

export default function Highlights() {
  const { achievements } = portfolioData;

  const getHighlightIcon = (title: string) => {
    switch (title) {
      case 'Academic Excellence':
        return <Award className="w-7 h-7 text-gold-500" />;
      case 'Research & Education':
        return <BookOpen className="w-7 h-7 text-gold-500" />;
      case 'Communication & Adaptability':
        return <MessageSquareCode className="w-7 h-7 text-gold-500" />;
      default:
        return <BadgeCheck className="w-7 h-7 text-gold-500" />;
    }
  };

  return (
    <section 
      id="highlights" 
      className="py-24 bg-navy-50/20 dark:bg-navy-950/40 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background graphic mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold-400/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-gold-500 font-bold uppercase mb-2">
            SCHOLASTIC STATS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800 dark:text-white leading-tight">
            Key Academic Highlights
          </h2>
          <div className="h-[3px] w-24 bg-navy-800 dark:bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Bento Grid Counters layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7" id="counters-grid">
          {achievements.map((item: Achievement, idx: number) => {
            // Determine core numeric value for CountUp
            let numericVal = 0;
            let suf = "";
            
            if (item.title === "Academic Excellence") {
              numericVal = 10;
              suf = "+";
            } else if (item.title === "Research & Education") {
              numericVal = 100;
              suf = "%";
            } else if (item.title === "Technical Certifications") {
              numericVal = 2;
              suf = "";
            } else {
              // Custom count or default label
              numericVal = 5;
              suf = "★";
            }

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-7 rounded-2xl bg-white dark:bg-navy-900 border border-navy-150/55 dark:border-navy-850 hover:border-gold-500/30 dark:hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300 shadow-sm relative group flex flex-col justify-between"
              >
                {/* Micro-Glow Highlight card corner */}
                <div className="absolute top-0 right-0 w-2 h-2 rounded-tr-2xl bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-xl bg-navy-50 dark:bg-navy-800/80 border border-navy-100/10 dark:border-navy-850 shadow-inner flex-shrink-0">
                    {getHighlightIcon(item.title)}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-navy-450 tracking-wider">
                    {item.metric}
                  </span>
                </div>

                <div>
                  <div className="mb-2.5">
                    {/* Render Count up element for numeric indices */}
                    {numericVal > 0 ? (
                      <CountUpNumber target={numericVal} suffix={suf} />
                    ) : (
                      <span className="font-mono text-4xl sm:text-5xl font-black text-navy-800 dark:text-gold-400">
                        {item.count}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-navy-850 dark:text-gold-200 leading-tight mb-2.5 group-hover:text-gold-500 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-navy-500 dark:text-navy-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom philosophy logic highlight footer card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6.5 sm:p-8 rounded-2.5xl bg-gradient-to-r from-navy-800 to-navy-900 text-white border border-gold-500/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-xl text-center md:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-gold-200">
              Methodical Problem Solving & Communication Expertise
            </h4>
            <p className="text-xs text-navy-150 leading-relaxed mt-2.5 font-light">
              Susmita Sahas's unique combination of high-level philosophical analysis and advanced technical desktop publishing knowledge creates a highly reliable administrative resource capable of delivering supreme quality.
            </p>
          </div>
          
          <button 
            onClick={() => {
              const target = document.getElementById('contact');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex-shrink-0 cursor-pointer shadow-[0_4px_12px_rgba(197,160,40,0.2)]"
          >
            INQUIRE REGISTRATION
          </button>
        </motion.div>

      </div>
    </section>
  );
}
