import styles from '../styles/ServicesPage.module.css';
import Layout from '../components/Layout';
import PartnershipSection from '../components/PartnershipSection';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';

const Workpage = () => {
    return (
        <Layout pageTitle="Ironwood's Work">
        <div>
            <div className={styles.hero}>
                <img src="/images/card1.png" alt="Ironwood's Work" className={styles.heroImage} />
                <h1 className={styles.heroTitle}>Ironwood's Work</h1>
            </div>
        </div>
        <ImageGallery />
        <PartnershipSection />
        <Footer />
        </Layout>
    );
};

export default Workpage;
