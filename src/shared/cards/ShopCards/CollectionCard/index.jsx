import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './style.module.scss';

const CollectionCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/collection-cards?populate=*');
        setCards(response.data.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  console.log(cards);

  return (
    <div className="grid grid-cols-5 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="bg-white p-4">
          <div className="rounded-full border border-gray-300 overflow-hidden">
            <img
              src={`http://localhost:1337${card.cardImage.url}`}
              alt={card.productInfo}
              className={`${styles.roundImage} w-full h-48 object-cover`}
            />
          </div>
          <h2 className="mt-2 text-xl font-bold">{card.productInfo}</h2>
        </div>
      ))}
    </div>
  );
};

export default CollectionCards;