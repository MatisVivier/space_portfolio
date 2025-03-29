import { Routes, Route, useLocation } from "react-router-dom";
import StarryBackground from './components/StarryBackground';
import Portfolio from './components/Portfolio';
import OrbitNavbar from './components/OrbitNavbar';
import Spaceship from "./components/Spaceship";
import Accueil from "./pages/Moi";
import Projets from "./pages/Projets";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {isHome && (
        <>
          <StarryBackground />
          <OrbitNavbar />
          <Portfolio />
          <Spaceship />
        </>
      )}

      <Routes>
        <Route path="/a-propos-de-moi" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        {/* Tu peux ajouter les autres routes ici */}
      </Routes>
    </>
  );
}

export default App;
