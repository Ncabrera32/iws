import Layout from '../../components/Layout';
import styles from '../../styles/ServiceDetailPage.module.css';
import Tab from '../../components/Tab';
import PartnershipSection from '../../components/PartnershipSection';
import Footer from '../../components/Footer';
import Services from '../../components/Services';

export default function GeneralContracting() {
    return (
        <Layout pageTitle="General Contracting">
            <div className={styles.hero}>
                <img src="/images/card1.png" alt="General Contracting" className={styles.heroImage} />
                <h1 className={styles.heroTitle}>Ironwood Services</h1>
            </div>
            <div className={styles.serviceDetail}>
                <div className={styles.imageContainer}> 
                     <img src="/images/card2.png" alt="General Contracting" className={styles.serviceImage} />
                        <div className={styles.serviceContent}>
                         <h2 className={styles.serviceTitle}>General Contracting</h2>
                            <p className={styles.serviceDescription}>
                            General contracting involves managing and executing construction projects from start to finish. Our services ensure high-quality, timely, and cost-effective delivery of your construction needs.
                            </p>
                         </div>
                    </div>
                </div>
            <Tab>
            <div label="About the Service">
                    <h3>About the Service</h3>
                    <p>General contracting is your all-in-one solution for building and renovation projects. We handle all aspects, including planning, procurement, and execution.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat morbi accumsan odio luctus ut quam senectus hendrerit convallis dui aenean mauris ut felis in tellus leo lacus sit molestie et augue orci, tortor magna malesuada orci id lorem ultrices sapien. id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu dolor sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Lorem ipsum dolor set amet lorem ipsum dolor sit</p>
                    <ol>
                        <li>Neque sodales ut etiam sit amet nisl purus non tellus orci.</li>
                        <li>Adipiscing elit ut aliquam purus sit amet viverra.</li>
                        <li>Mauris commodo quis imperdiet massa tincidunt nunc.</li>
                        <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse.</li>
                    </ol>
                    </div>
                <div label="What's Part of the Service">     
                    <h3>What's Part of the Service</h3>
                        <p>General contracting is your all-in-one solution for building and renovation projects. We handle all aspects, including planning, procurement, and execution.</p>
                        <ol>
                            <li>Neque sodales ut etiam sit amet nisl purus non tellus orci.</li>
                            <li>Adipiscing elit ut aliquam purus sit amet viverra.</li>
                            <li>Mauris commodo quis imperdiet massa tincidunt nunc.</li>
                            <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse.</li>
                        </ol>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat morbi accumsan odio luctus ut quam senectus hendrerit convallis dui aenean mauris ut felis in tellus leo lacus sit molestie et augue orci, tortor magna malesuada orci id lorem ultrices sapien. id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu dolor sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Lorem ipsum dolor set amet lorem ipsum dolor sit</p>
                    </div>
                <div label="What's Included">
                    <h3>What's Included</h3>
                        <p>General contracting is your all-in-one solution for building and renovation projects. We handle all aspects, including planning, procurement, and execution.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat morbi accumsan odio luctus ut quam senectus hendrerit convallis dui aenean mauris ut felis in tellus leo lacus sit molestie et augue orci, tortor magna malesuada orci id lorem ultrices sapien. id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu dolor sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Lorem ipsum dolor set amet lorem ipsum dolor sit</p>
                        <ol>
                            <li>Neque sodales ut etiam sit amet nisl purus non tellus orci.</li>
                            <li>Adipiscing elit ut aliquam purus sit amet viverra.</li>
                            <li>Mauris commodo quis imperdiet massa tincidunt nunc.</li>
                            <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse.</li>
                        </ol>
                    </div>
            </Tab>
            <Services />
            <PartnershipSection />
            <Footer />
        </Layout>
    );
}
