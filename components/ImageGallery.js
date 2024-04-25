// components/ImageGallery.js
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImageGallery.module.css'; // Ensure this CSS module exists

const images = ['/images/card1.png', '/images/card2.png']; // Array of image sources

const ImageGallery = () => {
    return (
        
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
        <h2>Our Work</h2>
        </div>
        <div className={styles.container}>
          <input type="radio" name="slide" id="c1" className={styles.input} defaultChecked />
          <label htmlFor="c1" className={styles.card} style={{ backgroundImage: "url('/images/HpHero.jpg')" }}>
            <div className={styles.row}>
              <div className={styles.icon}>1</div>
              <div className={styles.description}>
                <h4>Project Title</h4>
                <p>Project Description</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" className={styles.input} />
          <label htmlFor="c2" className={styles.card} style={{ backgroundImage: "url('/images/card2.png')" }}>
            <div className={styles.row}>
              <div className={styles.icon}>2</div>
              <div className={styles.description}>
              <h4>Project Title</h4>
                <p>Project Description</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" className={styles.input} />
          <label htmlFor="c3" className={styles.card} style={{ backgroundImage: "url('/images/card3.png')" }}>
            <div className={styles.row}>
              <div className={styles.icon}>3</div>
              <div className={styles.description}>
              <h4>Project Title</h4>
                <p>Project Description</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c4" className={styles.input} />
          <label htmlFor="c4" className={styles.card} style={{ backgroundImage: "url('/images/card4.png')" }}>
            <div className={styles.row}>
              <div className={styles.icon}>4</div>
              <div className={styles.description}>
              <h4>Project Title</h4>
                <p>Project Description</p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c5" className={styles.input} />
          <label htmlFor="c5" className={styles.card} style={{ backgroundImage: "url('/images/card1.png')" }}>
            <div className={styles.row}>
              <div className={styles.icon}>5</div>
              <div className={styles.description}>
              <h4>Project Title</h4>
                <p>Project Description</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    );
  };
  
  export default ImageGallery;


