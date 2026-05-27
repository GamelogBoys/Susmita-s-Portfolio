import { motion } from 'motion/react';
import { Award, CheckCircle2, Star, Zap, GraduationCap, Compass } from 'lucide-react';
import { portfolioData, Skill } from '../data';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section 
      id="skills" 
      className="py-24 bg-navy-50/30 dark:bg-navy-950/20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-gold-500 font-bold uppercase mb-2">
            ABILITIES & APTITUDE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800 dark:text-white leading-tight">
            Professional Competencies
          </h2>
          <div className="h-[3px] w-24 bg-navy-800 dark:bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Outer Section Frame Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column A: Academic context text */}
          <div className="lg:col-span-4 flex flex-col gap-6" id="skills-narrative">
            <div className="p-6.5 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-500/15 text-white shadow-xl relative overflow-hidden">
              {/* background light reflection */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(197,160,40,0.15),transparent)] rounded-full pointer-events-none" />
              
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-5">
                <GraduationCap className="w-5.5 h-5.5" />
              </div>

              <h3 className="font-serif text-xl font-bold text-gold-200">
                Philosophy & Logical Execution
              </h3>
              
              <p className="mt-4 text-xs md:text-sm text-navy-150 leading-relaxed font-light">
                Her deep foundation in philosophy facilitates advanced ethical scrutiny, deductive reasoning, and modular logic. She applies these analytical skills directly to administrative design, educational program developments, and problem-solving structures.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-mono text-gold-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Deductive Logic Analysis</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-gold-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Educational Program Ethics</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-gold-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>Administrative Organization</span>
                </div>
              </div>
            </div>

            {/* Aesthetic wisdom callout card */}
            <div className="p-5 border border-navy-100/10 dark:border-navy-800 rounded-xl bg-white dark:bg-navy-900/60 shadow-sm flex items-center gap-4">
              <Star className="w-5 h-5 text-gold-400 fill-gold-400 flex-shrink-0 animate-pulse" />
              <p className="text-xs text-navy-600 dark:text-navy-300 italic leading-relaxed font-serif">
                "Continuous learning is the absolute core of academic efficiency and professional adaptability."
              </p>
            </div>
          </div>

          {/* Column B: Interactive Progress Fills Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6" id="skills-progress-grid">
            {skills.map((skill: Skill, idx: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-navy-150/50 dark:border-navy-800 hover:border-gold-500/20 dark:hover:border-gold-500/20 hover:shadow-md dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-serif text-base font-bold text-navy-850 dark:text-gold-100 group-hover:text-gold-500 transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-bold text-gold-600 dark:text-gold-400">
                      {skill.percentage}%
                    </span>
                  </div>
                  
                  {skill.description && (
                    <p className="text-xs text-navy-500 dark:text-navy-400 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Animated Fill Bar container */}
                <div className="h-2 w-full bg-navy-50 dark:bg-navy-800 rounded-full overflow-hidden border border-navy-100/10 dark:border-navy-900">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.04, duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-navy-800 to-navy-900 dark:from-navy-700 dark:to-gold-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
