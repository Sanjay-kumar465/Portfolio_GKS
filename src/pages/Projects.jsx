import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    name: "Spring Boot Pharmacy Inventory Management",
    category: "Backend",
    description: "A spring boot project that shows how the backend is working for a inventory management system.",
    tech: ["Java", "Spring Boot", "Backend"],
    github: "https://github.com/kunguma-sri06/SPRING_BOOT_PHARMACY_INVENTORY_MANAGEMNET",
    demo: "#"
  },
  {
    id: "02",
    name: "Java Games",
    category: "Backend",
    description: "A collection of interactive games developed in Java.",
    tech: ["Java", "OOP", "Game Development"],
    github: "https://github.com/kunguma-sri06/JAVA_GAMES",
    demo: "#"
  },
  {
    id: "03",
    name: "CodeSoft Landing Page",
    category: "Frontend",
    description: "A responsive landing page design created as part of CodeSoft internship.",
    tech: ["HTML", "CSS", "Frontend"],
    github: "https://github.com/kunguma-sri06/CODESOFT_LANDINGPAGE",
    demo: "#"
  },
  {
    id: "04",
    name: "CodSoft",
    category: "Frontend",
    description: "Frontend web development internship projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kunguma-sri06/CODSOFT",
    demo: "#"
  },
  {
    id: "05",
    name: "Personal Portfolio",
    category: "Frontend",
    description: "A personal portfolio website showcasing skills and projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kunguma-sri06/CODESOFT_personal_portfolio",
    demo: "#"
  }
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

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

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => 
    filter === "All" || p.category === filter
  );

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-32"
    >
      <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
        // 02
      </span>
      <h2 className="section-title">Selected Work</h2>

      {/* Filter Tabs */}
      <motion.div 
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-4 md:gap-8 mb-16 border-b border-white/10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`pb-4 text-xs uppercase tracking-widest font-medium transition-all relative min-h-[44px] flex items-center px-2 ${
              filter === cat ? "text-accent" : "text-secondary-text hover:text-white"
            }`}
          >
            {cat}
            {filter === cat && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Project Stack */}
      <div className="space-y-0">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group py-12 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 hover:bg-white/2 px-4 -mx-4 transition-colors relative"
            >
              {/* Number */}
              <span className="font-mono text-accent text-lg opacity-40 group-hover:opacity-100 transition-opacity">
                {project.id}
              </span>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-secondary-text text-lg mb-6 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-mono text-accent/80 px-2 py-1 border border-accent/20 bg-accent/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-white/10 rounded-full hover:border-accent hover:text-accent transition-all hover:scale-110"
                  aria-label="GitHub Repository"
                >
                  <Code2 size={20} />
                </a>
                <a 
                  href={project.demo} 
                  className="p-3 border border-white/10 rounded-full hover:border-accent hover:text-accent transition-all hover:scale-110"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
