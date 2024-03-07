import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const Profile = ({ isAdmin, user }) => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/read/${id}`);
        setUserData(response.data[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, [id]);
  



  // Exemple de données des meubles à vendre du user
  const userFurniture = [
    { image: 'table.png', name: 'Meuble 1', price: 100 },
    { image: 'chaisegamer.jpeg', name: 'Meuble 2', price: 150 },
    { image: 'lampe.webp', name: 'Meuble 3', price: 200 },
    // Ajoutez autant d'éléments que nécessaire
  ];

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="user-image-container">
          <img src={process.env.PUBLIC_URL + '/user.jpeg'} alt="user" className="user-image" />
        </div>
        <div className="user-name">
          <h3>{userData ? userData.nom : 'Nom du User'}</h3>
        </div>
        <div className="user-description">
          <p>Description du User...</p>
        </div>
      </div>

      <div className="main-content">
        <h2>Mes meubles à vendre :</h2>

        {/* Condition pour vérifier si l'utilisateur est connecté */}
        {user ? (
          <div className="grid-container">
            {userFurniture.map((furniture, index) => (
              <div key={index} className="grid-item">
                <img src={process.env.PUBLIC_URL + `/meuble/${furniture.image}`} alt={`Meuble ${index + 1}`} />
                <p>Nom du Meuble: {furniture.name}</p>
                <p>Prix: {furniture.price} €</p>
              </div>
            ))}
          </div>
        ) : (
          <p>
            Vous n'êtes pas connecté. <Link to="/login">Connectez-vous</Link> pour voir vos meubles à vendre.
          </p>
        )}
      </div>

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
