//components/ContactForm.js
import { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You would send formData to your server here
        console.log(formData);
    };

    return (
        <div className={styles.contactFormContainer}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.input} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className={styles.textarea} required />
                </label>
                <button type="submit" className={styles.button}>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
