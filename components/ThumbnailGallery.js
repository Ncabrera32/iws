import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './ThumbnailGallery.module.css';

const ThumbnailGallery = ({ images }) => {
    const [mainImageIndex, setMainImageIndex] = useState(images.length > 0 ? 0 : -1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const mainImage = mainImageIndex !== -1 ? images[mainImageIndex] : null;

    const handleThumbnailClick = (index) => {
        setMainImageIndex(index);
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handlePrevImage = (event) => {
        if (event && typeof event.stopPropagation === 'function') {
            event.stopPropagation();
        }
        setMainImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };
    
    const handleNextImage = (event) => {
        if (event && typeof event.stopPropagation === 'function') {
            event.stopPropagation();
        }
        setMainImageIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const renderThumbnails = (numPerRow) => {
        const rows = [];
        for (let i = 0; i < images.length; i += numPerRow) {
            rows.push(images.slice(i, i + numPerRow));
        }

        return rows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.thumbnailRow}>
                {row.map((image, index) => {
                    const globalIndex = rowIndex * numPerRow + index;
                    return (
                        <div
                            key={globalIndex}
                            className={`${styles.thumbnail} ${globalIndex === mainImageIndex ? styles.activeThumbnail : ''}`}
                            onClick={() => handleThumbnailClick(globalIndex)}
                        >
                            <img src={image} alt={`Thumbnail ${globalIndex + 1}`} />
                        </div>
                    );
                })}
            </div>
        ));
    };

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: () => handleNextImage(),
        onSwipedRight: () => handlePrevImage(), 
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    // Modal-specific swipe handlers
    const modalSwipeHandlers = useSwipeable({
        onSwipedLeft: handleNextImage,
        onSwipedRight: handlePrevImage,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });


    return (
        <div className={styles.thumbnailGallery}>
            <div className={styles.mainImage} {...handlers} onClick={toggleModal}>
                {mainImage && (
                    <>
                        <div className={`${styles.navigationButton} ${styles.prevButton}`} onClick={handlePrevImage}>{"<"}</div>
                        <img src={mainImage} alt="Main Image" />
                        <div className={`${styles.navigationButton} ${styles.nextButton}`} onClick={handleNextImage}>{">"}</div>
                    </>
                )}
            </div>

            {isMobile ? renderThumbnails(6) : renderThumbnails(3)}

            {isModalOpen && (
                <div className={styles.modal} {...modalSwipeHandlers}>
                    <div className={`${styles.modalNavigationButton} ${styles.modalPrevButton}`} onClick={handlePrevImage}>{"<"}</div>
                    <img src={mainImage} alt="Large Main Image" className={styles.largeImage} />
                    <div className={`${styles.modalNavigationButton} ${styles.modalNextButton}`} onClick={handleNextImage}>{">"}</div>
                    <div className={styles.modalOverlay} onClick={toggleModal}></div>
                </div>
            )}
        </div>
    );
};

export default ThumbnailGallery;
