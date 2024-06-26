import styles from '../styles/ServicesPage.module.css';
import Layout from '../components/Layout';
import PartnershipSection from '../components/PartnershipSection';
import GridGallery from '../components/GridGallery';

const Workpage = () => {
    return (
        <Layout pageTitle="Ironwood's Work">
        <div>
            <div className={styles.hero}>
                <img src="/images/condos.jpg" alt="Ironwood's Work" className={styles.heroImage} />
                <h1 className={styles.heroTitle}>Ironwood's Work</h1>
            </div>
        </div>
        <GridGallery />
        <PartnershipSection />
        </Layout>
    );
};

export default Workpage;
