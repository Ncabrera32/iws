import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


const ContactPage = () => {
    return (
        <Layout pageTitle="Ironwood Contact Us">
        <div style={{ width: '100%'}}>
        <ContactForm />
        </div>
        <Footer />
        </Layout>
    );
};

export default ContactPage;
