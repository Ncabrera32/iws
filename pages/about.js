import styles from '../styles/ServicesPage.module.css';
import Layout from '../components/Layout';
import PartnershipSection from '../components/PartnershipSection';
import ImageGallery from '../components/ImageGallery';

const Aboutpage = () => {
    return (
        <Layout pageTitle="Ironwood About Us">
        <div>
            <div className={styles.hero}>
                <img src="/images/card1.png" alt="Ironwood About Us" className={styles.heroImage} />
                <h1 className={styles.heroTitle}>About Ironwood</h1>
            </div>
        </div>
        <ImageGallery />
        <PartnershipSection />
        </Layout>
    );
};

export default Aboutpage;
