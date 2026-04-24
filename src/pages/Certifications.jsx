import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import cert1 from "../assets/certificates/WhatsApp Image 2026-04-17 at 12.28.34 PM.jpeg";
import cert2 from "../assets/certificates/WhatsApp Image 2026-04-17 at 12.29.32 PM.jpeg";
import cert3 from "../assets/certificates/WhatsApp Image 2026-04-17 at 12.31.02 PM.jpeg";
import cert4 from "../assets/certificates/WhatsApp Image 2026-04-17 at 12.31.26 PM.jpeg";
import cert5 from "../assets/certificates/WhatsApp Image 2026-04-17 at 12.31.44 PM.jpeg";
import cert6 from "../assets/certificates/WhatsApp Image 2026-04-17 at 12.32.29 PM.jpeg";

const CERTIFICATES = [
  {
    name: "CEFR B1 Level of the LearnEnglish Course",
    issuer: "EnglishHelper™",
    date: "August 21, 2025",
    id: "—",
    file: cert1,
    credential: ""
  },
  {
    name: "CEFR C1 Level of the LearnEnglish+ Course",
    issuer: "EnglishHelper™",
    date: "December 14, 2025",
    id: "—",
    file: cert2,
    credential: ""
  },
  {
    name: "Introducing Generative AI with AWS",
    issuer: "Udacity / AWS Educate",
    date: "June 26, 2025",
    id: "—",
    file: cert3,
    credential: "https://www.udacity.com/certificate/e/2d32fcca-3e0d-11f0-b59d-63655d1a50e1"
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "02 Jun, 2025",
    id: "—",
    file: cert4,
    credential: ""
  },
  {
    name: "C++ Data Structures in the STL",
    issuer: "Coursera Project Network",
    date: "Apr 18, 2025",
    id: "—",
    file: cert5,
    credential: "https://coursera.org/verify/GLV0Q1205D37"
  },
  {
    name: "FLY-Scholar program",
    issuer: "CMI Competitiveness Mindset Institute",
    date: "October 2025",
    id: "466524154",
    file: cert6,
    credential: ""
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

            <div className="mt-8 flex gap-4 w-full">
              <a
                href={cert.file}
                download={isIOS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[48px] py-4 bg-accent text-background font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-all text-center flex items-center justify-center"
              >
                {isIOS ? "Download" : "View"}
              </a>
              {cert.credential && (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[48px] py-4 border border-accent text-accent font-bold uppercase tracking-widest text-xs hover:scale-[1.02] hover:bg-accent/10 transition-all text-center flex items-center justify-center"
                >
                  Verify
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
