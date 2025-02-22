import React from 'react';
import CollectionCards from '../../../shared/cards/ShopCards/CollectionCard';
import CollectionItem from '../../../shared/cards/ShopCards/CollectionItem';

const ShopLayout = () => {
  return (
    <div className="flex w-full min-h-screen bg-customBlue flex-col justify-start items-center p-6 mt-4">
      <CollectionCards />
      <CollectionItem />
    </div>
  );
};

export default ShopLayout; 