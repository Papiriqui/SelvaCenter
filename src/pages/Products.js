import React from 'react';

const products = [
  'Backus',
  'Lindley',
  'Kola Real',
  'PepsiCo',
  'Gloria',
  'Inka Kola',
  'Coca Cola',
];

const Products = () => (
  <div className="container mt-5">
    <h1>Nuestros Productos</h1>
    <ul className="list-group">
      {products.map((product, index) => (
        <li key={index} className="list-group-item">{product}</li>
      ))}
    </ul>
  </div>
);

export default Products;
