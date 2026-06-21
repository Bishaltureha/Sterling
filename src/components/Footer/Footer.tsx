import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>Sterling Enterprises</h3>
            <p>
              Manufacturer and exporter of premium aerosol cans and tin containers
              since 1988. Based in Khopoli, Maharashtra, India.
            </p>
          </div>

          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <ul>
              <li>Khopoli, Raigad</li>
              <li>Maharashtra, India</li>
              <li>GST: 27****1ZM</li>
              <li>IEC: 038****73</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          &copy; {new Date().getFullYear()} Sterling Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
