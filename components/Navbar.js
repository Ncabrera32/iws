// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css'; // Assuming you're using CSS Modules

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/NavBarLogo.png" alt="Logo" />
        </Link>
      </div>
      <button className={styles.navToggle} onClick={() => setIsNavVisible(!isNavVisible)}>
  &#9776; {/* Unicode character for hamburger menu */}
</button>
      <ul className={`${styles.navItems} ${isNavVisible ? styles.navVisible : ''}`}>
        <li className={styles.navItem}><Link href="/about">About</Link></li>
        <li className={styles.navItem}><Link href="/services">Services</Link></li>
        <li className={styles.navItem}><Link href="/work">Work</Link></li>
        <li className={styles.navItem}><Link href="/careers">Careers</Link></li>
        <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
        <li className={styles.navItem}><Link href="/media">Media</Link></li>
        <li className={styles.navItem}><Link href="/get-a-quote">Get A Quote</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
