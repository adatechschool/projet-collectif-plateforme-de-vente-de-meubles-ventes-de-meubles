const ProductList = ({ products, onUpdate, onDelete }) => {
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description} - {product.price}
            <button onClick={() => onDelete(product.id)}>Supprimer</button>
            {/* Le bouton de mise à jour pourrait ouvrir un modal ou une nouvelle page où vous pouvez modifier les informations du produit. */}
            {/* Gérez la logique de mise à jour en dehors de ce composant pour simplifier. */}
          </li>
        ))}
      </ul>
    );
  };
  
  export default ProductList;
  