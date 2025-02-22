import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';
const TrendCard = () => {
  return (
  <div className={styles.productCards}>
        <div className={styles.cardHeader}>
          <h2>Trending Now</h2>
        </div>
        <div className={styles.headerDesc}>
          <p>Our bestselling piece, timeless and elegantly modern.</p>
        </div>
        <div className={styles.cardCarousel}>
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            pagination={{ type: 'fraction' }}
            navigation={true}
            modules={[Pagination, Navigation]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className={styles.slideCard}>
                <div className={styles.cardOrder}>
                  <a href="#">PRE-ORDER</a>
                </div>
                <div className={styles.cardImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_10_1.jpg?v=1724985479&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardHoverImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_10_2.jpg?v=1724985479"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardAction}>
                  <button name="add">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                  <span>
                    <i className="ri-heart-line"></i>
                  </span>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.productName}>
                    <a href="#">Double Pendant - 18k Gold</a>
                  </div>
                  <div className={styles.productRate}>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <div className={styles.productPrice}>
                    <span>$360.00</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Slide 2 */}
            <SwiperSlide>
              <div className={styles.slideCard}>
                <div className={styles.cardOrder}>
                  <a href="#">-10%</a>
                </div>
                <div className={styles.cardImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_2_1_049c4815-4d8e-47b9-9e64-b1e0767adb5e.jpg?v=1724983364&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardHoverImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_2_2_0206e18d-6407-4503-afea-ec1967be068c.jpg?v=1724983365&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardAction}>
                  <button name="add">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                  <span>
                    <i className="ri-heart-line"></i>
                  </span>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.productName}>
                    <a href="#">Elegant Ring - Silver</a>
                  </div>
                  <div className={styles.productRate}>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <div className={styles.productPrice}>
                    <span>$250.00</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Slide 3 */}
            <SwiperSlide>
              <div className={styles.slideCard}>
                <div className={styles.cardOrder}>
                  <a href="#">PRE-ORDER</a>
                </div>
                <div className={styles.cardImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_1_1_750abfc7-9ad5-4307-9375-384f51b8aa4b.jpg?v=1724983138&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardHoverImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_1_2_de210211-bb82-43a2-9217-b60696ffc548.jpg?v=1724983138&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardAction}>
                  <button name="add">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                  <span>
                    <i className="ri-heart-line"></i>
                  </span>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.productName}>
                    <a href="#">Modern Earrings</a>
                  </div>
                  <div className={styles.productRate}>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <div className={styles.productPrice}>
                    <span>$180.00</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Slide 4 */}
            <SwiperSlide>
              <div className={styles.slideCard}>
                <div className={styles.cardOrder}>
                  <a href="#">PRE-ORDER</a>
                </div>
                <div className={styles.cardImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_2_1_049c4815-4d8e-47b9-9e64-b1e0767adb5e.jpg?v=1724983364&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardHoverImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_2_2_0206e18d-6407-4503-afea-ec1967be068c.jpg?v=1724983365&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardAction}>
                  <button name="add">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                  <span>
                    <i className="ri-heart-line"></i>
                  </span>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.productName}>
                    <a href="#">Stylish Bracelet</a>
                  </div>
                  <div className={styles.productRate}>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <div className={styles.productPrice}>
                    <span>$150.00</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Slide 5 */}
            <SwiperSlide>
              <div className={styles.slideCard}>
                <div className={styles.cardOrder}>
                  <a href="#">PRE-ORDER</a>
                </div>
                <div className={styles.cardImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_1_1_750abfc7-9ad5-4307-9375-384f51b8aa4b.jpg?v=1724983138&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardHoverImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_9_2_80fd1953-d7f2-46ab-aba0-65d5955bb5cc.jpg?v=1724985324&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardAction}>
                  <button name="add">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                  <span>
                    <i className="ri-heart-line"></i>
                  </span>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.productName}>
                    <a href="#">Classic Watch</a>
                  </div>
                  <div className={styles.productRate}>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <div className={styles.productPrice}>
                    <span>$420.00</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Slide 6 */}
            <SwiperSlide>
              <div className={styles.slideCard}>
                <div className={styles.cardOrder}>
                  <a href="#">PRE-ORDER</a>
                </div>
                <div className={styles.cardImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_1_2_de210211-bb82-43a2-9217-b60696ffc548.jpg?v=1724983138&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardHoverImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_4_2_59d471fa-47c7-4dea-944e-5d6c18fcabf5.jpg?v=1724983703&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardAction}>
                  <button name="add">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                  <span>
                    <i className="ri-heart-line"></i>
                  </span>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.productName}>
                    <a href="#">Luxury Necklace</a>
                  </div>
                  <div className={styles.productRate}>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <div className={styles.productPrice}>
                    <span>$500.00</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Slide 7 */}
            <SwiperSlide>
              <div className={styles.slideCard}>
                <div className={styles.cardOrder}>
                  <a href="#">PRE-ORDER</a>
                </div>
                <div className={styles.cardImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_9_1_0daf2f01-8912-44b8-ae81-1d3369ee8e28.jpg?v=1724985324&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardHoverImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_1_2_de210211-bb82-43a2-9217-b60696ffc548.jpg?v=1724983138&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardAction}>
                  <button name="add">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                  <span>
                    <i className="ri-heart-line"></i>
                  </span>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.productName}>
                    <a href="#">Vintage Brooch</a>
                  </div>
                  <div className={styles.productRate}>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <div className={styles.productPrice}>
                    <span>$320.00</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
  
            {/* Slide 8 */}
            <SwiperSlide>
              <div className={styles.slideCard}>
                <div className={styles.cardOrder}>
                  <a href="#">PRE-ORDER</a>
                </div>
                <div className={styles.cardImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_9_1_0daf2f01-8912-44b8-ae81-1d3369ee8e28.jpg?v=1724985324&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardHoverImage}>
                  <img
                    src="https://rokan-theme.myshopify.com/cdn/shop/files/products_sport_9_2_80fd1953-d7f2-46ab-aba0-65d5955bb5cc.jpg?v=1724985324&width=360"
                    alt="desc"
                  />
                </div>
                <div className={styles.cardAction}>
                  <button name="add">
                    <i className="ri-shopping-bag-2-line"></i>
                  </button>
                  <span>
                    <i className="ri-heart-line"></i>
                  </span>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.productName}>
                    <a href="#">Vintage Brooch</a>
                  </div>
                  <div className={styles.productRate}>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <div className={styles.productPrice}>
                    <span>$320.00</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  };

export default TrendCard;
