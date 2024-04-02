// components/Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Assuming you're using CSS Modules

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
          <p>Ironwood Construction<br/>50 E 2500 N #103<br/>N. Logan, UT 84341</p>
        </div>
        <div className={styles.option}>
          <h3>Contact Us</h3>
          <p>Phone: 555-555-5555<br/>Fax: 555-555-5555<br/>Email: info@ironwood.com</p>
        </div>
        <div className={styles.option}>
          <h3>Discover</h3>
          <ul>
            <li>Get A Quote</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>Our Work</li>
            <li>Careers</li>
            <li>Media</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyRight}>
  © 2024 IRONWOOD CONSTRUCTION. ALL RIGHTS RESERVED.
</div>
    </footer>
  );
};

export default Footer;
