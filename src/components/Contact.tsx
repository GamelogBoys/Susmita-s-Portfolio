import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, Mail, Phone, Globe, Trash2, Award, ClipboardCheck, AlertCircle, Settings, Key, X, Check, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { personalInfo } = portfolioData;

  // =========================================================================
  // FORMSPREE CONFIG REGION (API KEY / ID DEFINED IN FRONTEND ENTIRELY HIDDEN FROM USER)
  // Edit the 8-character ID string here to point the contact requests to your inbox.
  // Register or log in to Formspree, find or create your target form, and replace "mvgodpyy"
  // below with your form ID.
  // =========================================================================
  const FORMSPREE_FORM_ID = "xdajpjdd";

  // Main contact credentials
  const targetEmail = "susmita1979saha@gmail.com";
  const targetPhone = "+91 84202 81608"; // Official mobile format

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Field change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing is active
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validation validator helper
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = "Please enter your name.";
      isValid = false;
    }
    
    if (!form.email.trim()) {
      tempErrors.email = "Please enter your email.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!form.subject.trim()) {
      tempErrors.subject = "Please enter a subject line.";
      isValid = false;
    }

    if (!form.message.trim()) {
      tempErrors.message = "Please enter your message.";
      isValid = false;
    } else if (form.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Form submission handler using AJAX
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const endpoint = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setShowSuccess(true);
        setForm({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        setIsSubmitting(false);
        setSubmitError(errorData.error || "Formspree rejected the request. Please verify the Formspree ID.");
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setSubmitError("Failed to reach Formspree. Please check your internet connection.");
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-white dark:bg-navy-950 transition-colors duration-300 border-t border-navy-100/10 dark:border-navy-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <p className="font-mono text-xs tracking-widest text-gold-500 font-bold uppercase mb-2">
            STAY IN TOUCH
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-800 dark:text-white leading-tight">
            Connect & Message
          </h2>
          <div className="h-[3px] w-24 bg-navy-800 dark:bg-gold-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column A (Col-5): Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="font-serif text-2xl font-bold text-navy-800 dark:text-gold-200">
                Contact Information
              </h3>
              <p className="font-sans text-xs sm:text-sm text-navy-500 dark:text-navy-400 leading-relaxed max-w-sm">
                Feel free to reach out regarding academic evaluations, syllabus audits, philosophical research papers, or educational mentoring opportunities.
              </p>

              {/* Information listings */}
              <div className="mt-6 space-y-6">
                
                <div className="flex gap-4.5 p-4.5 rounded-xl bg-navy-50/40 dark:bg-navy-900/40 border border-navy-50 dark:border-navy-850">
                  <div className="w-11 h-11 rounded-lg bg-white dark:bg-navy-800 border border-navy-100/40 dark:border-navy-800 flex items-center justify-center text-gold-500 shadow-sm flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest font-bold text-navy-400 uppercase">
                      POSTAL ADDRESS
                    </span>
                    <span className="block text-sm text-navy-800 dark:text-navy-200 font-semibold mt-0.5">
                      {personalInfo.address}
                    </span>
                  </div>
                </div>

                <a 
                  href={`mailto:${targetEmail}`}
                  className="flex gap-4.5 p-4.5 rounded-xl bg-navy-50/40 hover:bg-navy-50 dark:bg-navy-900/40 dark:hover:bg-navy-900/60 border border-navy-50 dark:border-navy-850/80 transition-all duration-300 group"
                  id="contact-email-link"
                >
                  <div className="w-11 h-11 rounded-lg bg-white dark:bg-navy-800 border border-navy-100/40 dark:border-navy-800 flex items-center justify-center text-gold-500 shadow-sm flex-shrink-0 group-hover:bg-navy-800 group-hover:text-white dark:group-hover:bg-gold-500 dark:group-hover:text-navy-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest font-bold text-navy-400 uppercase">
                      PRIMARY EMAIL
                    </span>
                    <span className="block text-sm text-navy-800 dark:text-navy-200 font-semibold mt-0.5 break-all group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                      {targetEmail}
                    </span>
                  </div>
                </a>

                <a 
                  href={`tel:${targetPhone}`}
                  className="flex gap-4.5 p-4.5 rounded-xl bg-navy-50/40 hover:bg-navy-50 dark:bg-navy-900/40 dark:hover:bg-navy-900/60 border border-navy-50 dark:border-navy-850/80 transition-all duration-300 group"
                  id="contact-phone-link"
                >
                  <div className="w-11 h-11 rounded-lg bg-white dark:bg-navy-800 border border-navy-100/40 dark:border-navy-800 flex items-center justify-center text-gold-500 shadow-sm flex-shrink-0 group-hover:bg-navy-800 group-hover:text-white dark:group-hover:bg-gold-500 dark:group-hover:text-navy-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest font-bold text-navy-400 uppercase">
                      PHONE CONTACT
                    </span>
                    <span className="block text-sm text-navy-800 dark:text-navy-200 font-semibold mt-0.5 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                      {targetPhone}
                    </span>
                  </div>
                </a>

              </div>
            </div>

            {/* Academic Scholarly Portals & Networks links */}
            <div>
              <h4 className="font-serif text-sm font-semibold text-navy-800 dark:text-gold-200 uppercase tracking-widest mb-4">
                Academic & Professional Portals
              </h4>
              
              <div className="flex items-center gap-3">
                
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-900 border border-navy-100/10 dark:border-navy-800 text-navy-600 dark:text-gold-400 hover:text-gold-500 dark:hover:text-gold-500 hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all flex items-center justify-center cursor-pointer shadow-sm transform hover:-translate-y-1"
                  title="Google Scholar Aligned Link"
                  id="social-scholars"
                >
                  <Globe className="w-4.5 h-4.5" />
                </a>

                <a
                  href="#contact"
                  className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-900 border border-navy-100/10 dark:border-navy-800 text-navy-600 dark:text-gold-400 hover:text-gold-500 dark:hover:text-gold-500 hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all flex items-center justify-center cursor-pointer shadow-sm transform hover:-translate-y-1"
                  title="ResearchGate Link"
                  id="social-researchgate"
                >
                  <Award className="w-4.5 h-4.5" />
                </a>

                <a
                  href="#contact"
                  className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-900 border border-navy-100/10 dark:border-navy-800 text-navy-600 dark:text-gold-400 hover:text-gold-500 dark:hover:text-gold-500 hover:border-gold-500/30 dark:hover:border-gold-500/30 transition-all flex items-center justify-center cursor-pointer shadow-sm transform hover:-translate-y-1"
                  title="LinkedIn Profile Link"
                  id="social-linkedin"
                >
                  <div className="font-bold text-xs font-serif uppercase tracking-tighter">In</div>
                </a>

              </div>

              <span className="block text-[10px] text-navy-410 font-mono mt-3 uppercase tracking-wider">
                © 2026 Registry Archives Kolkata
              </span>
            </div>
          </div>

          {/* Column B (Col-7): Interactive validated contact form */}
          <div className="lg:col-span-7" id="contact-form-block">
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-50/50 dark:bg-navy-900/30 border border-navy-100/10 dark:border-navy-800/85 shadow-sm relative overflow-hidden">
              
              <div className="mb-6.5">
                <h3 className="font-serif text-xl font-bold text-navy-850 dark:text-gold-100">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Subject/Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-500 dark:text-navy-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Professor Sen"
                      className={`w-full px-4.5 py-3 rounded-xl bg-white dark:bg-navy-900 border ${
                        errors.name ? 'border-red-500' : 'border-navy-150 dark:border-navy-800/90'
                      } text-sm text-navy-900 dark:text-white placeholder-navy-300 dark:placeholder-navy-600 focus:outline-none focus:border-gold-500 transition-colors shadow-sm`}
                      id="form-input-name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-500 dark:text-navy-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="text"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. reader@university.edu"
                      className={`w-full px-4.5 py-3 rounded-xl bg-white dark:bg-navy-900 border ${
                        errors.email ? 'border-red-500' : 'border-navy-150 dark:border-navy-800/90'
                      } text-sm text-navy-900 dark:text-white placeholder-navy-300 dark:placeholder-navy-600 focus:outline-none focus:border-gold-500 transition-colors shadow-sm`}
                      id="form-input-email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Line */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-500 dark:text-navy-400 mb-1.5">
                    Subject Line
                  </label>
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Academic Research Inquiry"
                    className={`w-full px-4.5 py-3 rounded-xl bg-white dark:bg-navy-900 border ${
                      errors.subject ? 'border-red-500' : 'border-navy-150 dark:border-navy-800/90'
                      } text-sm text-navy-900 dark:text-white placeholder-navy-300 dark:placeholder-navy-600 focus:outline-none focus:border-gold-500 transition-colors shadow-sm`}
                    id="form-input-subject"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-500 dark:text-navy-400 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4.5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter details of your inquiries here..."
                    className={`w-full px-4.5 py-3 rounded-xl bg-white dark:bg-navy-900 border ${
                      errors.message ? 'border-red-500' : 'border-navy-150 dark:border-navy-800/90'
                    } text-sm text-navy-900 dark:text-white placeholder-navy-300 dark:placeholder-navy-600 focus:outline-none focus:border-gold-500 transition-colors shadow-sm resize-none`}
                    id="form-textarea-message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Buttons block */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3.5 sm:items-center sm:justify-between">
                  
                  {/* Validation status / hint indicator */}
                  <span className="text-[10px] font-mono text-navy-400 dark:text-navy-500 flex flex-col gap-0.5">
                    <span>* DELIVERED SECURELY THROUGH SSL ENCRYPTION.</span>
                    <span>RESTRICTED TO ACADEMIC DISPATCH</span>
                  </span>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="px-7 py-3.5 rounded-xl bg-navy-800 dark:bg-gold-500 hover:bg-navy-900 dark:hover:bg-gold-600 text-white dark:text-navy-950 font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50 min-w-[170px]"
                    id="form-submit-button"
                  >
                    <span>{isSubmitting ? "Delivering..." : "Deliver Message"}</span>
                    <Send className={`w-3.5 h-3.5 transition-transform ${isSubmitting ? 'animate-bounce' : ''}`} />
                  </button>
                </div>

              </form>

              {/* Status SUCCESS AJAX screen */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="absolute inset-0 bg-white/95 dark:bg-navy-950/98 p-8 flex flex-col items-center justify-center text-center z-20"
                    id="form-success-overlay"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/30 text-green-550 flex items-center justify-center shadow-inner border border-green-200/50 mb-4 animate-bounce">
                      <ClipboardCheck className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    
                    <h4 className="font-serif text-2xl font-bold text-navy-850 dark:text-gold-200">
                      Message Dispatched!
                    </h4>
                    
                    <p className="font-sans text-xs sm:text-sm text-navy-650 dark:text-navy-300 max-w-sm mt-3 leading-relaxed">
                      Thank you for contacting Susmita Saha. Your inquiry has been routed via AJAX, delivered, and recorded onto Formspree securely.
                    </p>

                    <button
                      onClick={() => setShowSuccess(false)}
                      className="mt-6 px-4 py-2 bg-navy-100 hover:bg-navy-200 text-navy-800 dark:bg-navy-800 dark:hover:bg-navy-750 dark:text-gold-400 rounded-lg text-xs font-mono tracking-widest uppercase transition-colors"
                    >
                      Dismiss View
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* AJAX Error overlay box */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="absolute inset-0 bg-white/95 dark:bg-navy-950/98 p-8 flex flex-col items-center justify-center text-center z-20"
                    id="form-error-overlay"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/20 text-red-550 dark:text-red-400 flex items-center justify-center shadow-inner border border-red-200/50 mb-4">
                      <AlertCircle className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    
                    <h4 className="font-serif text-2xl font-bold text-navy-850 dark:text-gold-200">
                      Submission Failed
                    </h4>
                    
                    <p className="font-sans text-xs sm:text-sm text-red-650 dark:text-red-400 max-w-sm mt-3 leading-relaxed">
                      {submitError}
                    </p>

                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={() => setSubmitError(null)}
                        className="px-6 py-2.5 bg-navy-850 hover:bg-navy-900 text-white dark:bg-gold-500 dark:hover:bg-gold-600 dark:text-navy-950 rounded-xl text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer"
                      >
                        Try Again
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
