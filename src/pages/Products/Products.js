import React from 'react';
import styles from './Products.module.css';

export default function Products() {
  return (
    <section className={styles.wip}>
      <div className={styles.wipInner}>
        <div className={styles.wipIcon}>&#9881;</div>
        <h1>Work in Progress</h1>
        <p>This page is currently being built. Please check back soon.</p>
        <a href="/" className="btn-outline">Back to Home</a>
      </div>
    </section>
  );
}

/* ============================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ALL = 'All';

const PRODUCTS = [
  {
    img: '/assets/aerosol-tin-containers.jpg',
    category: 'Tin Container',
    name: 'Aerosol Tin Containers',
    desc: 'Standard aerosol tin containers for deo, air fresheners, and personal care. Capacity: 300 ml. Available in multiple sizes.',
    tags: ['Deo', 'Air Freshener', 'Personal Care', '300ml'],
  },
  {
    img: '/assets/gas-cartridge.jpg',
    category: 'Specialty',
    name: 'Portable Gas Cartridges',
    desc: 'High-purity butane gas cartridges for camping stoves, culinary torches, and lighters. Safe and reliable.',
    tags: ['Camping', 'Culinary', 'Fuel', 'Butane'],
  },
  {
    img: '/assets/snow-spray.jpg',
    category: 'Aerosol',
    name: 'Wedding & Party Snow Spray',
    desc: 'Colorful snow and streamer spray cans for weddings, events, and celebrations. Non-toxic formula.',
    tags: ['Wedding', 'Events', 'Party', 'Decorative'],
  },
  {
    img: '/assets/paint-aerosol-tin.jpg',
    category: 'Aerosol',
    name: 'Paint Aerosol Tin Can',
    desc: 'Heavy-duty printed aerosol tins for automotive, industrial, and decorative paints. High-pressure resistant.',
    tags: ['Automotive', 'Industrial', 'Paint'],
  },
  {
    img: '/assets/deo-spray-cans.jpg',
    category: 'Aerosol',
    name: 'Metallic Varnish Aerosol Can 65mm',
    desc: 'Premium metallic-effect transparent varnish aerosol tin cans. 65mm diameter, ideal for coatings.',
    tags: ['Varnish', 'Coating', 'Metallic', '65mm'],
  },
  {
    img: '/assets/aerosol-valves.jpg',
    category: 'Specialty',
    name: 'Aerosol Valves & Pumps',
    desc: 'Precision-engineered aerosol valves and pump mechanisms for a wide range of aerosol filling requirements.',
    tags: ['Components', 'OEM', 'Valve', 'Pump'],
  },
  {
    img: '/assets/aerosol-cans-100ml.jpg',
    category: 'Aerosol',
    name: 'Round Aerosol Tin Cans — 100ml',
    desc: 'Compact round aerosol tin cans starting from 100ml. Suitable for personal care and cosmetic applications.',
    tags: ['100ml', 'Personal Care', 'Cosmetic'],
  },
  {
    img: '/assets/silicon-spray-cans.jpg',
    category: 'Aerosol',
    name: 'Silicon Spray Cans',
    desc: 'Cylindrical paint and silicon spray cans for lubricants and industrial coatings. Durable construction.',
    tags: ['Silicon', 'Lubricant', 'Industrial'],
  },
  {
    img: '/assets/party-spray.jpeg',
    category: 'Aerosol',
    name: 'Party Spray Cans',
    desc: 'Vibrant confetti and streamer spray cans for parties and celebrations. Safe, non-toxic, easy to use.',
    tags: ['Party', 'Events', 'Confetti'],
  },
  {
    img: '/assets/brush-in-cans.jpeg',
    category: 'Specialty',
    name: 'Brush-in / Dauber Cans',
    desc: 'Innovative brush-in applicator cans for paints, adhesives, and coatings. Built-in dauber for precision.',
    tags: ['Paint', 'Adhesive', 'Dauber'],
  },
  {
    img: '/assets/tin-container.jpg',
    category: 'Tin Container',
    name: 'Industrial Tin Containers',
    desc: 'Robust tin containers for paints, chemicals, and industrial products. Various gauges and lining options.',
    tags: ['Paint', 'Chemicals', 'Industrial'],
  },
];

const CATEGORIES = [ALL, ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

export default function Products() {
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1>Our Products</h1>
          <p>A complete range of aerosol cans, tin containers, and specialty packaging — all manufactured in-house in Khopoli, Maharashtra.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.filters}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.active : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map(p => (
              <div key={p.name} className={styles.card}>
                <div className={styles.cardImg}>
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardCategory}>{p.category}</p>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className={styles.tags}>
                    {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.specsCta}>
            <h3>Need Custom Specifications?</h3>
            <p>We manufacture to your exact requirements — size, coating, valve type, and more.</p>
            <Link to="/contact" className="btn-outline">Request a Custom Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
============================================================ */
