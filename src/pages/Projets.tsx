import StarOverlay from "../components/StarOverlay/StarOverlay";
import "../components/Projets.css";

export default function Projets() {
  // Simule des projets (tu pourras ensuite les charger dynamiquement)
  const projets = [
    {
      id: 1,
      titre: "Portfolio spatial",
      annee: 2025,
      competences: ["UI/UX", "React", "Design"],
      langages: ["React", "CSS", "JS"],
      image: "/assets/projets/portfolio.jpg",
    },
    {
      id: 2,
      titre: "Jeu Unity : Time Loop",
      annee: 2024,
      competences: ["Game Design", "C#", "Narration"],
      langages: ["Unity", "C#"],
      image: "/assets/projets/unity.jpg",
    },
    // Ajoute autant de projets que tu veux
  ];

  return (
    <div className="planet-accueil2">
      <div className="heat-haze" />
      <StarOverlay />

      <div className="planet-content">
        <h1>🚀 Mes Projets</h1>

        {/* 🔍 Filtres (à implémenter plus tard si besoin) */}
        <div className="filtres">
          <button>Tous</button>
          <button>React</button>
          <button>Unity</button>
          <button>2025</button>
        </div>

        {/* 🪐 Grille des projets */}
        <div className="grille-projets">
          {projets.map((projet) => (
            <div key={projet.id} className="carte-projet">
              <img src={projet.image} alt={projet.titre} className="projet-image" />
              <div className="projet-details">
                <h2>{projet.titre}</h2>
                <p><strong>Année :</strong> {projet.annee}</p>
                <p><strong>Compétences :</strong> {projet.competences.join(", ")}</p>
                <p><strong>Langages :</strong> {projet.langages.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
