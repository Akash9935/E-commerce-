import React from 'react';
import styles from './card.module.css';

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={data.url} alt={data.name} className={styles.image} />
      <button className={styles.wishlistButton}>
        {true ? '♥' : '♡'}
      </button>
    </div>
    <div className={styles.content}>
      <h2 className={styles.name}>{data.name}</h2>
      <p className={styles.description}>{data.desc}</p>
      <div className={styles.footer}>
        <p className={styles.price}>${data.price}</p>
        <button className={styles.actionButton}>
          Buy Now
        </button>
      </div>
    </div>
  </div>
  );
};

export default Card;
