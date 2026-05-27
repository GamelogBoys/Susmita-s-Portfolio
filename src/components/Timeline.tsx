import { motion } from 'motion/react';
import { Award, GraduationCap, Calendar, Compass, Binary, ChevronRight, Bookmark } from 'lucide-react';
import { portfolioData, Qualification } from '../data';

export default function Timeline() {
  const { education, professionalQualifications } = portfolioData;

  return (
    <section 
      id="education" 
      className="py-24 bg-white dark:bg-navy-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Master Row Header for Academic timeline */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-gold-500 font-bold uppercase mb-2">
            CREDENTIALS & JOURNEY
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800 dark:text-white leading-tight">
            Education & Certifications
          </h2>
          <div className="h-[3px] w-24 bg-navy-800 dark:bg-gold-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A (Col-6): General Academic timeline */}
          <div className="lg:col-span-7 flex flex-col pt-2" id="academic-journey">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-2.5 rounded-lg bg-navy-50 dark:bg-navy-900 border border-navy-100/10 dark:border-navy-800 text-gold-500 dark:text-gold-400 shadow-sm">
                <GraduationCap className="w-5.5 h-5.5 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-850 dark:text-white">
                Academic Degrees & Legacy
              </h3>
            </div>

            {/* Vertical Rail Timelines */}
            <div className="relative border-l border-navy-150 dark:border-navy-800/80 pl-6.5 sm:pl-8 ml-3 sm:ml-4 space-y-11">
              {education.map((item: Qualification, idx: number) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="relative group cursor-default"
                >
                  {/* Timeline indicator node */}
                  <div className="absolute -left-[35px] sm:-left-[41px] top-1 w-6.5 h-6.5 rounded-full bg-white dark:bg-navy-950 border-2 border-navy-800 dark:border-gold-500 group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors duration-300 flex items-center justify-center p-0.5 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-navy-800 dark:bg-gold-200 group-hover:bg-white transition-colors" />
                  </div>

                  {/* Year Tagline */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-navy-800 text-white dark:bg-navy-900 dark:text-gold-400 font-mono text-xs font-bold tracking-widest leading-none shadow-sm mb-3">
                    <Calendar className="w-3 h-3 text-gold-400" />
                    {item.year}
                  </span>

                  {/* Card Content block */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-navy-50/50 hover:bg-navy-50 dark:bg-navy-900/40 dark:hover:bg-navy-900/60 border border-navy-100/10 dark:border-navy-850/80 hover:border-gold-500/20 dark:hover:border-gold-500/20 shadow-sm transition-all duration-300 group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.03)] dark:group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-navy-850 dark:text-gold-200 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                      {item.degree}
                    </h4>
                    
                    <p className="mt-1 font-sans text-xs sm:text-sm text-navy-600 dark:text-navy-300 font-medium">
                      {item.institution}
                    </p>
                    
                    {item.description && (
                      <p className="mt-3.5 text-xs text-navy-500 dark:text-navy-450 leading-relaxed font-light">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column B (Col-5): Professional qualifications */}
          <div className="lg:col-span-5 flex flex-col pt-2" id="professional">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-2.5 rounded-lg bg-navy-50 dark:bg-navy-900 border border-navy-100/10 dark:border-navy-800 text-gold-500 dark:text-gold-400 shadow-sm">
                <Award className="w-5.5 h-5.5 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-850 dark:text-white">
                Govt. Professional Qualifications
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-navy-500 dark:text-navy-400 leading-relaxed max-w-md mb-8">
              Certified technical training designed to enhance publishing, curriculum digital typography, and structural software operations for modern education systems.
            </p>

            <div className="space-y-6">
              {professionalQualifications.map((pQ, idx) => (
                <motion.div
                  key={pQ.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-navy-900 border border-navy-150/60 dark:border-navy-850 hover:border-gold-500/30 dark:hover:border-gold-500/30 hover:-translate-y-0.5 shadow-sm hover:shadow-md dark:hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Small absolute graphic label */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gold-400/5 dark:bg-gold-500/5 rounded-bl-full pointer-events-none" />
                  
                  <div>
                    <div className="flex items-start justify-between gap-2.5 mb-3.5">
                      <span className="inline-block px-2.5 py-1 rounded bg-gold-50 dark:bg-navy-800 text-gold-600 dark:text-gold-400 font-mono text-[10px] font-bold tracking-widest uppercase">
                        CERTIFIED {pQ.year}
                      </span>
                      <Bookmark className="w-4 h-4 text-gold-400/80 stroke-[2] group-hover:text-gold-500 transition-colors" />
                    </div>

                    <h4 className="font-serif text-base font-bold text-navy-850 dark:text-gold-200 leading-tight group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors mb-2">
                      {pQ.title}
                    </h4>

                    <p className="font-sans text-xs font-semibold text-navy-600 dark:text-navy-300">
                      {pQ.institution}
                    </p>

                    <p className="mt-3.5 text-xs text-navy-500 dark:text-navy-450 leading-relaxed font-light">
                      {pQ.description}
                    </p>
                  </div>

                  <div className="mt-5.5 pt-4.5 border-t border-navy-100/10 dark:border-navy-850/60 flex items-center justify-between text-[11px] font-mono font-bold tracking-wider text-navy-400">
                    <span>REGISTRY APPROVED</span>
                    <span className="flex items-center text-gold-500 group-hover:translate-x-1.5 transition-transform duration-300">
                      GOVERNMENT RECOGNIZED <ChevronRight className="w-3 h-3 ml-0.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote of logic and education */}
            <div className="mt-10 p-6 rounded-2xl bg-navy-50/50 dark:bg-navy-900/20 border border-dashed border-navy-200/50 dark:border-navy-800/80 flex items-start gap-4">
              <Binary className="w-5.5 h-5.5 text-gold-500 mt-1 flex-shrink-0" id="binary-quote" />
              <div>
                <p className="font-serif italic text-xs text-navy-600 dark:text-navy-300 leading-relaxed">
                  "The application of DTP publishing principles and structured database systems facilitates the elegant dissemination of core research models in philosophy of education."
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
