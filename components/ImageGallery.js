import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './ImageGallery.module.css';

const images = ['/images/HpHero.jpg', '/images/card2.png', '/images/card3.png', '/images/card4.png', '/images/card1.png'];

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % images.length),
        onSwipedRight: () => setCurrentIndex((currentIndex - 1 + images.length) % images.length),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div className={styles.wrapper} {...handlers}>
            <div className={styles.titleSection}>
                <h2>Our Work</h2>
            </div>
            <div className={styles.container}>
                {images.map((src, index) => (
                    <React.Fragment key={index}>
                        <input type="radio" name="slide" id={`c${index}`} className={styles.input} checked={currentIndex === index} onChange={() => setCurrentIndex(index)} />
                        <label htmlFor={`c${index}`} className={styles.card} style={{ backgroundImage: `url(${src})` }}>
                            <div className={styles.row}>
                                {/* <div className={styles.icon}>{index + 1}</div> */}
                                <div className={styles.description}>
                                    <h4>Project Title {index + 1}</h4>
                                    <p>Project Description {index + 1}</p>
                                </div>
                            </div>
                        </label>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;



