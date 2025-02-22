import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const Uiheader = () => {
  return (
    <div>
      <header>
        <div className={styles.navbar}>
          <div className={styles.grid}>
            <div className={styles.colSpan3}>
              <div className={styles.logoImage}>
                <img src="https://rokan-theme.myshopify.com/cdn/shop/files/logo.png?v=1719496953&width=165" alt="Logo" />
              </div>
            </div>
            <div className={styles.colSpan6}>
              <ul>
                <li>
                  <Link to="/">Home <i className="ri-arrow-drop-down-line"></i></Link>
                </li>
                <li>
                  <Link to="/shop">Shop <i className="ri-arrow-drop-down-line"></i></Link>
                </li>
                <li>
                  <a href="#">Product <i className="ri-arrow-drop-down-line"></i></a>
                </li>
                <li>
                  <a href="#">Pages <i className="ri-arrow-drop-down-line"></i></a>
                </li>
                <li>
                  <a href="#">Blogs <i className="ri-arrow-drop-down-line"></i></a>
                </li>
              </ul>
            </div>
            <div className={styles.colSpan3}>
              <div className={styles.HeaderIcon}>
                <a href="#"><i className="ri-search-line"></i></a>
                <a href="#"><i className="ri-user-3-line"></i></a>
                <a href="#"><i className="ri-heart-3-line"></i></a>
                <a href="#"><i className="ri-shopping-bag-line"></i></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Uiheader;