// components/ContactForm.js
import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you'd typically handle the submission, e.g., send data to an API
        alert('Form submitted');
    };

    return (
        <div className={styles.contactContainer}>
        <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
                <h1>Get In Touch Today!</h1>
                <p>Lorem ipsum Dolor sit amet. This is text you can make whatever you would like.</p>
                <div className={styles.socialLinks}>
          <button>Instagram</button>
          <button>Facebook</button>
          <button>LinkedIn</button>
        </div>
            </div>
            <div className={styles.contactForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Work Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                        <input type="text" name="service" placeholder="Service" value={formData.service} onChange={handleChange} required />
                    </div>
                    <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required />
                    <button type="submit">Send Message</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default ContactForm;
