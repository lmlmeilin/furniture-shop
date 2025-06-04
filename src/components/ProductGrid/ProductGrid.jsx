import React from 'react';
import styles from './ProductGrid.module.css';

const products = [
  {
    id: 1,
    name: 'Elegant Sofa',
    image: '/images/sofa.jpg',
    description: 'Classic design with modern comfort.',
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    image: '/images/table.jpg',
    description: 'Solid wood built for lasting elegance.',
  },
  {
    id: 3,
    name: 'Office Chair',
    image: '/images/chair.jpg',
    description: 'Ergonomic and stylish.',
  },
];

const ProductGrid = () => {
  return (
    <section className={styles.gridSection}>
      <h2 className={styles.heading}>Our Collection</h2>
      <div className={styles.grid}>
        {products.map(product => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} className={styles.image} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
