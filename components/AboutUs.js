import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <img src="/images/NavBarLogo.png" alt="Iron Wood Logo" className={styles.logo} />
                    <h1>A Commercial Construction Company</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. 
                        Morbi mattis pretium eros, non tristique dolor efficitur et. Nulla facilisi. 
                        Donec sapien tortor, aliquet a gravida nec, viverra a arcu. Praesent et venenatis mauris. 
                        Duis non magna sed metus mattis semper vel sit amet dolor. Nullam non dapibus mauris, 
                        id rhoncus odio. Viverra sit amet nunc eget, faucibus semper justo. Vestibulum pharetra 
                        ac ante in dictum. 
                        <br></br> <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. 
                        Morbi mattis pretium eros, non tristique dolor efficitur et. Nulla facilisi. 
                        Donec sapien tortor, aliquet a gravida nec, viverra a arcu. Praesent et venenatis mauris. 
                        Duis non magna sed metus mattis semper vel sit amet dolor. Nullam non dapibus mauris, 
                        id rhoncus odio. Viverra sit amet nunc eget, faucibus semper justo. Vestibulum pharetra 
                        ac ante in dictum. 
                        <br></br> <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. 
                        Morbi mattis pretium eros, non tristique dolor efficitur et. Nulla facilisi. 
                        Donec sapien tortor, aliquet a gravida nec, viverra a arcu. Praesent et venenatis mauris. 
                        Duis non magna sed metus mattis semper vel sit amet dolor. Nullam non dapibus mauris, 
                        id rhoncus odio. Viverra sit amet nunc eget, faucibus semper justo. Vestibulum pharetra 
                        ac ante in dictum. 
                    </p>
                </div>
                <div className={styles.imageContainer}>
                <div className={styles.imageSection}>
                    <img src="/images/card2.png" alt="About Us" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
