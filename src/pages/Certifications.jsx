import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CERTIFICATES = [
  {
    name: "Artificial Intelligence Internship",
    issuer: "NoviTech R&D Pvt Ltd",
    date: "Aug 2025",
    id: "AIIN13265",
    file: "ai.pdf"
  },
  {
    name: "Machine Learning Internship",
    issuer: "NoviTech R&D Pvt Ltd",
    date: "Aug 2025",
    id: "MLIN6828",
    file: "ml.pdf"
  },
  {
    name: "Data Analytics Masterclass",
    issuer: "NoviTech R&D Pvt Ltd",
    date: "Aug 2025",
    id: "NT_B25DAE230",
    file: "data_analytics.pdf"
  },
  {
    name: "Data Science Internship",
    issuer: "Pinnacle Labs",
    date: "Aug 17, 2025",
    id: "PL/2025/JULP5/217",
    file: "pinnacle.pdf"
  },
  {
    name: "Thooral Hackathon — Participation",
    issuer: "PSG College of Technology (Infinitum 2026)",
    date: "Feb 2026",
    id: "—",
    file: "thooral.pdf"
  },
  {
    name: "Lithos 2K26 — Participation",
    issuer: "Chennai Institute of Technology",
    date: "Feb 2026",
    id: "—",
    file: "cit.pdf"
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

export default function Certifications() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const checkIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(checkIOS);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-32"
    >
      <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
        // 04
      </span>
      <h2 className="section-title">Certifications</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
      >
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass p-8 border border-white/8 hover:border-accent transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
          >
            <div className="grow">
              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors">
                {cert.name}
              </h3>
              <p className="text-accent font-medium mb-1">{cert.issuer}</p>
              <div className="flex flex-col gap-1 mt-4">
                <p className="text-secondary-text text-sm">Issue Date: {cert.date}</p>
                <p className="text-secondary-text text-xs font-mono">ID: {cert.id}</p>
              </div>
            </div>

            <a
              href={`/certificates/${cert.file}`}
              download={isIOS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full min-h-[48px] py-4 bg-accent text-background font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-all text-center flex items-center justify-center"
            >
              {isIOS ? "Download Certificate" : "View Certificate"}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
