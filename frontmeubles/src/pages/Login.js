import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users/read', { email, password });

      const userData = response.data.find(user => user.email === email && user.mdp === password);

      if (userData) {
        console.log('User logged in:', userData.nom);

        // Enregistrez l'ID de l'utilisateur dans le localStorage
        localStorage.setItem('userId', userData.id);

        // Utilisation de l'ID pour la navigation vers le profil
        navigate(`/profile/${userData.id}`);
      } else {
        console.log('Email or password incorrect');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="first-container">
      <form onSubmit={handleLogin}>
        <h1>Connexion</h1>
        <div className="input-box">
          <label>Adresse mail :</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Mot de passe :</label>
          <input
            type="password"
            placeholder="Mot de Passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
