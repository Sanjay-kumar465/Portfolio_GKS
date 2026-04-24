import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, MapPin, Loader2, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

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

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setLoading(false);
        setStatus('success');
        formRef.current.reset();
      }, (error) => {
        setLoading(false);
        setStatus('error');
        console.error(error);
      });
  };

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

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pb-32"
    >
      <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
        // 05
      </span>
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Side: Info */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <p className="text-xl text-secondary-text leading-relaxed max-w-sm">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>

          <div className="space-y-6">
            <div className="space-y-4 pt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&to=gokulakungumasri@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-secondary-text group hover:text-accent transition-colors min-h-[48px]"
              >
                <Mail size={20} className="text-accent" />
                <span>gokulakungumasri@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-secondary-text group hover:text-accent transition-colors">
                <FaPhone size={20} className="text-accent" />
                <span>+91 6384166446</span>
              </div>
              <div className="flex items-center gap-4 text-secondary-text">
                <MapPin size={20} className="text-accent" />
                <span>Coimbatore , Tamilnadu - 641008</span>
              </div>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&to=gokulakungumasri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-4 text-3xl font-bold hover:text-accent transition-colors group underline decoration-white/10 underline-offset-8 decoration-1 min-h-[44px]"
            >
              Let's talk <Mail className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Social Row */}
          <div className="flex gap-8 pt-8 border-t border-white/10">
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
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-accent font-mono font-bold">Full Name</label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Ex. John Doe"
                className="w-full bg-transparent border-b border-white/15 py-4 focus:border-accent outline-none text-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-accent font-mono font-bold">Email Address</label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="ex@gmail.com"
                className="w-full bg-transparent border-b border-white/15 py-4 focus:border-accent outline-none text-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-accent font-mono font-bold">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Project Inquiry"
                className="w-full bg-transparent border-b border-white/15 py-4 focus:border-accent outline-none text-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-accent font-mono font-bold">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="How can I help you?"
                className="w-full bg-transparent border-b border-white/15 py-4 focus:border-accent outline-none text-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-12 py-5 bg-accent text-background font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>Sending <Loader2 className="animate-spin" size={18} /></>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {status === 'success' && (
              <p className="bg-accent text-background px-4 py-3 font-bold text-sm text-center">
                MESSAGE SENT SUCCESSFULLY!
              </p>
            )}
            {status === 'error' && (
              <p className="bg-red-500 text-white px-4 py-3 font-bold text-sm text-center">
                FAILED TO SEND MESSAGE.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
