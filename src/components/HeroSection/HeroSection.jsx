import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Poh Sin Furniture</h1>
        <p className={styles.subtitle}>Where Comfort Meets Craftsmanship</p>
      </div>
    </section>
  );
};

export default HeroSection;
