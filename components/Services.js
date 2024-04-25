// components/Services.js
import React from 'react';
import styles from './Services.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Services = ({ hideTitle = false }) => {
  return (
    
    <div className={styles.servicesContainer}>
      <div className={styles.bgColor}></div> {/* Background color block */}
      <div className={styles.vShape}></div> {/* Transparent 'V' shape */}
      <div className={styles.servicesSection}>
      <h2 className={hideTitle ? styles.hiddenTitle : ''}>Our Services</h2>
      <div className={styles.cardsContainer}>
      <div className={styles.card}>
      <Image src="/images/card1.png" alt="Service 1" 
      layout="fill"
      objectFit="cover" 
      />
        <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>General<br/>Contracting</h3>
        <p className={styles.cardDescription}>
        A short description of General Contracting
        </p>
        <Link href="/services/general-contracting" passHref className={styles.cardLink}>
            Learn More
      </Link>
     </div>
      </div>
      <div className={styles.card}>
      <Image src="/images/card2.png" alt="Service 1" 
      layout="fill"
      objectFit="cover" 
      />
        <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>GC<br/>Management</h3>
        <p className={styles.cardDescription}>
        A short description of GC management.
        </p>
        <Link href="/services/general-contracting" passHref className={styles.cardLink}>
            Learn More
      </Link>
     </div>
      </div>
      <div className={styles.card}>
      <Image src="/images/card3.png" alt="Service 1" 
      layout="fill"
      objectFit="cover" 
      />
        <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>In House<br/>Design Services</h3>
        <p className={styles.cardDescription}>
        A short description of In House Design Services
        </p>
        <Link href="/services/general-contracting" passHref className={styles.cardLink}>
            Learn More
      </Link>
     </div>
      </div>
      <div className={styles.card}>
      <Image src="/images/card4.png" alt="Service 1" 
      layout="fill"
      objectFit="cover" 
      />
        <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>Design<br/>Build</h3>
        <p className={styles.cardDescription}>
        A short description of Design Build
        </p>
        <Link href="/services/general-contracting" passHref className={styles.cardLink}>
            Learn More
      </Link>
     </div>
      </div>
  </div>
  </div>
      {/* Additional content here */}
    </div>
  );
};

export default Services;

