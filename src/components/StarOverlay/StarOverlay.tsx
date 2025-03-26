import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export default function StarOverlay() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Particles
        id="star-overlay"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: { value: "#ffffff" },
            opacity: {
              value: 1,
              random: true,
            },
            size: {
              value: 1.5,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.05,
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
