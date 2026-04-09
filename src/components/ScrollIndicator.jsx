import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{
            position: 'fixed',
            bottom: 'env(safe-area-inset-bottom, 2rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingBottom: '1rem',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none'
          }}
        >
          <span style={{
            fontFamily: 'monospace',
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: '#facc15',
            opacity: 0.6,
            textTransform: 'lowercase'
          }}>scroll</span>

          <div style={{
            width: '24px',
            height: '38px',
            border: '1.5px solid #facc15',
            borderRadius: '12px',
            position: 'relative',
            opacity: 0.8
          }}>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: '4px',
                height: '8px',
                background: '#facc15',
                borderRadius: '2px',
                position: 'absolute',
                top: '6px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '-2px', marginTop: '-2px' }}>
            {[0, 0.2, 0.4].map((delay, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay, ease: "easeInOut" }}
              >
                <FaChevronDown size={8} color="#facc15" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
