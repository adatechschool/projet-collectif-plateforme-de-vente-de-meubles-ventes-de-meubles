import React, { useState, useEffect } from 'react';
import './Profile.css'; 
import '../App.css';
import api from "../fetch.js";
import axios from 'axios';

const Profile = () => {
  const [newFurniture, setNewFurniture] = useState({ nom: '', prix: '', description:'', dimension: '', matieres:'', couleurs:'', type:'' });
  const [data, setData] = useState([]);
  const [matieres, setMatieres] = useState({});
  const [couleurs, setCouleurs] = useState({});
  const [type, setType] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api("get", "/meubles/read");
        setData(result);
        const listMatieres = await api("get", "/meubles/matieres");
        setMatieres(listMatieres);
        const listCouleurs = await api("get", "/meubles/couleurs");
        setCouleurs(listCouleurs);
        const listType = await api("get", "/meubles/types");
        setType(listType);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFurniture({ ...newFurniture, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Récupérer l'ID de l'utilisateur depuis le localStorage
    const userId = localStorage.getItem('userId');

    // Ajouter l'ID de l'utilisateur à la nouvelle proposition de meuble
    setNewFurniture({ ...newFurniture, user_id: userId });

    axios.post("/meubles/create", newFurniture)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(newFurniture);
    alert('Soumission envoyée !');
    setNewFurniture({ nom: '', prix: '', description:'', dimension:'', matieres:'', couleurs:'', type:'' });
    window.location.reload(false);
  };

  const handleImageChange = (e) => {
    setNewFurniture({ ...newFurniture, image: e.target.files[0] });
  };

  const enumValue = (nom) => {
    let tableau;
    if (typeof nom === 'object') {
      tableau = Object.values(nom);
    } else {
      tableau = JSON.parse(nom).map(item => item.value);
    }
    return tableau;
  };

  console.log('Connecté sur le profil en user_id :', localStorage.getItem('userId'));

  return (
    <section>
      <h2>Meubles mis en vente</h2>
      <div className='grid-container'>
        {data.map((item) => (
          <div key={item.id} className="grid-item">
            <p>{item.nom}</p>
            <p>price: {item.prix} €</p>
            <a href="./encart">En savoir plus</a> 
          </div>
        ))}
      </div>

      <div className="submit-furniture-section">
        <h2>Proposer un meuble à vendre</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Nom du meuble"
            value={newFurniture.nom}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="prix"
            placeholder="Prix"
            value={newFurniture.prix}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='description'
            placeholder='Courte description'
            value={newFurniture.description}
            onChange={handleChange}
          />
          <input
            type='text'
            name='dimension'
            placeholder='Dimensions'
            value={newFurniture.dimension}
            onChange={handleChange}
          />
          <span>Matière</span>
          <select name="matieres" value = {newFurniture.matieres} onChange={handleChange} required>
            <option value=''>Selectionner une matière</option>
            {enumValue(matieres) && enumValue(matieres).length >= 0 &&  enumValue(matieres).map((item, index)=>{
              return <option key={index} value={item}>{item.replaceAll('_', ' ')}</option>;
            })}
          </select>
          <span>Couleur</span>
          <select name="couleurs" value={newFurniture.couleurs} onChange={handleChange} required>
            <option value='' >Selectionner une couleur</option>
            {enumValue(couleurs) && enumValue(couleurs).length >= 0 &&  enumValue(couleurs).map((item, index)=>{
              return <option key={index} value={item}>{item}</option>;
            })}
          </select>
          <span>Type</span>
          <select name="type" value={newFurniture.type} onChange={handleChange} required>
            <option value='' >Selectionner un type</option>
            {enumValue(type) && enumValue(type).length >= 0 &&  enumValue(type).map((item, index)=>{
              return <option key={index} value={item}>{item.replaceAll('_', ' ')}</option>;
            })}
          </select>
          <span>Ajouter des images</span>
          <input type="file" name="image" onChange={handleImageChange} />
          {/* Ajout du champ user_id */}
          <input
            type="hidden"
            name="user_id"
         
          />
          <button type="submit">Soumettre le meuble</button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
