import React, { useState, useEffect } from 'react';
import './Profile.css'; 
import '../App.css';
import api from "../fetch.js";
import axios from 'axios';



const Profile = () =>{

  const [Data, setData] = useState([]);
  const [newFurniture, setNewFurniture] = useState({ nom: '', prix: ''});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api("get", "/meubles/read");
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
    axios.post("/meubles/create", newFurniture)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // Ici, vous enverriez les données à votre backend ou base de données
    console.log(newFurniture);
    alert('Soumission envoyée !');
    // Réinitialiser le formulaire après la soumission
    setNewFurniture({ nom: '', prix: '' });
  };
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
                value={newFurniture.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="prix"
                placeholder="price"
                value={newFurniture.price}
                onChange={handleChange}
                required
              />
              <button type="submit">Soumettre le meuble</button>
            </form>
          </div>
    </section>
  )
  // var a = userFurniture();
  // var meubles = [];
  // meubles.push(a);
  // console.log(a);


  // État pour la soumission d'un nouveau meuble
 

};


export default Profile;