import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrbitNavbar.css";

type Planet = {
  name: string;
  image: string;
  angle: number;
  distance: number;
  size: number;
  route: string;
  content: {
    characteristics: string;
    environment: string;
    lifeforms: string;
  };
};

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function OrbitNavbar() {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  const planets: Planet[] = [
    {
      name: "À propos de moi",
      image: withBase("assets/earth.png"),
      angle: 0,
      distance: 200,
      size: 70,
      route: "/a-propos-de-moi",
      content: {
        characteristics: "Base de données personnelle et historique du créateur de l'univers.",
        environment: "Une introduction, une timeline, ainsi que les différentes compétences acquise durant le parcours universitaire et proffessionnelles",
        lifeforms: "Présence du créateur détectée",
      },
    },
    {
      name: "CV",
      image: withBase("assets/2.png"),
      angle: 50,
      distance: 450,
      size: 90,
      route: "/cv",
      content: {
        characteristics: "Canal de communication intergalactique.",
        environment: "Connexion sécurisée via hyper-réseau.",
        lifeforms: "Formulaire vivant prêt à transmettre.",
      },
    },
    {
      name: "Contact",
      image: withBase("assets/1.png"),
      angle: 120,
      distance: 300,
      size: 60,
      route: "/contact",
      content: {
        characteristics: "Archives de missions passées et prototypes en cours.",
        environment: "Système modulaire. Code en orbite constante.",
        lifeforms: "Bots travailleurs, idées mutantes.",
      },
    },
    {
      name: "Projets",
      image: withBase("assets/3.png"),
      angle: 220,
      distance: 400,
      size: 100,
      route: "/projets",
      content: {
        characteristics: "Archives de missions passées et prototypes en cours.",
        environment: "Liste des projets du créateur",
        lifeforms: "Bots travailleurs, idées mutantes.",
      },
    },
  ];

  const [activePlanet, setActivePlanet] = useState<Planet | null>(null);
  const planetRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const shipRef = useRef<HTMLDivElement>(null);

  const handleVisit = (route: string) => {
    if (!shipRef.current || !activePlanet) return;

    const ship = shipRef.current;
    const planetEl = planetRefs.current[activePlanet.name];
    if (!planetEl) return;

    const img = ship.querySelector("img") as HTMLImageElement;
    if (!img) return;

    img.style.display = "block";

    const planetRect = planetEl.getBoundingClientRect();
    const shipRect = ship.getBoundingClientRect();

    const planetCenterX = planetRect.left + planetRect.width / 2;
    const planetCenterY = planetRect.top + planetRect.height / 2;
    const shipCenterX = shipRect.left + shipRect.width / 2;
    const shipCenterY = shipRect.top + shipRect.height / 2;

    const deltaX = planetCenterX - shipCenterX;
    const deltaY = planetCenterY - shipCenterY;

    const angleRad = Math.atan2(deltaY, deltaX);
    const angleDeg = angleRad * (180 / Math.PI);

    img.style.transition = "transform 0.5s ease-in-out";
    img.style.transform = `rotate(${angleDeg + 90}deg)`;

    ship.style.transition = "transform 1.7s ease-in-out";
    ship.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    setTimeout(() => {
      navigate(route);
    }, 1500);
  };

  const handleDirectNavigate = (planet: Planet) => {
    if (planet.name === "CV") {
      const link = document.createElement("a");
      link.href = withBase("assets/cv.pdf");
      link.download = "cv_Matis_VIVIER.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      navigate(planet.route);
    }
  };

  useEffect(() => {
    const img = document.querySelector("#spaceship-img") as HTMLImageElement;
    if (img) {
      img.style.display = "block";
    }
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="mobile-navbar">
          <h2 className="mobile-navbar-title">🌌 Explorer le portfolio</h2>
          <ul className="mobile-planet-list">
            {planets.map((planet) => (
              <li
                key={planet.name}
                className="mobile-planet-item"
                onClick={() => handleDirectNavigate(planet)}
              >
                <img src={planet.image} alt={planet.name} />
                <span>{planet.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="orbit-container">
          <img src={withBase("assets/soleil.png")} className="orbit-sun" alt="Soleil" />
          <div className="solar-caption">Cliquez (et survolez) sur une planète pour commencer votre exploration</div>

          {planets.map((planet) => (
            <div
              key={planet.name}
              className="orbit-planet"
              style={{
                "--angle": `${planet.angle}deg`,
                "--distance": `${planet.distance}px`,
                "--size": `${planet.size}px`,
              } as React.CSSProperties}
              ref={(el) => {
                planetRefs.current[planet.name] = el;
              }}
              onClick={() => {
                if (planet.name === "CV") {
                  const link = document.createElement("a");
                  link.href = withBase("assets/cv.pdf");
                  link.download = "cv_Matis_VIVIER.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                } else {
                  setActivePlanet(planet);
                }
              }}
            >
              <img src={planet.image} alt={planet.name} />
              <span>{planet.name}</span>
            </div>
          ))}

          <div className="spaceship-to-planet" ref={shipRef}>
            <img src={withBase("assets/spaceship.png")} alt="Vaisseau" />
          </div>
        </div>
      )}

      {!isMobile && activePlanet && (
        <div className="hud-modal">
          <button className="close-btn" onClick={() => setActivePlanet(null)}>×</button>
          <div className="hud-header">
            <img src={activePlanet.image} alt={activePlanet.name} />
            <h2>Analyse : {activePlanet.name}</h2>
          </div>
          <div className="hud-section">
            <h3>🧬 Caractéristiques</h3>
            <p>{activePlanet.content.characteristics}</p>
          </div>
          <div className="hud-section">
            <h3>🌌 Environnement</h3>
            <p>{activePlanet.content.environment}</p>
          </div>
          <div className="hud-section">
            <h3>👾 Créatures présentes</h3>
            <p>{activePlanet.content.lifeforms}</p>
          </div>
          <button className="visit-btn" onClick={() => handleVisit(activePlanet.route)}>
            Accéder à la planète
          </button>
        </div>
      )}
    </>
  );
}
