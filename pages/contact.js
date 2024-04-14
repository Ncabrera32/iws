import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <Layout pageTitle="Ironwood Site">
        <div style={{ width: '100%', paddingTop: '120px' }}>
            <ContactForm />
        </div>
        <Footer />
        </Layout>
    );
};

export default ContactPage;
