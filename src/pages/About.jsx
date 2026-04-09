import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "// FRONTEND",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"]
  },
  {
    label: "// BACKEND",
    skills: ["Node.js", "Java", "Spring Boot", "Spring Framework", "Python", "REST API", "Flask"]
  },
  {
    label: "// DATABASE",
    skills: ["MySQL", "MongoDB", "Firebase", "Supabase"]
  },
  {
    label: "// AI / ML & DATA",
    skills: ["Scikit-learn", "NLP", "OpenCV", "TensorFlow", "Sentiment Analysis", "TF-IDF"]
  },
  {
    label: "// TOOLS & OTHERS",
    skills: ["Git", "Docker", "VS Code", "C", "C++"]
  }
];

const timeline = [
  {
    year: "2024 – 2028",
    title: "B.E. Computer Science and Engineering",
    institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
    description: "Currently Pursuing — 2nd Year | GPA: 8.22 (Till 3rd Sem)"
  },
  {
    year: "2024 – PRESENT",
    title: "Full Stack Development Focus",
    institution: "Self-Directed Learning",
    description: "Deep diving into modern web architectures, real-time systems, and architectural clean patterns."
  }
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-32"
    >
      {/* Header */}
      <section>
        <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
          // 01
        </span>
        <h2 className="section-title">About Me</h2>

        {/* Bio Block */}
        <motion.div 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_1.5fr] gap-16 items-start mt-12"
        >
          {/* Left: Photo */}
          <div className="group relative">
            <div className="aspect-square w-full max-w-[400px] border border-accent overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]">
              <img 
                src="/profile.png" 
                alt="Sanjay S" 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-secondary-text">
              I'm <span className="text-white font-bold">Sanjay S</span>, a passionate Full Stack Developer based in Coimbatore, Tamil Nadu, India. I specialize in building intelligent, scalable web applications by integrating <span className="text-white font-medium">full stack development, AI/ML, and data science</span>.
            </p>
            <p className="text-lg leading-relaxed text-secondary-text">
              My approach focuses on clean architecture, data-driven design, and high-performance user experiences. Whether it's developing real-time systems or solving complex data problems, I enjoy transforming challenges into efficient and impactful digital solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section>
        <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-12 block">
          // SKILLS
        </span>
        
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="space-y-6"
            >
              <span className="font-mono text-accent text-xs tracking-[0.4em] uppercase block opacity-80">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-6 py-2 border border-white/20 text-[11px] font-medium tracking-widest uppercase transition-all duration-300 hover:border-accent hover:text-accent cursor-default bg-surface/30 backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20">
        <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-12 block">
          // EXPERIENCE & EDUCATION
        </span>
        
        <div className="relative border-l border-accent/30 ml-2 md:ml-4 pl-8 md:pl-12 space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Dot on the line */}
              <div className="absolute left-[-41px] md:left-[-57px] top-2 w-[16px] h-[16px] bg-accent rounded-full border-4 border-background" />
              
              <span className="font-mono text-accent text-sm mb-2 block">{item.year}</span>
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              {item.institution && (
                <p className="text-accent font-medium mb-3">{item.institution}</p>
              )}
              <p className="text-secondary-text max-w-2xl leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
