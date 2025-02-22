import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './style.module.scss';

const ProductGridContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/product-grid-containers?populate=*');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 ">
          {/* Main Image */}
          <div className={styles["image-wrapper"]}>
  <img
    src={`http://localhost:1337${product.MainImage.url}`}
    alt={product.ProductName}
    className={styles["main-image"]}
  />
  <img
    src={`http://localhost:1337${product.HoverImage.url}`}
    alt={product.ProductName}
    className={styles["hover-image"]}
  />
</div>

          {/* Product Details */}
          <h2 className="mt-2 text-lg font-bold">{product.ProductName}</h2>
          <p className="text-gray-600">{product.ProductColor}</p>
          <p className="text-gray-900 font-semibold">${product.ProductPrice}</p>
          <p dangerouslySetInnerHTML={{ __html: product.ProductRate }} />
        </div>
      ))}
    </div>
  );
};

export default ProductGridContainer;