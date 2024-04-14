// PartnershipSection.js
import Link from 'next/link';
import React from 'react';
import styles from './PartnershipSection.module.css'; // Assuming you're using CSS Modules

const PartnershipSection = () => {
  return (
    <div className={styles.partnershipSection}>
    <div className={styles.contentContainer}>
      <div className={styles.textContent}>
        <h2>Ready To Partner up on your project?</h2>
        <p>Contact us today to discuss your project, request a quote, or explore how our expertise can benefit your construction needs.</p>
        <Link href="/contact" legacyBehavior>
        <button className={styles.partnerButton}>
       
        Get In Touch <span className={styles.arrowIcon}>➔</span>
        </button>
        </Link>
      </div>
      <div className={styles.logoContainer}>
        <img src="/images/whitelogo.png" alt="Company Logo" className={styles.logo} />
      </div>
    </div>
    </div>
  );
};

export default PartnershipSection;