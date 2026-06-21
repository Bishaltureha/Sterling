import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  // { to: '/products', label: 'Products' },
  // { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <img src="/assets/logo.jpg" alt="Sterling Enterprises" className={styles.logoImg} />
          <div className={styles.logoText}>
            <span>Sterling Enterprises</span>
            <span>Est. 1988 · Khopoli, Maharashtra</span>
          </div>
        </NavLink>

        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? styles.active : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
