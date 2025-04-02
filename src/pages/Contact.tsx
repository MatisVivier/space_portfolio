import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StarOverlay from "../components/StarOverlay/StarOverlay";
import "../styles/Contact.css";

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message envoyé :", formData);
    setSubmitted(true);
    setFormData({ nom: "", email: "", message: "" });
  };

  const handleLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setTimeout(() => navigate("/"), 1300);
  };

  return (
    <div className={`planet-contact ${isLaunching ? "decolle" : ""}`}>
      <StarOverlay isZooming={false} />
      <div className="contact-content">
        <h1>Contact</h1>
        <p>N'hésite pas à me contacter via le formulaire !</p>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer</button>
          {submitted && <p className="success">Message envoyé avec succès !</p>}
        </form>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/matis-vivier-b04269258/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/matisvivier" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </div>

      {/* Fusée pour retourner à la navbar */}
      <img
        src={withBase("assets/spaceship.png")}
        alt="Fusée"
        className={`rocket-fixed ${isLaunching ? "launching" : ""}`}
        onClick={handleLaunch}
      />
    </div>
  );
}
