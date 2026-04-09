import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: !isMobile,
            mode: ["grab", "repulse"],
          },
        },
        modes: {
          push: {
            quantity: isMobile ? 2 : 3,
          },
          grab: {
            distance: 180,
            links: {
              opacity: 0.3
            }
          },
          repulse: {
            distance: 80,
            duration: 0.4
          }
        },
      },
      particles: {
        color: {
          value: "#facc15",
        },
        links: {
          color: "#facc15",
          distance: 130,
          enable: !isMobile,
          opacity: 0.08,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: isMobile ? 0.5 : 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: isMobile ? 30 : 80,
        },
        opacity: {
          value: { min: 0.1, max: 0.35 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false
          }
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1.5, max: 3 },
        },
      },
      detectRetina: true,
    };
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="fixed inset-0 z-0 pointer-events-none"
      />
    );
  }

  return null;
};
