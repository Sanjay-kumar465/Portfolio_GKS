import { motion } from "framer-motion";

const INTERNSHIPS = [
  {
    company: "NoviTech R&D Pvt Ltd",
    role: "AI & ML Intern (Online)",
    duration: "Jul 2025 – Aug 2025 (1 Month)",
    description: "Completed hands-on AI & ML internship. Worked on data preprocessing, feature engineering, and model training using Python and Scikit-learn. Applied supervised learning algorithms including classification and regression models. Gained exposure to real-world AI/ML workflows and industry best practices."
  },
  {
    company: "Pinnacle Labs",
    role: "Data Science Intern (Virtual)",
    duration: "Jul 11, 2025 – Aug 10, 2025 (4 Weeks)",
    description: "Completed 4-week virtual internship in Data Science with commendable performance. Worked on data science tasks and projects, demonstrating exceptional dedication and skill. Credential ID: PL/2025/JULP5/217"
  }
];

const HACKATHONS = [
  {
    name: "Thooral Hackathon",
    organiser: "PSG College of Technology, Coimbatore",
    event: "Infinitum 2026 — National-level Technical Symposium",
    duration: "13th & 14th February 2026",
    description: "Selected for the Final Round. Competed among top student teams to design and present an innovative tech solution under time constraints."
  },
  {
    name: "Origin Hackathon",
    organiser: "Saveetha Institute of Medical and Technical Sciences, Thandalam, Chennai",
    duration: "Finalist",
    description: "Selected for the Final Round. Collaborated with peers to ideate, prototype, and pitch a problem-solving product within the hackathon timeline."
  },
  {
    name: "Lithos Hackathon",
    organiser: "Chennai Institute of Technology, Malyambakkam, Chennai",
    event: "Lithos 2K26",
    duration: "Participant",
    description: "Participated and demonstrated problem-solving skills by building and presenting a tech solution within a competitive hackathon environment."
  }
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const timelineLine = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: { duration: 1.5, ease: "easeInOut" }
  }
};

export default function Experience() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-32"
    >
      <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
        // 03
      </span>
      <h2 className="section-title">Experience</h2>

      {/* Internships Section */}
      <div className="mt-20">
        <span className="font-mono text-accent text-xs tracking-widest uppercase mb-12 block">
          // INTERNSHIPS
        </span>
        <div className="relative ml-4 py-4">
          {/* Animated Line */}
          <motion.div 
            variants={timelineLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-0 top-0 bottom-0 w-px bg-accent/20 origin-top"
          />

          <div className="space-y-16">
            {INTERNSHIPS.map((exp, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-accent rounded-full border-4 border-background" />
                
                <span className="font-mono text-accent text-sm mb-2 block">{exp.duration}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-accent font-medium mb-4">{exp.company}</p>
                <p className="text-secondary-text max-w-2xl leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hackathons Section */}
      <div className="mt-32">
        <span className="font-mono text-accent text-xs tracking-widest uppercase mb-12 block">
          // HACKATHONS
        </span>
        <div className="relative ml-4 py-4">
          <motion.div 
            variants={timelineLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-0 top-0 bottom-0 w-px bg-accent/20 origin-top"
          />

          <div className="space-y-16">
            {HACKATHONS.map((hack, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-accent rounded-full border-4 border-background" />
                
                <span className="font-mono text-accent text-sm mb-2 block">{hack.duration}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{hack.name}</h3>
                <p className="text-accent font-medium mb-1">{hack.organiser}</p>
                {hack.event && (
                  <p className="text-white/60 text-sm mb-4 font-mono uppercase tracking-widest">{hack.event}</p>
                )}
                <p className="text-secondary-text max-w-2xl leading-relaxed">
                  {hack.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
