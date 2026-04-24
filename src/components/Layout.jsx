import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ParticlesBackground } from "./ParticlesBackground";
import { CustomCursor } from "./CustomCursor";
import ScrollIndicator from "./ScrollIndicator";

import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

export const Layout = () => {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const socialLinks = [
    { 
      icon: FaGithub, 
      link: "https://github.com/kunguma-sri06",
      hoverColor: "hover:text-[#ffffff]",
      glow: "hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
    },
    { 
      icon: FaLinkedin, 
      link: "https://www.linkedin.com/in/gokula-kunguma-sri-313643326/",
      hoverColor: "hover:text-[#0077B5]",
      glow: "hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.8)]"
    },
    { 
      icon: FaInstagram, 
      link: "https://www.instagram.com/_kunguma__sri_/",
      hoverColor: "hover:text-[#E1306C]",
      glow: "hover:drop-shadow-[0_0_10px_rgba(225,48,108,0.8)]"
    }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleMobileNav = (path) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen bg-background font-space selection:bg-accent selection:text-background">
      {/* Background Layer */}
      <div className="fixed inset-0 bg-grid -z-20 pointer-events-none" />
      <ParticlesBackground />
      <CustomCursor />
      <ScrollIndicator />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full glass z-40 px-8 py-6 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="text-xl font-bold tracking-tighter hover:text-accent transition-colors z-50">
          GOKULA KUNGUMA SRI
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `nav-link uppercase text-xs tracking-widest font-medium transition-colors ${isActive ? 'active text-accent' : 'text-primary-text/70 hover:text-primary-text'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-accent z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={22} />}
        </button>

        {/* Mobile Side Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-screen w-[75vw] max-w-[300px] bg-background border-l border-accent/20 md:hidden z-40 flex flex-col justify-center items-center"
              >
                <div className="flex flex-col gap-8 items-center w-full px-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => handleMobileNav(link.path)}
                      className="text-lg font-mono uppercase tracking-[0.2em] text-white hover:text-accent transition-colors py-4 w-full text-center"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <div className="flex flex-col min-h-screen">
        <main className="grow mx-auto w-full max-w-7xl px-8 pt-32 pb-20 relative z-10">
          <Outlet />
        </main>

        <footer className="mx-auto w-full max-w-7xl px-8 py-12 border-t border-white/5 flex flex-col items-center gap-6">
          <div className="flex gap-8">
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
          </div>
          <div className="text-center space-y-2">
            <p className="text-secondary-text text-[10px] uppercase tracking-[0.2em]">
              © 2026 GOKULA KUNGUMA SRI. Built from scratch.
            </p>
            <p className="text-accent text-[8px] uppercase tracking-[0.3em] font-mono">
              React + Three.js + Framer Motion
            </p>
          </div>
        </footer>
      </div>

      {/* Atmospheric Blob */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 animate-blob" />
    </div>
  );
};
