import React from 'react';
import { NavLink } from 'react-router-dom';




const NavBar = () => {
  return (
    <ul>
    <NavLink to="/accueil">Accueil</NavLink>
    <NavLink to="/profil">Profil</NavLink>
    <NavLink to="/panier">Panier</NavLink>
    <NavLink to="/login">Login</NavLink>
    </ul>
  );
}
export default NavBar;