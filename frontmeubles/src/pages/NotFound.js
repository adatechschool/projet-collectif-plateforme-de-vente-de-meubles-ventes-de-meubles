// NotFound.js

import React from "react";
import { useSpring, animated } from "react-spring";

// Utilisez process.env.PUBLIC_URL pour accéder aux fichiers dans le dossier public
const NotFoundImage = process.env.PUBLIC_URL + "./404error.jpeg";

const NotFound = () => {
  // Utilisez useSpring pour créer une animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={{ ...fadeIn, textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
    
      <img src={NotFoundImage} alt="404 Not Found" style={{ width: "300px", height: "300px", marginBottom: "20px" }} />

      <h2 style={{ color: "#ff3366", margin: "0" }}>404 - Page not found</h2>
      <p style={{ color: "#777", margin: "10px 0" }}>Oops! La page que vous recherchez n'existe pas.</p>

      {/* Ajoutez une animation au lien de retour */}
      <animated.a href="/" style={{ color: "#4CAF50", textDecoration: "none", fontWeight: "bold" }}>
        Retour à la page d'accueil
      </animated.a>

      {/* Ajoute des sauts de ligne pour pousser le footer */}
      <br />
      <br />
      <br />
    </animated.div>
  );
};

export default NotFound;

