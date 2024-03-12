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

      const users = response.data;

      const authenticatedUser = users.find(user => user.email === email && user.mdp === password);

      if (authenticatedUser) {
        console.log('User logged in:', authenticatedUser.nom);

        // Utilisation de l'ID pour la navigation vers le profil
        navigate(`/profile/${authenticatedUser.id}`);
      } else {
        console.log('Email or password incorrect');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
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
