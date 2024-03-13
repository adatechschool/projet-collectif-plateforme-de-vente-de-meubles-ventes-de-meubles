// import { access } from "fs";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import axios from "axios";


const Accueil = () => {
    // je recupere l'ID de l'utilisateur depuis le localStorage
    const userId = localStorage.getItem('userId');

    //  normalement le console log avec la page ou on est
    console.log(`Connecté accueil en : ${userId}`);
  


    const [furnitureData, setFurnitureData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

      const filtreCroissant = async () => {
        try {
          const response = await axios.get('/meubles/read?prixTri=prixTri&direction=croissant');
          setSearchResults(response.data);
        } catch (error) {
          console.error('Error fetching furniture data:', error);
        }
      };
      
      const filtreDecroissant = async () => {
        try {
          const response = await axios.get('/meubles/read?prixTri=prixTri&direction=decroissant');
          setSearchResults(response.data);
        } catch (error) {
          console.error('erreur:', error);
        }
      };

      const resetSort = async () => {
        try {
          const response = await axios.get('/meubles/read');
          setSearchResults(response.data);
        } catch (error) {
          console.error('erreur:', error);
        }
      };
    
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
        <section>
        <div style={{ textAlign: "left", marginLeft: "100px" }}>
                  <h2>Les Bons plans :</h2>
                </div>
                <Slider {...carouselSettings} className="carousel-container">
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
                </Slider>
                <br></br>
                <br></br>
                <br></br>
                <h3>Les Nouveautés:</h3>
                <label>Trier par prix :</label>
                <select>
                  <option onClick={resetSort}>Sélectionnez</option>
                  <option onClick={filtreCroissant}>Croissant</option>
                  <option onClick={filtreDecroissant}>Decroissant</option>
                </select>
                <div className="grid-container">
                  {searchResults.length > 0 ? (
                    searchResults.map((furniture) => (
                      <div key={furniture.id} className="grid-item">
                          {furniture.images.map((image) => (
                          <img
                            key={image.id}
                            src={`http://localhost:8080/image/${image.name}`}
                            alt={`Meuble ${furniture.id}`}
                          />
                        ))}
                        <p>{furniture.nom}</p>
                        <p>Prix: {furniture.prix} €</p>
                      
                      </div>
                    ))
                  ) : (
                    furnitureData.map((furniture) => (
                      <div key={furniture.id} className="grid-item">
                                                          {furniture.images.map((image) => (
                          <img
                            key={image.id}
                            src={`http://localhost:8080/image/${image.name}`}
                            alt={`Meuble ${furniture.id}`}
                          />
                        ))}
                        <p>{furniture.nom}</p>
                        <p>Prix: {furniture.prix} €</p>
                        <a href="./encart">En savoir plus</a> 
                      </div>)))};
                    </div>
                </section>)};

export default Accueil;