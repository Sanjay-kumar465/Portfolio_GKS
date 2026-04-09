import { motion } from "framer-motion";
import { Hero3D } from "../components/Hero3D";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const roles = ["Full Stack Developer", "AI & ML Engineer", "Open Source Builder", "Web Developer ", "Data Engineer "];

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

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/Sanjay-kumar465",
      hoverColor: "hover:text-[#ffffff]",
      glow: "hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/sanjay-senthikumar/",
      hoverColor: "hover:text-[#0077B5]",
      glow: "hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.8)]"
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/sanjay__kumar465/",
      hoverColor: "hover:text-[#E1306C]",
      glow: "hover:drop-shadow-[0_0_10px_rgba(225,48,108,0.8)]"
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-[calc(100vh-128px)] flex flex-col justify-center"
    >
      <Hero3D />

      <div className="z-10 w-full max-w-4xl">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            // Welcome to my space
          </span>
          <h1 className="hero-title mb-6 text-4xl md:text-6xl lg:text-8xl">
            Sanjay <br />
            <span className="text-secondary-text">Senthilkumar</span>
          </h1>
        </motion.div>

        <div className="space-y-0">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="h-8 mb-8 overflow-hidden">
              <motion.p
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-medium text-accent"
              >
                {roles[roleIndex]}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-secondary-text text-lg max-w-xl mb-12 leading-relaxed">
              Creating smart, scalable digital solutions by combining AI/ML, Data Analytics, and Full Stack Web Development. Passionate about clean architecture, performance, and modern user experiences.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-6 mb-12"
          >
            <Link to="/projects">
              <button className="px-8 py-4 bg-accent text-background font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3 min-h-[48px]">
                View My Work <ArrowRight size={18} />
              </button>
            </Link>

            <a href="/resume.pdf" download>
              <button className="px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-3 min-h-[48px]">
                Resume <Download size={18} />
              </button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex gap-8"
          >
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-secondary-text transition-all duration-300 ${social.hoverColor} ${social.glow} min-w-[44px] min-h-[44px] flex items-center justify-center`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-[-40px] left-0 w-px bg-accent/20"
      />
    </motion.div>
  );
}

