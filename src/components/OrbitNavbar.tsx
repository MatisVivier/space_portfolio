import { useState } from "react";
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

export default function OrbitNavbar() {
  const navigate = useNavigate();

  const planets: Planet[] = [
    {
      name: "Accueil",
      image: "/assets/earth.png",
      angle: 0,
      distance: 200,
      size: 70,
      route: "/accueil",
      content: {
        characteristics: "Interface principale du vaisseau. Accès rapide aux systèmes.",
        environment: "Navigation fluide avec étoiles réactives.",
        lifeforms: "Capitaine, IA de bord et visiteurs galactiques.",
      },
    },
    {
      name: "À propos",
      image: "/assets/2.png",
      angle: 50,
      distance: 450,
      size: 90,
      route: "/a-propos",
      content: {
        characteristics: "Base de données personnelle et historique du pilote.",
        environment: "Infos bio-tech calibrées pour l’analyse.",
        lifeforms: "Présence du pilote détectée.",
      },
    },
    {
      name: "Projets",
      image: "/assets/1.png",
      angle: 120,
      distance: 300,
      size: 60,
      route: "/projets",
      content: {
        characteristics: "Archives de missions passées et prototypes en cours.",
        environment: "Système modulaire. Code en orbite constante.",
        lifeforms: "Bots travailleurs, idées mutantes.",
      },
    },
    {
      name: "Contact",
      image: "/assets/3.png",
      angle: 220,
      distance: 400,
      size: 80,
      route: "/contact",
      content: {
        characteristics: "Canal de communication intergalactique.",
        environment: "Connexion sécurisée via hyper-réseau.",
        lifeforms: "Formulaire vivant prêt à transmettre.",
      },
    },
  ];

  const [activePlanet, setActivePlanet] = useState<Planet | null>(null);

  return (
    <>
      <div className="orbit-container">
        <img src="/assets/soleil.png" className="orbit-sun" alt="Soleil" />

        {planets.map((planet) => (
          <div
            key={planet.name}
            className="orbit-planet"
            style={
              {
                "--angle": `${planet.angle}deg`,
                "--distance": `${planet.distance}px`,
                "--size": `${planet.size}px`,
              } as React.CSSProperties
            }
            onClick={() => setActivePlanet(planet)}
          >
            <img src={planet.image} alt={planet.name} />
            <span>{planet.name}</span>
          </div>
        ))}
      </div>

      {activePlanet && (
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
          <button
            className="visit-btn"
            onClick={() => navigate(activePlanet.route)}
          >
            Accéder à la planète
          </button>
        </div>
      )}
    </>
  );
}
