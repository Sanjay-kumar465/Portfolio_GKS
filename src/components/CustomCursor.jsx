import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [dragDirection, setDragDirection] = useState(0); // in degrees
  const [scrollDirection, setScrollDirection] = useState(null); // 'up' or 'down'

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring spring (lag)
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  // Mouse Trail (8 dots)
  const trailDots = Array.from({ length: 8 }).map((_, i) => ({
    x: useSpring(mouseX, { stiffness: 120, damping: 25 + i * 5 }),
    y: useSpring(mouseY, { stiffness: 120, damping: 25 + i * 5 }),
    opacity: 0.5 - i * 0.06,
    scale: 1 - i * 0.1
  }));

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    // Media query to check for mouse vs touch
    const desktopMedia = window.matchMedia("(pointer: fine)");
    const touchMedia = window.matchMedia("(pointer: coarse)");
    
    setIsDesktop(desktopMedia.matches);
    setIsTouchDevice(touchMedia.matches);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (isClicking) {
        // Calculate drag stretch direction roughly
        const dx = e.movementX;
        const dy = e.movementY;
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
          setDragDirection(Math.atan2(dy, dx) * (180 / Math.PI));
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setScrollDirection(null), 800);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isClicking]);

  if (!isDesktop || isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-9999">
      {/* Trail Dots */}
      {trailDots.map((dot, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-1 h-1 bg-accent rounded-full"
          style={{
            x: dot.x,
            y: dot.y,
            translateX: "-50%",
            translateY: "-50%",
            opacity: dot.opacity,
            scale: dot.scale,
            zIndex: 9997 - i
          }}
        />
      ))}

      {/* Ring (Spring Lag) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-accent rounded-full flex items-center justify-center overflow-hidden"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.8 : isClicking ? 0.8 : 1,
          rotate: isClicking ? dragDirection : 0,
          scaleX: isClicking ? 1.4 : isHovering ? 1.8 : 1,
          zIndex: 9998
        }}
      >
        <AnimatePresence>
          {scrollDirection && (
            <motion.span
              key={scrollDirection}
              initial={{ opacity: 0, y: scrollDirection === 'down' ? -4 : 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: 10,
                color: '#facc15',
                fontWeight: 700,
                userSelect: 'none',
                position: 'absolute'
              }}
            >
              {scrollDirection === "down" ? "↓" : "↑"}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Dot (Instant) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2 : isClicking ? 0.5 : 1,
          opacity: isHovering ? 0.5 : 1,
          zIndex: 9999
        }}
      />
    </div>
  );
};
