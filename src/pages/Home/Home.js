import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, ShieldCheck, Globe, Settings } from 'lucide-react';
import styles from './Home.module.css';

const PRODUCTS = [
  { img: '/assets/aerosol-tin-containers.jpg', name: 'Aerosol Tin Containers',    desc: 'Available in 100ml–750ml' },
  { img: '/assets/deo-spray-cans.jpg',          name: 'Deo & Varnish Spray Cans', desc: 'Metallic finish, 65mm dia' },
  { img: '/assets/paint-aerosol-tin.jpg',       name: 'Paint Aerosol Tins',        desc: 'Industrial & automotive' },
  { img: '/assets/gas-cartridge.jpg',           name: 'Butane Gas Cartridges',     desc: 'Camping & culinary grade' },
  { img: '/assets/party-spray.jpeg',            name: 'Party & Snow Spray Cans',  desc: 'Wedding & event ready' },
  { img: '/assets/brush-in-cans.jpeg',          name: 'Brush-in / Dauber Cans',   desc: 'Precision applicator built-in' },
];

const WHY = [
  { Icon: Factory,     title: 'Est. Since 1988',       desc: 'Over 35 years of manufacturing expertise in tin and aerosol packaging.' },
  { Icon: ShieldCheck, title: 'Quality Certified',     desc: 'IndiaMART TrustSEAL verified with strict quality control at every step.' },
  { Icon: Globe,       title: 'Export Ready',          desc: 'Active Import-Export code — serving global markets with ease.' },
  { Icon: Settings,    title: 'Custom Manufacturing',  desc: 'Flexible production to meet your specific size, coating, and design needs.' },
];

const YOUTUBE_ID = 'ReCk9M1aXL0';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container" style={{ width: '100%' }}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>Manufacturer &amp; Exporter · Since 1988</span>
              <h1 className={styles.heroTitle}>
                Premium <em>Aerosol Cans</em> &amp;<br />Tin Containers
              </h1>
              <p className={styles.heroDesc}>
                Sterling Enterprises delivers precision-engineered tin and aerosol packaging
                solutions from Khopoli, Maharashtra. Trusted by industries across India and worldwide.
              </p>
              <div className={styles.heroActions}>
                <Link to="/products" className="btn-primary">View Products</Link>
                <Link to="/contact" className="btn-outline">Get a Quote</Link>
              </div>
            </div>

            <div className={styles.heroImageGrid}>
              <img src="/assets/aerosol-tin-containers.jpg" alt="Aerosol tin containers" className={styles.heroImg1} />
              <img src="/assets/deo-spray-cans.jpg"         alt="Deo spray cans"          className={styles.heroImg2} />
              <img src="/assets/silicon-spray-cans.jpg"     alt="Silicon spray cans"      className={styles.heroImg3} />
            </div>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.stat}><strong>35+</strong><span>Years</span></div>
            <div className={styles.stat}><strong>50+</strong><span>Employees</span></div>
            <div className={styles.stat}><strong>₹100Cr</strong><span>Turnover</span></div>
            <div className={styles.stat}><strong>11+</strong><span>Product Lines</span></div>
          </div>
        </div>
      </section>

      {/* Products Highlight */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="divider" />
          <p className="section-subtitle">Comprehensive range of aerosol and tin packaging solutions</p>
          <div className={styles.productsGrid}>
            {PRODUCTS.map(p => (
              <div key={p.name} className={styles.productCard}>
                <div className={styles.productImgWrap}>
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className={styles.productInfo}>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/products" className="btn-primary">See All Products</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-title">Why Choose Sterling?</h2>
          <div className="divider" />
          <p className="section-subtitle">Built on trust, quality, and decades of experience</p>
          <div className={styles.whyGrid}>
            {WHY.map(({ Icon, title, desc }) => (
              <div key={title} className={styles.whyCard}>
                <div className={styles.whyIcon}><Icon size={28} strokeWidth={1.5} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Video */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className="container">
          <h2 className="section-title">See Us in Action</h2>
          <div className="divider" />
          <p className="section-subtitle">Take a look inside our manufacturing facility</p>
          <div className={styles.videoWrap}>
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="Sterling Enterprises Corporate Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2>Ready to Place an Order?</h2>
          <p>Talk to our team about your packaging requirements — we respond within 24 hours.</p>
          <Link to="/contact" className="btn-outline">Contact Us Today</Link>
        </div>
      </section>
    </>
  );
}
