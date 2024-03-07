import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Profile from "./Profile";
import Footer from "./footer";
import Encart from "./encart";
import Panier from "./Panier";
import Login from "./Login";
import ProductManagement from "./gestionproduit";
import NotFound from "./NotFound";
import SearchResults from "./SearchResults";

export default function App() {
  const [isNavOpen, setNavOpen] = useState(false);
  const [furnitureData, setFurnitureData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearch = () => {
    const results = furnitureData.filter((furniture) =>
      furniture.nom.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="profile-container" onClick={toggleNav}>
            <img src={process.env.PUBLIC_URL + "/user.jpeg"} alt="user" className="profile-picture" />
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher des meubles d'occasion..."
              className="search-bar"
              id="searchBar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              Rechercher
            </button>
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
              <NavLink to ="/login" activeClassName="active-link">
                Login
              </NavLink>
            </div>
          )}

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
            <Route
              path="/search-results"
              element={<SearchResults results={searchResults} />}
            />
          </Routes>
        </header>

        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/Login/*" element ={<Login/>} />
          <Route path="/Encart" element={<Encart />} />
          <Route
            path="/"
            element={
              <>
                <div style={{ textAlign: "left", marginLeft: "100px" }}>
                  <h2>Les Bons plans :</h2>
                </div>
                <Slider {...carouselSettings} className="carousel-container">
                  {furnitureData.map((furniture) => (
                    <div key={furniture.id} className="carousel-item">
                      <img src={process.env.PUBLIC_URL + `/meuble/${furniture.image}`} alt={`Meuble ${furniture.id}`} />
                      <p>{furniture.nom}</p>
                    </div>
                  ))}
                </Slider>
                <br></br>
                <br></br>
                <br></br>
                <h3>Les Nouveautés:</h3>
                <div className="grid-container">
                  {searchResults.length > 0 ? (
                    searchResults.map((furniture) => (
                      <div key={furniture.id} className="grid-item">
                        <img src={process.env.PUBLIC_URL + `/meuble/${furniture.image}`} alt={`Meuble ${furniture.id}`} />
                        <p>{furniture.nom}</p>
                        <p>Prix: {furniture.prix} €</p>
                      
                      </div>
                    ))
                  ) : (
                    furnitureData.map((furniture) => (
                      <div key={furniture.id} className="grid-item">
                        <img src={process.env.PUBLIC_URL + `/meuble/${furniture.image}`} alt={`Meuble ${furniture.id}`} />
                        <p>{furniture.nom}</p>
                        <p>Prix: {furniture.prix} €</p>
                        <a href="./encart">En savoir plus</a> 
                      
                      </div>
                    ))
                  )}
                </div>
              </>
            }
          />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
