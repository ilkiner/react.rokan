import React from 'react';
import MainContent from '../../../shared/cards/MainContent';
import ProductCards from '../../../shared/cards/ProductCards';
import ShopifyCard from '../../../shared/cards/ShopifyCards';
import ShopifyTemplate from '../../../shared/cards/MainContent/ShopifyTemplate';
import ShopifySecondCard from '../../../shared/cards/MainContent/ShopifySecondCards';
import TrendCard from '../../../shared/cards/MainContent/TrendCard';

const HomePage = () => {
  return (
    <div className="flex w-full min-h-screen bg-customBlue flex-col justify-center p-6">
      <div className="w-full grid grid-cols-3 gap-6 p-8">
        <MainContent
          id="main-content-1"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_1.jpg?v=1728574886"
          title="Necklaces"
        />
        <MainContent
          id="main-content-2"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_2.jpg?v=1728574894"
          title="Earrings"
        />
        <MainContent
          id="main-content-3"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_3.jpg?v=1728574894"
          title="Rings"
        />
      </div>
      <div className="mt-10">
        <ProductCards />
      </div>
      <div className="w-full grid grid-cols-4 gap-6 p-6 mt-5">
        <ShopifyCard
          id="shopify-card-1"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_4.jpg?v=1728576927&width=720"
          desc="14ct Solid Gold"
        />
        <ShopifyCard
          id="shopify-card-2"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_5.jpg?v=1728576927&width=720"
          desc="Spotted On"
        />
        <ShopifyCard
          id="shopify-card-3"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_6.jpg?v=1728576927&width=720"
          desc="Mixed metal jewellery"
        />
        <ShopifyCard
          id="shopify-card-4"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_7.jpg?v=1728576927&width=720"
          desc="Diamond Bracelet"
        />
      </div>
      <ShopifyTemplate/>
      <div className="mt-10">
        <div className="w-full grid grid-cols-3 gap-6 p-6 mt-5 justify-center items-center">
          <ShopifySecondCard
          id="shopify-second-card-1"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_4.jpg?v=1728576927&width=720"
          desc="Your Description"
        />
         <ShopifySecondCard
          id="shopify-second-card-2"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_5.jpg?v=1728576927&width=720"
          desc="Spotted On"
        />
         <ShopifySecondCard
          id="shopify-second-card-3"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_6.jpg?v=1728576927&width=720"
          desc="Mixed metal jewellery"
        />
        </div>
        
      </div>
      <div className="mt-10">
        <TrendCard
          id="trend-card-1"
          image="https://rokan-theme.myshopify.com/cdn/shop/files/je_8.jpg?v=1728576927&width=720"
          desc="Trending Now"
        />
      </div>
    </div>
  );
};

export default HomePage;