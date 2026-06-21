import React from 'react';
import { Target, Lightbulb, Handshake, Leaf } from 'lucide-react';
import styles from './About.module.css';

const STATS = [
  { value: '1988', label: 'Year Founded' },
  { value: '35+',  label: 'Years of Experience' },
  { value: '26–50', label: 'Employees' },
  { value: '₹100Cr', label: 'Annual Turnover' },
];

const VALUES = [
  { Icon: Target,     title: 'Precision',      desc: 'Every can and container is manufactured to exact specifications with tight tolerances.' },
  { Icon: Lightbulb, title: 'Innovation',      desc: 'Continuously upgrading machinery and processes to stay ahead in packaging technology.' },
  { Icon: Handshake, title: 'Reliability',     desc: 'On-time delivery and consistent quality that our clients have trusted for decades.' },
  { Icon: Leaf,      title: 'Sustainability',  desc: 'Tin is 100% recyclable — we take pride in offering eco-friendly packaging solutions.' },
];

export default function About() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1>About Sterling Enterprises</h1>
          <p>A legacy of quality tin and aerosol manufacturing spanning over three decades.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <h2>Our Story</h2>
              <p>
                Founded in 1988 by a visionary entrepreneur in Khopoli, Maharashtra, Sterling
                Enterprises began with a singular mission: to manufacture tin and aerosol packaging
                that meets the highest standards of quality and reliability.
              </p>
              <p>
                Over the decades, we have evolved into a full-scale manufacturer and exporter,
                serving clients across India and international markets. Our state-of-the-art
                facility in Raigad district produces a comprehensive range of aerosol cans,
                tin containers, butane cartridges, and more.
              </p>
              <p>
                With an annual turnover between ₹25–100 Crores and a dedicated workforce,
                Sterling Enterprises continues to edge a prominent place among the leaders
                of the industry.
              </p>
            </div>
            <div className={styles.storyVisual}>
              <h3>Manufacturing Excellence</h3>
              <div className={styles.bigStat}>
                35+
                <small>Years of Crafting<br />Premium Tin Packaging</small>
              </div>
              <div className={styles.visualImages}>
                <img src="/assets/aerosol-tin-containers.jpg" alt="Aerosol tin containers" />
                <img src="/assets/tin-container.jpg"           alt="Tin container" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className="container">
          <h2 className="section-title">Company at a Glance</h2>
          <div className="divider" />
          <div className={styles.statsRow} style={{ marginTop: '2.5rem' }}>
            {STATS.map(s => (
              <div key={s.label} className={styles.statCard}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.section}>
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="divider" />
          <p className="section-subtitle">The principles that guide every product we manufacture</p>
          <div className={styles.valuesGrid}>
            {VALUES.map(({ Icon, title, desc }) => (
              <div key={title} className={styles.valueCard}>
                <div className={styles.icon}><Icon size={28} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
