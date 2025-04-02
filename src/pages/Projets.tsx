import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Projets.css";
import StarOverlay from "../components/StarOverlay/StarOverlay";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const filtresData = {
  Réaliser: `Réaliser une solution informatique pour un client consiste à la concevoir, la coder, la tester et l’intégrer tout en respectant les besoins exprimés, en appliquant les principes algorithmiques, en veillant à la qualité du code ainsi qu’à sa documentation, et en sélectionnant les ressources techniques les plus adaptées.`,
  Collaborer: `Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique consiste à s’inscrire dans une démarche collaborative au sein d’une équipe pluridisciplinaire, à accompagner la mise en œuvre des évolutions informatiques, à veiller au respect des contraintes juridiques, et à développer une communication à la fois efficace et collaborative.`,
  Conduire: `Satisfaire les besoins des utilisateurs en prenant en compte la chaîne de valeur du client implique d’organiser et de piloter un projet informatique à l’aide de méthodes classiques ou agiles, tout en adoptant une démarche proactive, créative et critique, en respectant les règles juridiques et les normes en vigueur, en communiquant efficacement avec les différents acteurs du projet, et en sensibilisant à une gestion éthique, responsable, durable et interculturelle.`,
  Administer: `Installer, configurer, mettre à disposition et maintenir en conditions opérationnelles les infrastructures, les services et les réseaux consiste à optimiser le système informatique d'une organisation, tout en sécurisant le système d'information, en appliquant les normes en vigueur ainsi que les bonnes pratiques architecturales et de sécurité, en garantissant une qualité de service optimale et en assurant la continuité d'activité.`,
  Optimiser: `Optimisation du code ou des performances dans différents projets pour garantir efficacité et fluidité.Amélioration des temps de chargement.`,
  Gérer : 'Concevoir, gérer, administrer et exploiter les données de l’entreprise permet de fournir les informations essentielles au bon pilotage de celle-ci, tout en respectant les réglementations liées à la vie privée et à la protection des données personnelles, en prenant en compte les enjeux économiques, sociaux et écologiques liés à l’utilisation du stockage de données et aux infrastructures associées (data centers, cloud, etc.), en s’appuyant sur des fondements mathématiques solides, et en assurant la cohérence ainsi que la qualité des données.'
};;

