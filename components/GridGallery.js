import React from 'react';
import styles from './GridGallery.module.css';

const images = [
    '/images/card1.png',
    '/images/card2.png',
    '/images/card3.png',
    '/images/card4.png',
    '/images/card1.png',
    '/images/card2.png',
    '/images/card3.png',
    '/images/card4.png',
    '/images/card1.png'
];

const addresses = [
    { address1: "123 Main St", address2: "Seattle, WA 98101" },
    { address1: "456 Elm Ave", address2: "San Francisco, CA 94102" },
    { address1: "789 Oak Blvd", address2: "Austin, TX 78703" },
    { address1: "101 Pine Lane", address2: "New York, NY 10001" },
    { address1: "202 Maple Rd", address2: "Boston, MA 02108" },
    { address1: "303 Cedar St", address2: "Denver, CO 80202" },
    { address1: "404 Birch Ave", address2: "Chicago, IL 60611" },
    { address1: "505 Walnut Way", address2: "Portland, OR 97205" },
    { address1: "606 Spruce Ct", address2: "Miami, FL 33101" }
];

const GridGallery = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gridGallery}>
                {images.map((image, index) => (
                    <a key={index} href="/work/project" className={styles.gridCard}>
                        <img src={image} alt={`Card ${index + 1}`} className={styles.gridImage} />
                        <div className={styles.cardAddress}>
                            <div>{addresses[index].address1}</div>
                            <div>{addresses[index].address2}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default GridGallery;