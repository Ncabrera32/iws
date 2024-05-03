// ../components/Layout.js
import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import styles from './Layout.module.css'; // If using CSS Modules
import Services from '../components/Services'; 
import Footer from '../components/Footer';

const Layout = ({ children, pageTitle }) => (
  <div className={styles.container}>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="A Next.js app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      {/* Your header here */}
    </header>
    <Navbar />
    <main className={styles.main}>{children}</main>

    <footer className={styles.footer}>
      <Footer />
    </footer>
  </div>
);

export default Layout;
