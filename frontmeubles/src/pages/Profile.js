import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'avoir installé 'react-router-dom'
import './Profile.css'; // Assurez-vous d'importer votre fichier CSS
import axios from 'axios';
import '../App.css';
import api from "../fetch.js";




const Profile = () =>{

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api("get", "/meubles/read");
        console.log("Bonjour " + result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
  }, []);

  // var a = userFurniture();
  // var meubles = [];
  // meubles.push(a);
  // console.log(a);


  // État pour la soumission d'un nouveau meuble
 

};


export default Profile;