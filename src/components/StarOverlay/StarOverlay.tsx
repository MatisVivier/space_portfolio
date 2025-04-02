import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export default function StarOverlay({ isZooming = false }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      id="star-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: isZooming ? "300vh" : "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "linear-gradient(to top, transparent 70%, #000000 100%)", // ✅ Sombre en haut
        transition: "height 2s ease-in, background 2s ease-in", // ✅ Smooth
      }}
    >
      <Particles
        id="particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 600, density: { enable: true, value_area: 300 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.8, random: true },
            size: { value: 2, random: true },
            move: {
              enable: true,
              speed: 0.1,
              direction: "none",
              random: true,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: { enable: false },
              onclick: { enable: false },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}
