import styles from '../styles/ServicesPage.module.css';
import Layout from '../components/Layout';
import PartnershipSection from '../components/PartnershipSection';
import ImageGallery from '../components/ImageGallery';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';

const Aboutpage = () => {
    return (
        <Layout pageTitle="Ironwood About Us">
        <div>
            <div className={styles.hero}>
                <img src="/images/Northern/Northern.jpg" alt="Ironwood About Us" className={styles.heroImage} />
                <h1 className={styles.heroTitle}>About Ironwood</h1>
            </div>
        </div>
        <AboutUs />
        <ImageGallery />
        <Services />
        <PartnershipSection />
        </Layout>
    );
};

export default Aboutpage;
