export interface Qualification {
  degree: string;
  institution: string;
  year: number;
  description?: string;
}

export interface Skill {
  name: string;
  percentage: number; // For progress indicators
  category: 'core' | 'soft' | 'technical';
  description?: string;
}

export interface PersonalDetail {
  label: string;
  value: string;
  icon: string;
}

export interface Achievement {
  title: string;
  count: string;
  description: string;
  metric: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Susmita Saha",
    title: "Academic Professional | Philosophy Graduate | Education Researcher",
    email: "susmita1979saha@gmail.com", // Academic professional email
    phone: "+91 84202 81608", // Main contact phone number
    address: "63/17/10, Dumdum Rd., Kolkata – 700074, India",
    objective: "Utilising the best of my potential to achieve goals, professional growth, and increase my knowledge base to work efficiently. Dedicated and self-motivated professional with a strong academic background and problem-solving abilities, seeking opportunities to utilize knowledge efficiently and contribute meaningfully.",
  },
  
  skills: [
    { name: "Comprehensive Problem Solving", percentage: 95, category: "core", description: "Analytical and logical breakdown of philosophical and academic challenges." },
    { name: "Academic Oriented & Research", percentage: 98, category: "core", description: "Advanced academic training in Philosophy and Educational frameworks." },
    { name: "Willingness to Learn", percentage: 100, category: "soft", description: "High intellectual curiosity and continuous skill up-gradation." },
    { name: "Adaptability to Varying Conditions", percentage: 92, category: "soft", description: "Adapting swiftly to diverse students, classrooms, and administrative criteria." },
    { name: "Communication Skills", percentage: 94, category: "soft", description: "Fluent and eloquent ideas transmission in bilingual mediums (Bengali, English)." },
    { name: "Leadership", percentage: 88, category: "soft", description: "Initiating research directions, mentoring students, and organizing curriculum projects." },
    { name: "Time Management", percentage: 90, category: "soft", description: "Timely research completions, lecture delivery prep, and publication drafting." },
    { name: "Self-Motivated", percentage: 96, category: "core", description: "Proactive career dedication and strong research ethics without supervision." }
  ] as Skill[],

  education: [
    {
      degree: "M.Phil (Education)",
      institution: "Netaji Subhas Open University (N.S.O.U) Kolkata",
      year: 2008,
      description: "Advanced post-master research degree focusing on Educational Methodologies, Philosophy of Education, and curriculum planning."
    },
    {
      degree: "M.A. (Philosophy)",
      institution: "Rabindra Bharati University",
      year: 2004,
      description: "Master of Arts in Philosophy with high specializations in Indian Philosophy, Western Epistemology, and Logical Ethics."
    },
    {
      degree: "B.A. (Hons) in Philosophy",
      institution: "Calcutta University",
      year: 2001,
      description: "Bachelor of Arts with Honors in Philosophy. Core topics included Analytical Logic, Metaphysics, and Social-Political Thought."
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "West Bengal Council of Higher Secondary Education (W.B.C.H.S.E)",
      year: 1998,
      description: "Pre-university curriculum focusing on Humanities, Literature, and Philosophy."
    },
    {
      degree: "Madhyamik (10th)",
      institution: "West Bengal Board of Secondary Education (W.B.S.E)",
      year: 1996,
      description: "General high school secondary curriculum encompassing Sciences, Mathematics, History, and languages."
    }
  ] as Qualification[],

  professionalQualifications: [
    {
      title: "Diploma in Desktop Publishing (DTP)",
      institution: "Yuba Kendra, Govt. of West Bengal",
      year: 2007,
      description: "Comprehensive professional digital publishing training focusing on layout typography, document design, PageMaker, and printing aesthetics."
    },
    {
      title: "Fundamentals of Software & Computational Literacy",
      institution: "Small Industries Service Institute (SISI), Govt. of India",
      year: 2005,
      description: "Professional software fundamentals training. Included operating environments, database basics, word processing, and internet systems optimized for research workflows."
    }
  ],

  personalDetails: [
    { label: "Date of Birth", value: "20 January 1978", icon: "Calendar" },
    { label: "Gender", value: "Female", icon: "User" },
    { label: "Marital Status", value: "Married", icon: "Heart" },
    { label: "Languages Known", value: "Bengali (Native) & English (Fluent)", icon: "Languages" },
    { label: "Nationality", value: "Indian", icon: "Flag" },
    { label: "Hobbies", value: "Travelling and Meeting People", icon: "Compass" }
  ] as PersonalDetail[],

  achievements: [
    { title: "Academic Excellence", count: "10+", description: "Over 10 years of intensive higher education specialization in deductive logic, epistemology, and philosophical structures.", metric: "Years Devoted" },
    { title: "Research & Education", count: "100%", description: "Completed thorough scholastic work spanning from Kolkata's premiere universities to a research-oriented M.Phil degree.", metric: "Scholastic Target" },
    { title: "Adaptability & Training", count: "Double", description: "Bilingual delivery, combining traditional philosophical logic with modern IT systems.", metric: "Instruction Delivery" },
    { title: "Technical Certifications", count: "2", description: "Certified by Govt. of India (SISI) and Govt. of West Bengal (Yuba Kendra) for desktop publishing and computer science systems.", metric: "National Diplomas" }
  ] as Achievement[]
};
