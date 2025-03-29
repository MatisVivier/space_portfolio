import StarOverlay from "../components/StarOverlay/StarOverlay";
import "../styles/Accueil.css";
import maPhoto from "/assets/moi.jpg"; // adapte selon ton image
import earthPlanet from "/assets/earth.png"; // adapte le chemin si besoin

export default function Accueil() {
  return (
    
    <div className="planet-accueil">
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600&display=swap" rel="stylesheet"></link>

      <div className="heat-haze" />
      <StarOverlay />

      <div className="cloud cloud1" />
      <div className="cloud cloud2" />
      <div className="cloud cloud3" />
      <div className="cloud cloud4" />

      <div className="planet-content">
        <section className="intro">
          <img src={maPhoto} alt="Moi" className="photo-profil" />
          <div>
            <h1>Bienvenue à bord !</h1>
            <p>
              Moi c’est <strong>[Ton Prénom Nom]</strong>, développeur passionné par le code, le design, et les aventures intergalactiques du web.
            </p>
            <p>
              Curieux, créatif et rigoureux, j’adore transformer des idées en interfaces interactives et immersives. 
            </p>
          </div>
        </section>

        <section className="orbit-section">
        {/* Partie gauche : Timeline */}
        <div className="timeline-orbit">
            {/* tes événements existants ici */}
            <div className="orbit-line">

                  <div className="timeline-event left" style={{marginTop: "5px"}}>
                    <div className="event-content">
                        <h3>Alternance chez Groupama Support et Service - Développeur Fullstack</h3>
                        <h4>La Défense</h4>
                        <span className="event-date">2023 - présent</span>
                        <p>
                        Participation au développement et à la maintenance d'applications web (Symfony, WordPress, Drupal), avec une approche agile utilisant GitLab, Jira et Confluence. Gestion courante de bases de données MySQL et Oracle.                  </p>
                      </div>
                  </div>

                  <div className="timeline-event right">
                    <div className="event-content">
                      <h3>BUT Informatique – IUT de Marne La Vallée</h3>
                      <h4>Université Gustave Eiffel, Champs-sur-Marne</h4>
                      <span className="event-date">2022 - présent</span>
                      <p>
                      Étudiant en BUT Informatique en alternance, je me spécialise dans la réalisation d'applications, de la conception au développement et à la validation. Cette formation professionnalisante me permet de consolider mes compétences techniques tout en les appliquant concrètement en entreprise.                </p>
                    </div>
                  </div>

                  <div className="timeline-event left">
                  <div className="event-content">
                      <h3>Première expérience professionnelle en tant qu'employé polyvalent</h3>
                      <h4>Crêperie au Rythme des Marées - Saint-Brieuc</h4>
                      <span className="event-date">2022</span>
                      <p>
                      Lors de mon job d’été en crêperie, j’ai participé à la confection des plats ainsi qu’au service en salle et en terrasse, développant ainsi mon sens de l’organisation, du contact client et du travail en équipe.                </p>
                    </div>
                  </div>

                  <div className="timeline-event right">
                  <div className="event-content">
                      <h3>Baccalauréat Technologique</h3>
                      <h4>Lycée Pierre de Coubertin - Meaux</h4>
                      <span className="event-date">2019 - 2022</span>
                      <p>
                        J’ai obtenu un baccalauréat STI2D, spécialité Systèmes d’Information et Numérique, avec la mention Assez Bien. Cette formation m’a permis d’acquérir des bases solides en technologies numériques et en développement, qui m’ont naturellement conduit vers des études en informatique.              
                      </p>
                    </div>
                  </div>
            <div className="timeline-planet">
              <img src={earthPlanet} alt="Planète Terre" className="planet-img" />
            </div>
          </div>
        </div>

          {/* Partie droite : Skills & Passions */}
          <div className="skills-passions">
            <div className="skills-section">
              <h2>Compétences apprise en formation & alternance</h2>
              <div className="skills-grid">
                <img src="/assets/skills/symfony.png" alt="Symfony" style={{width: "80px"}}/>
                <img src="/assets/skills/react.png" alt="React" style={{width: "60px"}}/>
                <img src="/assets/skills/javascript.png" alt="JavaScript" style={{width: "60px"}}/>
                <img src="/assets/skills/html.png" alt="HTML" style={{width: "100px", height: "85px"}}/>
                <img src="/assets/skills/css.png" alt="CSS" style={{width: "50px"}}/>
                <img src="/assets/skills/php.png" alt="PHP" style={{width: "70px", height: "85px"}}/>
                <img src="/assets/skills/sql.png" alt="MySQL" style={{width: "80px"}}/>
                <img src="/assets/skills/java.png" alt="Git" style={{width: "80px"}}/>
              </div>
            </div>


            <div className="skills-section">
              <h2>💡 Soft Skills</h2>
              <ul>
                <li>Travail en équipe & communication</li>
                <li>Autonomie et esprit d’initiative</li>
                <li>Adaptabilité & curiosité</li>
                <li>Esprit d’analyse & rigueur</li>
              </ul>
            </div>

            <div className="skills-section">
              <h2>🌌 Passions</h2>
              <ul>
                <li>Game dev (Unity, C#)</li>
                <li>Pixel art (Aseprite)</li>
                <li>Jeux narratifs & immersifs</li>
                <li>Création de projets web</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
