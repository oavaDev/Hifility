import React from 'react';
import ProductCard from './ProductCard';
import { Text } from '@nextui-org/react';
import styles from '../styles/components/ProductContainer.module.css';
import { useRouter } from 'next/router';
const ProductContainer = (productData) => {
  const data = productData.productData;
  const { asPath } = useRouter();

  const data2show = asPath === '/products' ? data : data.slice(6, 12);
  return (
    <>
      <div className={styles.ProductContainer__body}>
        <Text
          h1
          size={40}
          css={{
            textAlign: 'center',
            textGradient: '45deg, grey, black',
          }}
          weight='bold'
        >
          {asPath === '/products'
            ? 'All products '
            : 'Meet our latest products'}
        </Text>
        <div className={styles.ProductContainer__body_products}>
          {data2show.map((item) => {
            return (
              <ProductCard
                key={item.name}
                name={item.name}
                brand={item.brand}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
