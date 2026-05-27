import { motion } from 'motion/react';
import { MapPin, Calendar, User, Heart, Languages, Flag, Compass, Library, ShieldCheck, Milestone } from 'lucide-react';
import { portfolioData } from '../data';

// Helper to resolve icon components based on text name
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Calendar': return <Calendar className="w-5 h-5" />;
    case 'User': return <User className="w-5 h-5" />;
    case 'Heart': return <Heart className="w-5 h-5" />;
    case 'Languages': return <Languages className="w-5 h-5" />;
    case 'Flag': return <Flag className="w-5 h-5" />;
    case 'Compass': return <Compass className="w-5 h-5" />;
    default: return <User className="w-5 h-5" />;
  }
};

export default function About() {
  const { personalInfo, personalDetails } = portfolioData;

  // Let's grab the generated image path dynamically or use fallback
  const avatarUrl = "./src/assets/images/susmita_saha_profile_1779861948800.png";

  return (
    <section 
      id="about" 
      className="py-24 bg-white dark:bg-navy-950/40 border-y border-navy-100/10 dark:border-navy-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-gold-500 font-bold uppercase mb-2">
            BIOGRAPHY & FOCUS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800 dark:text-white leading-tight">
            About Susmita Saha
          </h2>
          <div className="h-[3px] w-24 bg-navy-800 dark:bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Master Bento Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column A: Left side: Modern Portrait Frame with background gold patterns */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group max-w-sm w-full">
              {/* Gold backing aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold-500/70 via-gold-400/20 to-navy-800/10 dark:from-gold-600/30 rounded-2xl filter blur-xl opacity-80 group-hover:opacity-100 transition duration-1000" />
              
              {/* Real profile image container */}
              <div className="relative rounded-2xl overflow-hidden bg-navy-100 dark:bg-navy-900 border-4 border-white dark:border-navy-800 shadow-2xl transition-all duration-500 transform group-hover:scale-[1.01]">
                <img
                  src={avatarUrl}
                  alt="Susmita Saha Portrait"
                  className="w-full aspect-square object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Academic citation overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
                  <p className="font-serif text-lg font-bold text-gold-200">Kolkata Academic Circle</p>
                  <p className="font-sans text-[11px] font-medium tracking-wide text-navy-200 uppercase mt-0.5">Philosophy & Education Alumnus</p>
                </div>
              </div>

              {/* Decorative classical serif layout markers */}
              <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-gold-400 rounded-tr" />
              <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-gold-400 rounded-bl" />
            </div>
          </div>

          {/* Column B: Right side: Core Objective / Biography Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Philosophical Objective Quote Card */}
            <div className="bg-navy-50/60 dark:bg-navy-900/60 rounded-2xl p-6 md:p-8 border border-navy-100/10 dark:border-navy-800/80 relative overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/5 dark:bg-gold-500/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 rounded-lg bg-navy-100 dark:bg-navy-800 text-gold-500 dark:text-gold-400">
                  <Library className="w-5.5 h-5.5 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-gold-100">
                  Scholastic Career Objective
                </h3>
              </div>

              <blockquote className="font-serif italic text-base md:text-lg text-navy-700 dark:text-navy-200 leading-relaxed border-l-4 border-gold-400 pl-4.5 py-1">
                "{personalInfo.objective}"
              </blockquote>
              
              {/* Address indicator banner */}
              <div className="mt-6 flex items-start gap-3 pt-5 border-t border-navy-100/15 dark:border-navy-850">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-400">
                    Official Residential Address
                  </span>
                  <span className="block text-sm font-sans text-navy-700 dark:text-navy-300 font-medium">
                    {personalInfo.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Structured Card Grid for Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
              
              <div className="p-5.5 rounded-xl bg-white dark:bg-navy-900 border border-navy-150/40 dark:border-navy-800/80 hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all duration-300 flex flex-col group hover:-translate-y-0.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-navy-50 dark:bg-navy-800 text-navy-800 dark:text-gold-400 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-navy-800 dark:text-gold-100 group-hover:text-gold-400 transition-colors">
                  Methodical Mindset
                </h4>
                <p className="mt-2 text-xs text-navy-500 dark:text-navy-400 leading-relaxed">
                  Highly self-motivated structure aiming to deliver precise, accurate administrative solutions.
                </p>
              </div>

              <div className="p-5.5 rounded-xl bg-white dark:bg-navy-900 border border-navy-150/40 dark:border-navy-800/80 hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all duration-300 flex flex-col group hover:-translate-y-0.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-navy-50 dark:bg-navy-800 text-navy-800 dark:text-gold-400 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Library className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-navy-800 dark:text-gold-100 group-hover:text-gold-400 transition-colors">
                  Academic Depth
                </h4>
                <p className="mt-2 text-xs text-navy-500 dark:text-navy-400 leading-relaxed">
                  Substantial background with research masteries (M.Phil) in curriculum logic and ethics.
                </p>
              </div>

              <div className="p-5.5 rounded-xl bg-white dark:bg-navy-900 border border-navy-150/40 dark:border-navy-800/80 hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all duration-300 flex flex-col group hover:-translate-y-0.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-navy-50 dark:bg-navy-800 text-navy-800 dark:text-gold-400 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Milestone className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-navy-800 dark:text-gold-100 group-hover:text-gold-400 transition-colors">
                  Goal Alignment
                </h4>
                <p className="mt-2 text-xs text-navy-500 dark:text-navy-400 leading-relaxed">
                  Aiming for thorough professional satisfaction by executing projects with zero oversight.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Section: Personal facts as dynamic metadata cards */}
        <div className="mt-20 pt-16 border-t border-navy-100/10 dark:border-navy-900">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-gold-100">
              Personal Credentials & Details
            </h3>
            <p className="text-xs font-mono text-navy-400 dark:text-navy-500 mt-2 uppercase tracking-wide">
              Official facts listed for institutional registry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="personal">
            {personalDetails.map((detail, idx) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="flex items-center gap-4.5 p-5.5 rounded-xl bg-navy-50/40 hover:bg-navy-50 dark:bg-navy-900/40 dark:hover:bg-navy-900/80 border border-navy-100/10 dark:border-navy-800/60 hover:border-gold-500/20 dark:hover:border-gold-500/20 transition-all duration-300 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-white dark:bg-navy-850/80 text-gold-500 dark:text-gold-400 shadow-sm border border-navy-150/20 dark:border-navy-850 flex-shrink-0">
                  {getIcon(detail.icon)}
                </div>
                <div>
                  <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-navy-400">
                    {detail.label}
                  </span>
                  <span className="block text-[14px] font-sans text-navy-800 dark:text-navy-200 font-semibold mt-0.5">
                    {detail.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
