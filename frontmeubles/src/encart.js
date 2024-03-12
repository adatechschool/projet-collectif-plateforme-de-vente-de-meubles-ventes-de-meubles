// Encart.js

import React from 'react';
import './Encart.css';
const Encart = ({ produit }) => {

 

  return (
    <div className="encart">
      <h2>Table en chênes</h2>
      <img src="/frontmeubles/public/meuble/chaisegamer.jpeg" alt="" />
      <p>blablablablabla</p>
      <p>Prix: 1500$</p>
      <a href="./panier">Ajouter au panier</a>






    </div>
  );
 };

export default Encart;


