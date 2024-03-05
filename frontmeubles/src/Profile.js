// Profile.js

import React from 'react';
import './Profile.css'; // Assurez-vous d'importer votre fichier CSS

const Profile = () => {
  // Exemple de données des meubles à vendre du user
  const userFurniture = [
    { image: 'table.png', name: 'Meuble 1', price: 100 },
    { image: 'chaisegamer.jpeg', name: 'Meuble 2', price: 150 },
    { image: 'lampe.webp', name: 'Meuble 3', price: 200 },
    // Ajoutez autant d'éléments que nécessaire
  ];

  return (
    <div className="profile-container">
      {/* Barre latérale gauche */}
      <div className="sidebar">
        <div className="user-image-container">
          {/* Image du user */}
          <img src={process.env.PUBLIC_URL + '/user.jpeg'} alt="user" className="user-image" />
        </div>
        {/* Nom du user */}
        <div className="user-name">
          <h3>Nom du User</h3>
        </div>
        {/* Description du user */}
        <div className="user-description">
          <p>Description du User...</p>
        </div>
      </div>

      {/* Contenu principal à droite */}
      <div className="main-content">
        {/* Titre "Mes meubles à vendre" */}
        <h2>Mes meubles à vendre :</h2>

        {/* Grid pour afficher les meubles à vendre */}
        <div className="grid-container">
          {userFurniture.map((furniture, index) => (
            <div key={index} className="grid-item">
              {/* Image du meuble */}
              <img src={process.env.PUBLIC_URL + `/meuble/${furniture.image}`} alt={`Meuble ${index + 1}`} />
              {/* Nom du meuble */}
              <p>Nom du Meuble: {furniture.name}</p>
              {/* Prix du meuble */}
              <p>Prix: {furniture.price} €</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
