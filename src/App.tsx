import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import StarryBackground from './components/StarryBackground';
import Portfolio from './components/Portfolio';
import OrbitNavbar from './components/OrbitNavbar';
import Spaceship from "./components/Spaceship";
import Accueil from "./pages/Moi";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact"

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  // Pour local ET production (GitHub Pages)
  const isHome =
    pathname === "/" || pathname === "/space_portfolio" || pathname === "/space_portfolio/";

  const HomeContent = (
    <>
      <StarryBackground />
      <OrbitNavbar />
      <Portfolio />
      <Spaceship />
    </>
  );

  return (
    <>
      {isHome && HomeContent}

      <Routes>
        <Route path="/" element={HomeContent} />
        <Route path="/space_portfolio" element={HomeContent} />
        <Route path="/a-propos-de-moi" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />

        {/* Redirection pour toute route inconnue */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
