import React from "react";
import Encart from "./encart";

const SearchResults = ({ results }) => {
  return (
    <>
      {results.length > 0 ? (
        <div className="grid-container">
          {results.map((furniture) => (
            <div key={furniture.id} className="grid-item">
              <img src={process.env.PUBLIC_URL + `/meuble/${furniture.image}`} alt={`Meuble ${furniture.id}`} />
              <p>{furniture.nom}</p>
              <p>Prix: {furniture.prix} €</p>
              <Encart /> {/* Utilisation de Encart */}
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </>
  );
};

export default SearchResults;
