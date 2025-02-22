import React from 'react'
import styles from './style.module.scss'

const Uifooter = () => {
  return (
    <div className={`${styles.root} mt-50 bg-blue-200 flex w-full h-screen flex-col justify-center p-6`}>
      <div className="w-full grid grid-cols-4 gap-6 p-8">
        <div className={styles.footerLeft}>
          <div className={styles.footerImage}>
            <img src="https://rokan-theme.myshopify.com/cdn/shop/files/logo_white.png?v=1719496957&width=360" alt="" />
          </div>
          <div className={styles.footerInfo}>
            <p className="mb-[40px]">
              Our mission is to provide an unparalleled customer experience in the fashion industry, ensuring exceptional quality and service in every interaction.
            </p>
            <p className="mb-[10px]">Phone: +222-1800-2628</p>
            <p className="mb-[10px]">Address: 502 New Design Str, Melbourne, Australia</p>
            <p className="mb-[10px]">Email: rokan@domain.com</p>
          </div>
          <div className={styles.footerSocialMedia}>
            <ul className={styles.footerSocialList}>
              <li className="d-inline-flex align-item-center">
                <a href="https://www.instagram.com/">
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
              </li>
              <li className="d-inline-flex align-item-center">
                <a href="#">
                  <i className="ri-tiktok-line text-2xl"></i>
                </a>
              </li>
              <li className="d-inline-flex align-item-center">
                <a href="https://www.youtube.com/">
                  <i className="ri-youtube-line text-2xl"></i>
                </a>
              </li>
              <li className="d-inline-flex align-item-center">
                <a href="#">
                  <i className="ri-twitter-x-line text-2xl"></i>
                </a>
              </li>
              <li className="d-inline-flex align-item-center">
                <a href="#">
                  <i className="ri-facebook-box-fill text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerCenter}>
          <div className={styles.footerHeader}>
            <h3>Our Company</h3>
          </div>
          <div className={styles.footerContent}>
            <ul className="list-none p-5 m-0 flex flex-col space-y-0.25">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Stores</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Timeline</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerCenter}>
          <div className={styles.footerHeader}>
            <h3>Customer Service</h3>
          </div>
          <div className={styles.footerContent}>
            <ul className="list-none p-0 m-0 flex flex-col space-y-0.25">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Theme FAQs</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Advanced Search</a></li>
              <li><a href="#">Store Locations</a></li>
              <li><a href="#">Term & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerHeader}>
            <h3>Sign Up To Newsletter</h3>
          </div>
          <div className={styles.footerContent}>
            <div className={styles.footerText}>
              <p>Sign up for exclusive updates, new arrivals & insider only discounts</p>
            </div>
            <div className="mt-30">
              <form action="#" method="post" id="subscribe-form">
                <input type="email" name="email" id="email" placeholder="Enter your email..." />
                <button type="submit">Subscribe</button>
              </form>
              <p className="pt-9 tracking-[0.15em]">
                ***By entering the e-mail you accept the terms and conditions and the privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uifooter
