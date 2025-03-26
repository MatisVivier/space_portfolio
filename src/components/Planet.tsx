// components/Planet.tsx
import { motion } from 'framer-motion';
import '../App.css';

interface PlanetProps {
  name: string;
  image: string;
  position: { top: string; left: string };
  onClick: () => void;
}

export default function Planet({ name, image, position, onClick }: PlanetProps) {
  return (
    <motion.div
      className="planet"
      style={{ top: position.top, left: position.left }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 120 }}
      onClick={onClick}
    >
      <img src={image} alt={name} className="planet-image" />
      <span className="planet-name">{name}</span>
    </motion.div>
  );
}
