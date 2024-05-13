import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './ImageGallery.module.css';

const images = [
    { src: '/images/HpHero.jpg', path: '/work/project', visibleOnMobile: true, visibleOnDesktop: true },
    { src: '/images/card2.png', path: '/work/project', visibleOnMobile: true, visibleOnDesktop: true },
    { src: '/images/card3.png', path: '/work/project', visibleOnMobile: true, visibleOnDesktop: true },
    { src: '/images/card4.png', path: '/services/general-contracting', visibleOnMobile: false, visibleOnDesktop: true },
    { src: '/images/card1.png', path: '/work/project', visibleOnMobile: false, visibleOnDesktop: true }
];


const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredImages, setFilteredImages] = useState(images);

    useEffect(() => {

        const updateFilteredImages = () => {
            const isMobile = window.innerWidth < 768;
            const isDesktop = window.innerWidth >= 768;
            if (isMobile) {
                const newFilteredImages = images.filter(image => image.visibleOnMobile);
                setFilteredImages(newFilteredImages);

            } if (isDesktop) {
                    const newFilteredImages = images.filter(image => image.visibleOnDesktop);
                    setFilteredImages(newFilteredImages);
                    setCurrentIndex(0); // Always reset to the first image on desktop on any update
                }
        };

        updateFilteredImages();
        window.addEventListener('resize', updateFilteredImages);
    
        const handlePopState = () => {
            updateFilteredImages();
            if (window.innerWidth >= 768) {
                setCurrentIndex(0); // Reset index to 0 on desktop
            }
        };
    
        window.addEventListener('popstate', handlePopState);
    
        return () => {
            window.removeEventListener('resize', updateFilteredImages);
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % filteredImages.length),
        onSwipedRight: () => setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const handleCardChange = newIndex => {
        setCurrentIndex(newIndex);
    };

    const handleCardClick = (index, path) => {
        if (currentIndex === index) {
            navigate(path);
        } else {
            handleCardChange(index);
        }
    };

    const navigate = path => {
        window.location.href = `${window.location.origin}${path}`;
    };

    return (
        <div className={styles.wrapper} {...handlers}>
            <div className={styles.titleSection}>
                <h2>Our Work</h2>
            </div>
            <div className={styles.container}>
                {filteredImages.map((image, index) => (
                    <React.Fragment key={index}>
                        <input type="radio" name="slide" id={`c${index}`} className={styles.input} checked={currentIndex === index} onChange={() => handleCardChange(index)} />
                        <label htmlFor={`c${index}`} className={styles.card} style={{ backgroundImage: `url(${image.src})` }} onClick={() => handleCardClick(index, image.path)}>
                            <div className={styles.row}>
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