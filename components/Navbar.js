// components/Navbar.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css'; // Assuming you're using CSS Modules

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(`.${styles.navbar}`)) {
        setIsNavVisible(false);
      }
    };

    if (isNavVisible) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isNavVisible]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/NavBarLogo.png" alt="Logo" />
        </Link>
      </div>
      <button className={styles.navToggle} onClick={toggleNav}>
        &#9776; {/* Unicode character for hamburger menu */}
      </button>
      <ul className={`${styles.navItems} ${isNavVisible ? styles.show : ''}`}>
        <li className={styles.navItem}><Link href="/services">Services</Link></li>
        <li className={styles.navItem}><Link href="/work">Work</Link></li>
        <li className={styles.navItem}><Link href="/contact">Contact Us</Link></li>
        <li className={styles.navItem}><Link href="/about">About Us</Link></li>
        {/* <li className={styles.navItem}><Link href="/careers">Careers</Link></li> */}
        {/* <li className={styles.navItem}><Link href="/media">Media</Link></li>
        <li className={styles.navItem}><Link href="/get-a-quote">Get A Quote</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