export function FiltresModale() {
  const [selectedFiltre, setSelectedFiltre] = useState(null);

  const closeModal = () => setSelectedFiltre(null);


  return (
    <>
      <div className="filtres">
        {Object.keys(filtresData).map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFiltre(f)}
            className={selectedFiltre === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </div>

      {selectedFiltre && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedFiltre}</h2>
            <p>{filtresData[selectedFiltre]}</p>
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
}

export default function Projets() {
  const [filtre] = useState("Tous");
  const [isLaunching, setIsLaunching] = useState(false);
  const navigate = useNavigate();

  const handleLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setTimeout(() => navigate("/"), 1300);
  };

  const projets = [
    {
      id: 1,
      image: withBase("assets/projets/makethecub.png"),
      titre: "MakeTheCub",
      description:
        "Make The Cub est un projet d’espace d’innovation modulaire basé sur des conteneurs aménagés (coworking, réunion, innovation) à destination des communes, startups et écoles. Le site web permet de gérer les réservations, s’inscrire à des événements et proposer des idées.",
      hardskills: [
        "fa-brands fa-react",
        "fa-brands fa-python",
        "fa-brands fa-css3-alt",
        "fa-brands fa-github",
        "fa-solid fa-database",
        "fa-brands fa-figma"
      ],
      annee: 2025,
      categorie: ["Réaliser", "Optimiser", "Collaborer", "Gérer"]
    },
    {
      id: 2,
      image: withBase("assets/projets/backpack.jpg"),
      titre: "BackPack Hero",
      description:
        "Le jeu se déroule dans un donjon et le but est d'arriver au dernier étage. Chaque étage contient des ennemis, des guérisseurs et bien plus encore. Nous avons développé un système de sac à dos pour contenir les objets. Étant donné la taille du projet, il a fallu optimiser le code pour garder de bonnes performances.",
      hardskills: ["fa-brands fa-java"],
      annee: 2022,
      categorie: ["Réaliser", "Collaborer"]
    },
    {
      id: 3,
      image: withBase("assets/projets/semantix.png"),
      titre: "Semantix",
      description:
        "Le principe de ce jeu est simple. Deux mots sont tirés aléatoirement, et un score de similarité est calculé. Le but est d’ajouter des mots proches pour réduire ce score.",
      hardskills: [
        "fa-brands fa-html5",
        "fa-brands fa-css3-alt",
        "fa-brands fa-github",
        "fa-solid fa-database",
        "fa-brands fa-figma",
        "fa-brands fa-php"
      ],
      annee: 2023,
      categorie: ["Réaliser", "Collaborer", "Gérer", "Optimiser", "Conduire"]
    },
    {
      id: 4,
      image: withBase("assets/projets/balls_game.png"),
      titre: "Jeu des Boules",
      description:
        "Jeu développé en Python dans lequel les joueurs créent ou divisent des boules. Plusieurs modes de jeu sont disponibles.",
      hardskills: ["fa-brands fa-python"],
      annee: 2022,
      categorie: ["Réaliser", "Collaborer", "Optimiser"]
    },
    {
      id: 5,
      image: withBase("assets/projets/rm.png"),
      titre: "Activités pour une mairie",
      description:
        "Projet de prestataire pour une mairie afin de promouvoir les activités sportives via une maquette Figma.",
      hardskills: ["fa-brands fa-figma"],
      annee: 2023,
      categorie: ["Collaborer", "Conduire"]
    },
    {
      id: 6,
      image: withBase("assets/projets/mali.jfif"),
      titre: "Transactions bancaires",
      description:
        "Développement en groupe d’une plateforme de gestion de transactions bancaires avec HTML, CSS, JS, PHP et Git.",
      hardskills: [
        "fa-brands fa-html5",
        "fa-brands fa-css3-alt",
        "fa-brands fa-github",
        "fa-solid fa-database",
        "fa-brands fa-figma",
        "fa-brands fa-php"
      ],
      annee: 2023,
      categorie: ["Collaborer", "Conduire", "Réaliser"]
    },
    {
      id: 7,
      image: withBase("assets/projets/unesco.svg"),
      titre: "Projet MCN - Unesco",
      description:
        "En partenariat avec l'Unesco, développement d'une application web pour promouvoir des activités culturelles à Séville.",
      hardskills: [
        "fa-brands fa-html5",
        "fa-brands fa-css3-alt",
        "fa-brands fa-github",
        "fa-solid fa-database",
        "fa-brands fa-php"
      ],
      annee: 2023,
      categorie: ["Collaborer"]
    }
  ];

  const projetsFiltres = projets.filter(
    (p) => filtre === "Tous" || (Array.isArray(p.categorie) && p.categorie.includes(filtre))
  );

  return (
    <div className={`planet-accueil2 ${isLaunching ? "decolle" : ""}`}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
      <StarOverlay isZooming={isLaunching} />
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <div className="planet-content2">
        <div className="intro2">
          <h1>Mes projets</h1>
          <p>
            Au cours de ma formation en BUT Informatique, enrichie par mon expérience en alternance, j'ai eu l'opportunité de participer à la réalisation de nombreux projets concrets. Ces expériences m'ont permis de développer mes compétences en développement web, en gestion de projet et en conception d'applications. Vous trouverez ci-dessous une sélection de projets représentatifs de mon parcours, alliant rigueur technique et créativité.
          </p>
        </div>

        <FiltresModale />

        <div className="grille-projets">
          {projetsFiltres.map((projet) => (
            <div key={projet.id} className="carte-projet">
              <div className="image-container">
                <img src={projet.image} alt={projet.titre} className="projet-image" />
                <span className="annee-badge">{projet.annee}</span>
              </div>
              <div className="projet-details">
                <h2>{projet.titre}</h2>
                <p>{projet.description}</p>
                <div className="competences-textuelles">
                  {(Array.isArray(projet.categorie) ? projet.categorie : [projet.categorie]).map((cat, index) => (
                    <span key={index} className="categorie-badge">{cat}</span>
                  ))}
                </div>
                <div className="competences-utilisees">
                  {projet.hardskills.map((classe, index) => (
                    <i key={index} className={`skill-icon ${classe}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={withBase("assets/spaceship.png")}
        alt="Fusée"
        className={`rocket-fixed ${isLaunching ? "launching" : ""}`}
        onClick={handleLaunch}
      />
    </div>
  );
}
