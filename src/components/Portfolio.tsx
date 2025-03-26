// components/Portfolio.tsx
import { useState } from 'react';
import Planet from './Planet';
import '../App.css';

interface PlaneteType {
  id: number;
  name: string;
  image: string;
  position: { top: string; left: string };
  content: string;
}

const planetes: PlaneteType[] = [
 
];

export default function Portfolio() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlaneteType | null>(null);

  return (
    <div className="portfolio-container">
      {planetes.map((planete) => (
        <Planet
          key={planete.id}
          name={planete.name}
          image={planete.image}
          position={planete.position}
          onClick={() => setSelectedPlanet(planete)}
        />
      ))}

      {selectedPlanet && (
        <div className="modal-overlay" onClick={() => setSelectedPlanet(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedPlanet(null)}>
              &times;
            </button>
            <h2>{selectedPlanet.name}</h2>
            <p>{selectedPlanet.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
