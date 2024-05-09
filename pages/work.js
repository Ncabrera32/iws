import styles from '../styles/ServicesPage.module.css';
import Layout from '../components/Layout';
import PartnershipSection from '../components/PartnershipSection';
import ImageGallery from '../components/ImageGallery';
import ThumbnailGallery from '../components/ThumbnailGallery';

const images = [
    '/images/HpHero.jpg',
    '/images/card2.png',
    '/images/card3.png',
    '/images/card4.png',
    '/images/card1.png',
    '/images/card2.png'
];

const Workpage = () => {
    return (
        <Layout pageTitle="Ironwood's Work">
        <div>
            <div className={styles.hero}>
                <img src="/images/card1.png" alt="Ironwood's Work" className={styles.heroImage} />
                <h1 className={styles.heroTitle}>Ironwood's Work</h1>
            </div>
        </div>
        <ThumbnailGallery images={images} />
        <ImageGallery />
        <PartnershipSection />
        </Layout>
    );
};

export default Workpage;
