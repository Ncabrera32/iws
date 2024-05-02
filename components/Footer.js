// components/Footer.js
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
      <div className={styles.logoSection}>
        <img src="/images/NavBarLogo.png" alt="Ironwood Construction Logo" className={styles.logo} />
        <div className={styles.socialLinks}>
          <button>Instagram</button>
          <button>Facebook</button>
          <button>LinkedIn</button>
        </div>
      </div>
      <div className={styles.footerOptions}>
        <div className={styles.option}>
          <h3>Address</h3>
          <p>Ironwood Construction<br/>50 E 2500 N Suite 103<br/>N. Logan, UT 84341</p>
        </div>
        <div className={styles.option}>
          <h3>Contact Us</h3>
          <p>Phone: 435-994-5535<br/>Email: info@ironwc.com</p>
        </div>
        <div className={styles.option}>
          <h3>Discover</h3>
          <ul>
          <li className={styles.navItem}><Link href="/services">Services</Link></li>
          <li className={styles.navItem}><Link href="/work">Work</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contact Us</Link></li>
          <li className={styles.navItem}><Link href="/about">About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyRight}>
  © 2024 IRONWOOD CONSTRUCTION. ALL RIGHTS RESERVED.
</div>
</div>
    </footer>
  );
};

export default Footer;
