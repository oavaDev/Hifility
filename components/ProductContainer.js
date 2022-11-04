import React from 'react';
import ProductCard from './ProductCard';
import { Text } from '@nextui-org/react';
import styles from '../styles/components/ProductContainer.module.css';
const data = [
  {
    image:
      'http://cdn.shopify.com/s/files/1/0040/7201/3924/products/7HZTimeless-2_3d709844-2bea-4125-938e-61febf3e320f_300x.jpg?v=1635258287',
    brand: '7HZ',
    name: 'Timeless',
    subTitle: '14.2mm Planar HiFi In-ear Earphone ',
    price: '109',
    description: [
      'Adopts Double-sided Array N52 Magnet and Ultra-thin Diaphragm',
      '14.2mm Planar Driver',
      'CNC Aluminum Shell',
      'Detachable MMCX Cable',
      'Lightweight and Comfortable',
    ],
    rating: [20, 3],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/1_53678b0c-66f3-4956-901b-6b3061135eb3.jpg?v=1664357042',
    brand: 'MOONDROP',
    name: 'Stellaris',
    subTitle: 'Outstanding 14.5mm Planar Driver In-Ear Monitor',
    price: '93.49',
    description: [
      'High-Precision Sub-Nanometer Driver Diaphragm',
      'Fully Symmetrical Magnetic Circuit',
      'Exquisite Starry Sky Theme Appearance',
      'Comfortable Liquid Silicone Ear Tips',
    ],
    rating: [20, 3],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/1_9_1818e743-5e56-4081-8837-7aff1cfcb675.jpg?v=1656312717',
    brand: '7HZ',
    name: 'Salnotes Dioko',
    subTitle: '14.6mm Planar Diaphragm Driver In Ear Earphone ',
    price: '130',
    description: [
      'Salnotes Dioko-14.6mm Planar Driver IEM',
      '7Hz x Crinacle Tuning',
      'N55 Magnet, Double-sided Array',
      'Fine Tuned CNC-Machined Aluminum Shell',
      'Tempered Glass & Sapphire Coating Surface',
      'Premium OCC Copper Cable & Storage Box',
    ],
    rating: [20, 3],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/4_f66be796-3de2-4bb7-a5bd-9c551f6b630a.jpg?v=1663325641',
    brand: 'HZSOUND',
    name: 'Heart Mirror Pro',
    subTitle: 'High Performance HiFi 10mm Dynamic Driver In-Ear Monitors ',
    price: '71.99',
    description: [
      '10MM CNT Carbon Nanotube Diaphragm',
      'Professional Tuning Adjustments',
      'Exquisite Heart-shaped Appearance',
      'Detachable High Purity Cable Design',
      'Ergonomic Design',
    ],
    rating: [20, 3],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/1_7_16e84831-3fdb-4a19-b448-2ada2600e090.jpg?v=1663150202',
    brand: 'TINHIFI ',
    name: 'T2 DLC',
    subTitle: 'Dual 10mm DLC Dynamic Driver In-Ear Earphones',
    price: '50.15',
    description: [
      'The Upgraded Version of Classic T2 IEM',
      '4th Gen DLC Composite Diaphragm, 10mm Dynamic Driver',
      '5N 8-Core Silver-plated 0.78mm 2Pin Cable',
      'Aviation-grade Aluminum Metal Cavity',
      'Compact and Neat, Comfortable Wearing',
    ],
    rating: [20, 3],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/TRIPOWINTC-01_1.jpg?v=1605694283',
    brand: 'TRIPOWIN',
    name: 'TC-01',
    subTitle: '1DD 10mm Si+PU Driver HiFi In-ear Earphone ',
    price: '49.00',
    description: [
      'The driver is a diaphragm with silicon coated on PU',
      'Supreme Quality Metal Shell ',
      'Noise Cancellation & Ergonomics',
    ],
    rating: [20, 3],
  },
];

const ProductContainer = () => {
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
          Meet our latest products
        </Text>
        <div className={styles.ProductContainer__body_products}>
          {data.map((item) => {
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
