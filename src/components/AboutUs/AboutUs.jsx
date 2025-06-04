import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h2>About Us</h2>
        <p>
          Poh Sin Furniture has been serving homes with quality furniture since 1980.
          Our philosophy is rooted in delivering exceptional craftsmanship and timeless style.
        </p>
      </div>
      <img src="/images/showroom.jpg" alt="Our Showroom" className={styles.image} />
    </section>
  );
};

export default AboutUs;
