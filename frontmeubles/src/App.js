// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Profile from "./Profile";
import Footer from "./footer";
import Encart from "./encart";
import Panier from "./Panier";

import NotFound from "./NotFound";
export default function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselImages = ["table.png", "chaise.jpeg", "armoire.jpeg"];
  const gridImages = ["table.png", "chaise.jpeg", "armoire.jpeg", "chaisegamer.jpeg", "lampe.webp", "armoireantique.jpeg"];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="profile-container" onClick={toggleNav}>
            <img src={process.env.PUBLIC_URL + "/user.jpeg"} alt="user" className="profile-picture" />
          </div>
          <div className="search-container">
            <input type="text" placeholder="Rechercher des meubles d'occasion..." className="search-bar" id="searchBar" />
            <button className="search-button">Rechercher</button>
            <img src={process.env.PUBLIC_URL + "/LogoAmpunv.jpeg"} alt="Logo du site" className="site-logo" />
          </div>

          {isNavOpen && (
            <div className="nav-bar">
              <NavLink to="/" exact activeClassName="active-link">
                Accueil
              </NavLink>
              <NavLink to="/profile" activeClassName="active-link">
                Profil
              </NavLink>
              <NavLink to="/panier" activeClassName="active-link">
                Mon Panier
              </NavLink>
            </div>
          )}

          {/* Ajouter le bouton Vendre qui s'affiche uniquement dans la page Profile */}
          <Routes>
            <Route
              path="/profile"
              element={
                <div className="sell-button">
                  <button onClick={() => window.location.href = "/profile/sell"}>
                    Vendre un meuble
                  </button>
                </div>
              }
            />
          </Routes>
        </header>

        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/panier" element={<Panier />} />
          <Route
            path="/"
            element={
              <>
                {/* Ajouter la phrase "Les Bons plans :" */}
                <div style={{ textAlign: "left", marginLeft: "100px" }}>
                  <h2>Les Bons plans :</h2>
                </div>
                
                {/* Reste du contenu de la page d'accueil */}
                <Slider {...carouselSettings} className="carousel-container">
                  {carouselImages.map((image, index) => (
                    <div key={index} className="carousel-item">
                      <img src={process.env.PUBLIC_URL + `/meuble/${image}`} alt={`Meuble ${index + 1}`} />
                      <p>Nom du Meuble {index + 1}</p>
                    </div>
                  ))}
                </Slider>
                <br></br>
                <br></br>
                <br></br>
                <h3>Les Nouveautés:</h3>
                <div className="grid-container">
                  {gridImages.map((image, index) => (
                    <div key={index} className="grid-item">
                      <img src={process.env.PUBLIC_URL + `/meuble/${image}`} alt={`Meuble ${index + 1}`} />
                      <p>Nom du Meuble {index + 1}</p>
                      <p>Prix: [Ajouter le prix ici]</p><Encart/>
                    </div>
                  ))}
                </div>
              </>
            }
          />
          
          {/* Ajoutez la route pour la page d'erreur 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}