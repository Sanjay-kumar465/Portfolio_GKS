import { motion } from "framer-motion";

import amazonLogo from "../assets/logos/amazon.jpg";
import codsoftLogo from "../assets/logos/codsoft.jpg";

const INTERNSHIPS = [
  {
    company: "Amazon",
    role: "Software Developer Intern",
    duration: "May 11, 2026 – July 3, 2026",
    logo: amazonLogo,
    description: [
      "Worked on software development tasks and collaborated with cross-functional teams.",
      "Contributed to building and optimizing scalable web services.",
      "Gained hands-on experience with real-world enterprise architectures."
    ]
  },
  {
    company: "CodSoft",
    role: "Software Developer Intern",
    duration: "2025",
    logo: codsoftLogo,
    description: [
      "Completed hands-on projects and tasks in a fast-paced development environment.",
      "Worked on full-stack development implementations.",
      "Demonstrated strong problem-solving skills and technical proficiency."
    ]
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
                
                <div className="flex items-center gap-4 mb-4 mt-2">
                  {exp.logo && (
                    <img src={exp.logo} alt={`${exp.company} Logo`} className="w-12 h-12 object-contain rounded-md bg-white/5 p-1" />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{exp.role}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                </div>

                <ul className="text-secondary-text max-w-2xl leading-relaxed list-disc list-outside ml-4 space-y-2">
                  {Array.isArray(exp.description) ? exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  )) : (
                    <li>{exp.description}</li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
}
