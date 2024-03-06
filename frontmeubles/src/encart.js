// Encart.js

import React, { useState } from 'react';
import './Encart.css';

const Encart = ({ titre, contenu }) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="encart">
      <h2>{titre}</h2>
      <p>{contenu}</p>
      <img src="/frontmeubles/public/meuble/table.png" alt="ddd" onClick={togglePopup} />
      {popupVisible && (
        <div className="popup">
          <h1>Meuble 1</h1>
          <p>blalslzlsllllzllsz zsllslzlszlslszlzslzslszlszlszllszlszlszlszlszlszlszlszlszlszlszlszlszlszlszlszlsz</p>
          <button onClick={togglePopup}>Fermer</button>
          <button>Acheter</button>
        </div>
      )}
    </div>
  );
};

export default Encart;

