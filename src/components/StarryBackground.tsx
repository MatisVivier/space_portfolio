import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function StarryBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", zIndex: -1 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000002" }, // <- encore plus sombre
          fullScreen: { enable: true, zIndex: -2 },
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
              value: 0.5, // <- étoiles moins éclatantes
              random: true,
            },
            size: {
              value: 1.5,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.2,
              random: true,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
              },
              resize: false,
            },
          },
          retina_detect: true,
          emitters: {
            direction: "top-right",
            rate: {
              delay: 0.2,
              quantity: 1,
            },
            size: {
              width: 100,
              height: 0,
            },
            position: {
              x: 0,
              y: 100,
            },
          },
        }}
      />
    </div>
  );
}
