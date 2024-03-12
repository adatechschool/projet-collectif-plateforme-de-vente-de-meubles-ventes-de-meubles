import React, { useState, useEffect } from 'react';
import './Profile.css'; 
import '../App.css';
import api from "../fetch.js";
import axios from 'axios';



const Profile = () =>{

  
  const [newFurniture, setNewFurniture] = useState({ nom: '', prix: '',description:'', dimension: '',matieres:'', couleurs:'', type:''});
  const [Data, setData] = useState([]);
  const [Matieres, setMatieres] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api("get", "/meubles/read");
        const listMatieres = await api("get", "/meubles/matieres");
        console.log("Liste:" + listMatieres)
        setMatieres(listMatieres);
        console.log("Matières : " + Matieres)
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFurniture({ ...newFurniture, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newFurniture);
    console.log(newFurniture.matieres)
    axios.post("/meubles/create", newFurniture)
    
    // Ici, vous enverriez les données à votre backend ou base de données
    console.log(newFurniture);
    alert('Soumission envoyée !');
    // Réinitialiser le formulaire après la soumission
    setNewFurniture({ nom: '', prix: '',description:'',dimension:'', matieres:'',couleurs:'',type:'' });
  };
  const handleImageChange = (e) => {
    setNewFurniture({ ...newFurniture, image: e.target.files[0] });
  };

  let matiereTableau;
  if(typeof Matieres === 'object') { 
    matiereTableau = Object.values(Matieres);
  } else {
    matiereTableau = JSON.parse(Matieres).map(item => item.value);
  }
  
  return (
    <section>
      <h2>Meubles mis en vente</h2>
      <div className='grid-container'>
      {Data.map((Data) => (
                      <div key={Data.id} className="grid-item">
                        <p>{Data.nom}</p>
                        <p>price: {Data.prix} €</p>
                        <a href="./encart">En savoir plus</a> 
                      </div>))};
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
     
              <select name="matieres" value = {newFurniture.matieres} onChange={handleChange}>
                <option defaultValue="select" >Selectionner une matière</option>
                    {
                      matiereTableau && matiereTableau.length > 0  &&  matiereTableau.map((item, index)=>{
                          return <option key={index} value={item}>{item.replaceAll('_', ' ')}</option>;
                      })
                    }
              </select>
              <span>Couleur</span>
              <select name="couleurs" value={newFurniture.couleurs} onChange={handleChange}>
                  <option defaultValue="select" >Selectionner une couleur</option>
                  <option value="noir">Noir</option>
                  <option value="pourpre">Pourpre</option>
                  <option value="rouge">Rouge</option>
                  <option value="orange">Orange</option>
                  <option value="jaune">Jaune</option>
                  <option value="vert">Vert</option>
                  <option value="bleu">Bleu</option>
                  <option value="violet">Violet</option>
                  <option value="ivoire">Ivoire</option>
                  <option value="crème">Crème</option>
                  <option value="beige">Beige</option>
                  <option value="rose">Rose</option>
                  <option value="kaki">Kaki</option>
                  <option value="brun">Brun</option>
                  <option value="marron">Marron</option>
                  <option value="bordeaux">Bordeaux</option>
            </select>
            <span>Type</span>
            <select name="type" value={newFurniture.type} onChange={handleChange}>
                <option defaultValue="select" >Selectionner un type</option>
                <option value="canape">Canapé</option>
                <option value="fauteuil">Fauteuil</option>
                <option value="table">Table</option>
                <option value="chaise">Chaise</option>
                <option value="lit">Lit</option>
                <option value="armoire">Armoire</option>
                <option value="commode">Commode</option>
                <option value="buffet">Buffet</option>
                <option value="bibliotheque">Bibliothèque</option>
                <option value="etagere">Etagère</option>
                <option value="bureau">Bureau</option>
                <option value="table_de_travail">Table de travail</option>
                <option value="meuble_tv">Meuble TV</option>
                <option value="banc">Banc</option>
                <option value="tabouret">Tabouret</option>
                <option value="pouf">Pouf</option>
                <option value="coiffeuse">Coiffeuse</option>
                <option value="vaisselier">Vaisselier</option>
                <option value="pouf">Pouf</option>
                <option value="meuble_de_salle_de_bain">Meuble de salle de bain</option>
                <option value="meuble_de_cuisine">Meuble de cuisine</option>
              </select>
              <span>Ajouter des images</span>
              <input type="file" name="image" onChange={handleImageChange} />
              <button type="submit">Soumettre le meuble</button>
            </form>
          </div>
    </section>
  )
 

};


export default Profile;