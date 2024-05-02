// components/Services.js
import React from 'react';
import styles from './Services.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Services = ({ hideTitle = false }) => {
  return (
    
    <div className={styles.servicesContainer}>
      <div className={styles.bgColor}></div>
      <div className={styles.vShape}></div>
      <div className={styles.servicesSection}>
      <h2 className={hideTitle ? styles.hiddenTitle : ''}>Our Services</h2>
      <div className={styles.cardsContainer}>
      <Link href="/services/general-contracting" passHref>
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
        <span className={styles.cardLink}>Learn More</span>
     </div>
      </div>
      </Link>

      <Link href="/services/general-contracting" passHref>
      <div className={styles.card}>
      <Image src="/images/card2.png" alt="Service 1" 
      layout="fill"
      objectFit="cover" 
      />
        <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>Tenant Improvement</h3>
        <p className={styles.cardDescription}>
        A short description of Tenant Improvement.
        </p>
        <span className={styles.cardLink}>Learn More</span>
     </div>
      </div>
      </Link>

      <Link href="/services/general-contracting" passHref>
      <div className={styles.card}>
      <Image src="/images/card3.png" alt="Service 1" 
      layout="fill"
      objectFit="cover" 
      />
        <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>Development</h3>
        <p className={styles.cardDescription}>
        A short description of Development Services
        </p>
        <span className={styles.cardLink}>Learn More</span>
     </div>
      </div>
      </Link>

      <Link href="/services/general-contracting" passHref>
      <div className={styles.card}>
      <Image src="/images/card4.png" alt="Service 1" 
      layout="fill"
      objectFit="cover" 
      />
        <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>Design Build</h3>
        <p className={styles.cardDescription}>
        A short description of Design Build
        </p>
        <span className={styles.cardLink}>Learn More</span>
     </div>
      </div>
      </Link>
  </div>
  </div>
  </div>
  );
};

export default Services;

