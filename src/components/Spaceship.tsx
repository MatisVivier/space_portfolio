import { useEffect, useState } from "react";

export default function Spaceship() {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [topOffset, setTopOffset] = useState(20); // en %
  const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  useEffect(() => {
    const interval = setInterval(() => {
      // Change direction & top position
      const newDirection = Math.random() > 0.5 ? "left" : "right";
      const newTop = 10 + Math.random() * 60; // entre 10% et 70%
      setDirection(newDirection);
      setTopOffset(newTop);
    }, 30000); // toutes les 30 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`spaceship-container ${direction}`}
      style={{ top: `${topOffset}%` }}
    >
      <img
        src={withBase("assets/spaceship.png")}
        alt="Vaisseau spatial"
        className="spaceship"
      />
    </div>
  );
}
