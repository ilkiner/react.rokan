import React from 'react';
import styles from './style.module.scss';

const ShopifyCard = ({ id, image, desc }) => {
  return (
    <div id={id} className={styles.shopCard}>
      <div className={styles.cardImage}>
        <img src={image} alt={desc} />
      </div>
      <div className={styles.cardDesc}>
        <h3>{desc}</h3>
      </div>
      <div className={styles.cardButton}>
        <button type="submit">
          <a href="#">Shop Now</a>
        </button>
      </div>
    </div>
  );
};

export default ShopifyCard;
