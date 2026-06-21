import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
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
import { MapPin, User, Factory, Clock, CheckCircle } from 'lucide-react';

const INFO = [
  {
    Icon: MapPin,
    title: 'Address',
    text: 'Khopoli, Raigad District\nMaharashtra – 410203, India',
  },
  {
    Icon: User,
    title: 'Contact Person',
    text: 'O Surti (CEO / Proprietor)',
  },
  {
    Icon: Factory,
    title: 'Nature of Business',
    text: 'Manufacturer & Exporter of Aerosol Cans and Tin Containers',
  },
  {
    Icon: Clock,
    title: 'Business Hours',
    text: 'Monday – Saturday: 9:00 AM – 6:00 PM IST',
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', product: '', message: '',
  });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch to discuss your packaging requirements. We respond within 24 hours.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.infoPanel}>
              <h2>Company Information</h2>
              {INFO.map(({ Icon, title, text }) => (
                <div key={title} className={styles.infoCard}>
                  <div className={styles.infoIcon}><Icon size={22} strokeWidth={1.5} /></div>
                  <div>
                    <h4>{title}</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
                  </div>
                </div>
              ))}

              <h4 style={{ marginTop: '1.5rem', color: 'var(--blue-dark)', marginBottom: '0.5rem' }}>
                Certifications
              </h4>
              <div className={styles.certBadges}>
                <span className={styles.badge}>IndiaMART TrustSEAL</span>
                <span className={styles.badge}>GST Registered</span>
                <span className={styles.badge}>IEC Holder</span>
              </div>
            </div>

            <div className={styles.formCard}>
              {sent ? (
                <div className={styles.success}>
                  <div style={{ marginBottom: '1rem', color: 'var(--blue-dark)' }}><CheckCircle size={48} strokeWidth={1.5} /></div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h2>Send an Enquiry</h2>
                  <p>Fill in your details and we'll get back to you promptly.</p>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name *</label>
                        <input
                          id="name" name="name" type="text" required
                          placeholder="Your name"
                          value={form.name} onChange={handleChange}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="company">Company</label>
                        <input
                          id="company" name="company" type="text"
                          placeholder="Company name"
                          value={form.company} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email *</label>
                        <input
                          id="email" name="email" type="email" required
                          placeholder="your@email.com"
                          value={form.email} onChange={handleChange}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone</label>
                        <input
                          id="phone" name="phone" type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="product">Product Interest</label>
                      <select
                        id="product" name="product"
                        value={form.product} onChange={handleChange}
                      >
                        <option value="">Select a product category</option>
                        <option>Aerosol Spray Cans</option>
                        <option>Paint Spray Cans</option>
                        <option>Sanitizer Spray Cans</option>
                        <option>Tin Containers</option>
                        <option>Tin Oil Cans</option>
                        <option>Butane Gas Cartridges</option>
                        <option>Aerosol Valves & Pumps</option>
                        <option>Custom / Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message / Requirements *</label>
                      <textarea
                        id="message" name="message" required
                        placeholder="Describe your packaging requirements — quantity, size, specifications..."
                        value={form.message} onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      Send Enquiry →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
============================================================ */
