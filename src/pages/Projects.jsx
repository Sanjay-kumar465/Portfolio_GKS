import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    name: "Real-time Collaborative Text Editor",
    category: "Full Stack",
    description: "A Google Docs-style real-time collaborative editor with conflict resolution.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/Sanjay-kumar465/Real-time-Collaborative-Text-Editor",
    demo: "#"
  },
  {
    id: "02",
    name: "Online Grocery Order Processing System",
    category: "Full Stack",
    description: "End-to-end grocery management system with inventory tracking and Java backend.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/Sanjay-kumar465/ONLINE-GROCERY-ORDER-PROCESSING-SYSTEM",
    demo: "#"
  },
  {
    id: "03",
    name: "ChatApp",
    category: "Full Stack",
    description: "Multi-room messaging application with user authentication and instant delivery.",
    tech: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/Sanjay-kumar465/chatapp",
    demo: "#"
  },
  {
    id: "04",
    name: "TN-Restaurant_Hub",
    category: "Frontend",
    description: "Restaurant discovery platform for Tamil Nadu with elegant UI and area-based search.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Sanjay-kumar465/TN-Restaurant_Hub",
    demo: "#"
  },
  {
    id: "05",
    name: "FakeNewsDetection",
    category: "Backend",
    description: "Machine learning Pipeline for identifying misinformation using NLP algorithms.",
    tech: ["Python", "ML", "NLP"],
    github: "https://github.com/Sanjay-kumar465/FakeNewsDetection",
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
