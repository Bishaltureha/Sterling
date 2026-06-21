import React from 'react';
import styles from './WorkInProgress.module.css';

export default function WorkInProgress() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.icon}>&#9881;</div>
        <h1>Work in Progress</h1>
        <p>This page is currently being built. Please check back soon.</p>
        <a href="/" className="btn-outline">Back to Home</a>
      </div>
    </section>
  );
}
