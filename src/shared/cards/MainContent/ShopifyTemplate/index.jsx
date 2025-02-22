import React from 'react';
import styles from './style.module.scss';

const ShopifyTemplate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.cardHeader}>
          <div className={styles.headerIcons}>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
          </div>
          <div className={styles.headerInfo}>
            <p>One of the best looking eCommerce template. If you are looking for clean and minimal kind of template you should go with this. Thanks to all those who created this template.</p>
          </div>
          <div className={styles.cardImages}>
            <div className={styles.firstImage}>
              <img src="https://rokan-theme.myshopify.com/cdn/shop/files/org_testi3.png?v=1723001306" alt="image" />
            </div>
            <div className={styles.secondImage}>
              <img src="https://rokan-theme.myshopify.com/cdn/shop/files/org_testi1.png?v=1723001306" alt="image" />
            </div>
            <div className={styles.thirdImage}>
              <img src="https://rokan-theme.myshopify.com/cdn/shop/files/org_testi2.png?v=1723001306" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopifyTemplate;