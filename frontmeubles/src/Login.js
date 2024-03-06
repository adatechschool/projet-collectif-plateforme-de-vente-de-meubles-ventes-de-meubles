import React from 'react';
import "./Login.css"

const login = () => {
  return (
    <div className="first-container" >
    <form action="">
        <h1>Connexion</h1>
        <div className="input-box">
            <label>Adresse mail :</label>
            <input type="text" placeholder='Email' required />    
        </div>
        <div className="input-box">
            <label>Mot de passe :</label>
            <input type="password" placeholder="Mot de Passe" required/>
        </div>
        <button type="submit" >Se connecter</button>
    </form>
    
</div>
)

  
}

export default login
