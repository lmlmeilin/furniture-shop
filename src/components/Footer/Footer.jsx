import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Poh Sin Furniture. All rights reserved.</p>
      <div className={styles.links}>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
