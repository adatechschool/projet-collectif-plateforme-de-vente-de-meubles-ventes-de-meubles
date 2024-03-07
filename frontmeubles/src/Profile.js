import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'avoir installé 'react-router-dom'
import './Profile.css'; // Assurez-vous d'importer votre fichier CSS
const Profile = ({ isAdmin }) => {
  // Exemple de données des meubles à vendre du user
  const userFurniture = [
    { image: 'table.png', name: 'Meuble 1', price: 100 },
    { image: 'chaisegamer.jpeg', name: 'Meuble 2', price: 150 },
    { image: 'lampe.webp', name: 'Meuble 3', price: 200 },
    // Ajoutez autant d'éléments que nécessaire
  ];
  // État pour la soumission d'un nouveau meuble
  const [newFurniture, setNewFurniture] = useState({ name: '', price: '', image: null });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFurniture({ ...newFurniture, [name]: value });
  };
  const handleImageChange = (e) => {
    setNewFurniture({ ...newFurniture, image: e.target.files[0] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous enverriez les données à votre backend ou base de données
    console.log(newFurniture);
    alert('Soumission envoyée !');
    // Réinitialiser le formulaire après la soumission
    setNewFurniture({ name: '', price: '', image: null });
  };
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
        {/* Section pour proposer un nouveau meuble à vendre pour les non-administrateurs */}
        {!isAdmin && (
          <div className="submit-furniture-section">
            <h2>Proposer un meuble à vendre</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nom du meuble"
                value={newFurniture.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="price"
                placeholder="Prix"
                value={newFurniture.price}
                onChange={handleChange}
                required
              />
              <input type="file" name="image" onChange={handleImageChange} required />
              <button type="submit">Soumettre le meuble</button>
            </form>
          </div>
        )}
      </div>
      {/* Section Administration pour les administrateurs */}
      {isAdmin && (
        <div className="admin-section">
          <h3>Administration</h3>
          <ul>
            <li>
              <Link to="/product-management">Gestion des produits</Link>
            </li>
            {/* Ajoutez d'autres liens ou options ici selon vos besoins */}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Profile;