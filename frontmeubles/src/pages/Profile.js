import React, { useState, useEffect } from 'react';
import './Profile.css'; 
import '../App.css';
import api from "../fetch.js";
import axios from 'axios';



const Profile = () =>{

  
  const [newFurniture, setNewFurniture] = useState({ nom: '', prix: '',description:'', dimension: '',matieres:'', couleurs:'', type:''});
  const [Data, setData] = useState([]);
  const [Matieres, setMatieres] = useState({});
  const [Couleurs, setCouleurs] = useState({});
  const [Type, setType] = useState({});

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
        console.log("bonjour" + newFurniture.matieres);
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
    console.log(typeof(newFurniture));
    console.log("coco" + typeof(newFurniture.matieres));
    console.log(typeof(newFurniture.nom));
    axios.post("/meubles/create", newFurniture)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(newFurniture);
    alert('Soumission envoyée !');
    setNewFurniture({ nom: '', prix: '', description:'', dimension:'',matieres:'', couleurs:'', type:'' });
  };

  const handleImageChange = (e) => {
    setNewFurniture({ ...newFurniture, image: e.target.files[0] });
  };

  const enumValue = (nom) => {
    let Tableau;
    if(typeof nom === 'object') {
      Tableau = Object.values(nom);
    } else {
      Tableau = JSON.parse(nom).map(item => item.value);
    }
    return Tableau;
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
                      </div>))}
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
                {enumValue(Matieres) && enumValue(Matieres).length >= 0  &&  enumValue(Matieres).map((item, index)=>{
                          return <option key={index} value={item}>{item.replaceAll('_', ' ')}</option>;
                      })
                    }
              </select>
              <span>Couleur</span>
              <select name="couleurs" value={newFurniture.couleurs} onChange={handleChange} required>
                  <option value='' >Selectionner une couleur</option>
                  {enumValue(Couleurs) && enumValue(Couleurs).length >= 0  &&  enumValue(Couleurs).map((item, index)=>{
                          return <option key={index} value={item}>{item}</option>;
                      })
                    }
            </select>
            <span>Type</span>
            <select name="type" value={newFurniture.type} onChange={handleChange} required>
                <option value='' >Selectionner un type</option>
                {enumValue(Type) && enumValue(Type).length >= 0  &&  enumValue(Type).map((item, index)=>{
                          return <option key={index} value={item}>{item.replaceAll('_', ' ')}</option>;
                      })
                    }
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