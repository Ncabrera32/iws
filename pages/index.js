// pages/index.js
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Services from '../components/Services';
import ImageGallery from '../components/ImageGallery';
import PartnershipSection from '../components/PartnershipSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout pageTitle="Ironwood Site">
      {/* Image container */}
      <div style={{ width: '100%', paddingTop: '80px' }}>
        <Image
          src="/images/HpHero.jpg" // Your image path
          alt="A scenic view" // Provide a relevant description for accessibility
          layout="responsive"
          width={1920} // Original width of the image (adjust as necessary)
          height={1080} // Original height of the image, maintaining aspect ratio (adjust as necessary)
        />
     <div className={styles.servicesSection}>
      <Services />
      {/* Additional content for the services section */}
        </div>
      </div>
      <ImageGallery />
      <PartnershipSection />
      <Footer />
      </Layout>
  );
}

