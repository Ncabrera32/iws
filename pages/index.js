// pages/index.js
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Services from '../components/Services';
import ImageGallery from '../components/ImageGallery';
import PartnershipSection from '../components/PartnershipSection';


export default function Home() {
  return (
    <Layout pageTitle="Ironwood Site">
      {/* Image container */}
      <div style={{ width: '100%', paddingTop: '80px' }}>
        <Image
          src="/images/ClearfieldHp.jpg"
          alt="A scenic view" 
          layout="responsive"
          width={1920}
          height={1080} 
        />
     <div className={styles.servicesSection}>
      <Services />
        </div>
      </div>
      <ImageGallery />
      <PartnershipSection />
      </Layout>
  );
}

