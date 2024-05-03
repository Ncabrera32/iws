import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <Layout pageTitle="Ironwood Contact Us">
        <div style={{ width: '100%'}}>
        <ContactForm />
        </div>
        </Layout>
    );
};

export default ContactPage;
