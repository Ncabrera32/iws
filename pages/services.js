import Services from '../components/Services';
import styles from '../styles/ServicesPage.module.css';
import Layout from '../components/Layout';
import PartnershipSection from '../components/PartnershipSection';
import Footer from '../components/Footer';

const ServicesPage = () => {
    return (
        <Layout pageTitle="Services">
        <div>
            <div className={styles.hero}>
                <img src="/images/card1.png" alt="Ironwood Services" className={styles.heroImage} />
                <h1 className={styles.heroTitle}>Ironwood Services</h1>
            </div>
        </div>
        <Services hideTitle={true} />
        <PartnershipSection />
        <Footer />
        </Layout>
    );
};

export default ServicesPage;
