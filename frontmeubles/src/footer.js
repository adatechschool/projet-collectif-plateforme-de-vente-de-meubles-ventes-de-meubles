// Footer.js

import React from "react";
import "./footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h5>Aide et contact</h5>
        <ul>
          <li>FAQ</li>
          <li>Support Client</li>
          <li>Conditions de vente</li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>Nos services</h5>
        <ul>
          <li>Livraison</li>
          <li>Retours</li>
          <li>Garanties</li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>À propos de nous</h5>
        <ul>
          <li>Qui sommes-nous ?</li>
          <li>Notre éthique</li>
          <li>Carrières</li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>Nos partenaires</h5>
        <ul>
          <li>Liste des partenaires</li>
          <li>Devenir partenaire</li>
        </ul>
      </div>
      <div className="footer-section">
        <h5>Market places</h5>
        <ul>
          <li>Explorer</li>
          <li>Comment ça marche</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
