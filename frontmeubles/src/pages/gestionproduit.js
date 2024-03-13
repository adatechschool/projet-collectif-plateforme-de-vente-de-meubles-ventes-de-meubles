import React, { useState, useEffect } from 'react';
import ProductList from '../component/ListeProduit';

// Simuler une API
const fakeApi = {
  fetchProducts: () => Promise.resolve([
    { id: 1, name: 'Chaise', description: 'Une belle chaise en bois.', price: '100€' },
    { id: 2, name: 'Table', description: 'Une grande table pour salle à manger.', price: '250€' },
  ]),
  addProduct: (product) => Promise.resolve({ id: Math.random(), ...product }),
  updateProduct: (id, product) => Promise.resolve({ ...product }),
  deleteProduct: (id) => Promise.resolve({}),
};

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    fakeApi.fetchProducts().then(setProducts);
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const addedProduct = await fakeApi.addProduct(newProduct);
    setProducts([...products, addedProduct]);
    setNewProduct({ name: '', description: '', price: '' }); // Reset form
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    await fakeApi.updateProduct(id, updatedProduct);
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
  };

  const handleDeleteProduct = async (id) => {
    await fakeApi.deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2>Gestion des Produits</h2>
      <form onSubmit={handleAddProduct}>
        <input
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          placeholder="Nom du produit"
          required
        />
        <input
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          placeholder="Description"
          required
        />
        <input
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          placeholder="Prix"
          required
        />
        <button type="submit">Ajouter un produit</button>
      </form>
      <ProductList products={products} onUpdate={handleUpdateProduct} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default ProductManagement;
