import StarOverlay from "../components/StarOverlay/StarOverlay"; // adapte le chemin

export default function Accueil() {
  return (
    <div className="planet-accueil">
      {/* 🌫️ Effet de chaleur */}
      <div className="heat-haze" />
      <StarOverlay />

      {/* ☁️ Nuages */}
      <div className="cloud cloud1" />
      <div className="cloud cloud2" />
      <div className="cloud cloud3" />
      <div className="cloud cloud4" />

      {/* 💬 Contenu */}
      <div className="planet-content">
        <h1>Bienvenue à bord !</h1>
        <p>
          Ici commence votre exploration. Cette interface centrale vous connecte à tous les systèmes du vaisseau.
        </p>
        <p>
          Cliquez sur les planètes pour naviguer, consulter les archives, ou transmettre un message intergalactique.
        </p>
      </div>

      {/* 🎨 STYLES SCOPÉS */}
      <style>{`
        .planet-accueil {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #1e5379, #84c6e2);    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #003e4f;
    font-family: 'Orbitron', sans-serif;
  }

  .planet-accueil2 {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #3d1f1a, #a65032, #e49c61);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2d110b;
    font-family: 'Orbitron', sans-serif;
  }
    
    
  
  .planet-content {
    z-index: 2;
    text-align: center;
    max-width: 600px;
    padding: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  }
  
  .planet-content h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .planet-content p {
    font-size: 16px;
    line-height: 1.6;
  }
  
  .cloud {
    position: absolute;
    background-image: url('/assets/clouds.png');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.25;
    animation: cloudMove 50s linear infinite;
    z-index: 1;
  }
  
  .cloud1 {
    top: 10%;
    left: -30%;
    width: 300px;
    height: 150px;
  }
  
  .cloud2 {
    top: 30%;
    left: -40%;
    width: 250px;
    height: 120px;
    animation-delay: 10s;
  }
  
  .cloud3 {
    top: 60%;
    left: -50%;
    width: 200px;
    height: 100px;
    animation-delay: 15s;
  }
  
  .cloud4 {
    top: 40%;
    left: -60%;
    width: 220px;
    height: 130px;
    animation-delay: 20s;
  }
  
  
  @keyframes cloudMove {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200vw);
    }
  }
  
  
  
      `}</style>
    </div>
  );
}
