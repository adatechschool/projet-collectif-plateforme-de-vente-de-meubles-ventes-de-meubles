// Example pour afficher les meubles aux images 
//A renommer Panier.js pour voir dans le site

import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Panier.css';

const Panier = () => {
  const [furnitureData, setFurnitureData] = useState([]);

  useEffect(() => {
    const fetchFurnitureData = async () => {
      try {
        const response = await axios.get('/meubles/read'); 
        console.log('Response from API:', response.data);
        setFurnitureData(response.data);
      } catch (error) {
        console.error('Error fetching furniture data:', error);
      }
    };
  
    fetchFurnitureData();
  }, []);

  return (
    <div>
      <h2>Meubles dans le Panier :</h2>
      <div className="grid-container">
        {furnitureData.map((furniture) => (
          <div key={furniture.id} className="carousel-item">
            {furniture.images.map((image) => (
              <img
                key={image.id}
                src={`http://localhost:8080/image/${image.name}`}
                alt={`Meuble ${furniture.id}`}
              />
            ))}
            <p>{furniture.nom}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panier;
