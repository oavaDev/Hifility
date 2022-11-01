import React from 'react';
import ProductCard from './ProductCard';
import { Text } from '@nextui-org/react';

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
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/5_99b91698-08fb-4661-815c-47a8e745c894.jpg?v=1629800987',
    brand: 'KZ',
    name: 'ZS10 PRO',
    subTitle:
      '4BA+1DD 5 Driver in-Ear HiFi Metal Earphones with Stainless Steel Faceplate, 2 Pin Detachable Cable',
    price: '45.00',
    description: [
      'Upgraded 4BA+1DD Hybrid Earphones&Magnetic Dynamic Unit',
      'Exquisite Craft',
      'PCB Frequency Dividing Board',
      'Ergonomic Design & Noise Canceling',
    ],
    rating: [20, 3],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/IMG_6706.jpg?v=1662115247',
    brand: 'TRIPOWIN',
    name: 'Cencibel',
    subTitle: 'High-resolution dynamic driver IEM',
    price: '44.10',
    description: [
      'Singularity in Sound',
      'Balanced Tonal Signature',
      '3D Designed and Constructed',
      'Detachable Cable',
    ],
    rating: [20, 3],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/TANCHJIMNewHANA-1-1000PX.jpg?v=1625795693',
    brand: 'TANCHJIM',
    name: 'New Hana',
    subTitle: 'DMT Dynamic HiFi In-Ear Monitoring',
    price: '152.99',
    description: [
      'Porcelain Imitation Enamel Process ',
      'High conductive OFC Cable ',
      '0.78/2pin Stable Connection ',
      'Compact And Lightweight ',
    ],
    rating: [20, 3],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/a3f98c6cd74d6a0a20a78a23cafe1827_2048x2048_70437138-2b7d-4f60-94e2-37792a4204ad.jpg?v=1662455620',
    brand: 'NFAUDIO',
    name: 'NA3',
    subTitle: 'Essentials Dynamic Driver Double Cavity In-Ear Monitor',
    price: '62.99',
    rating: [20, 3],
    description: [
      'Integrated Tuning Circuit',
      'High-performance NIB magnet',
      ' Dual Cavity Design',
      '5u High Polymer Composite Diaphragm ',
      'High-Quality Cable & Multiple Set Of Ear Tips',
      'High-Quality Cable & Multiple Set Of Ear Tips ',
    ],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/XennsUp6.jpg?v=1624517124',
    brand: 'Mangird',
    name: 'XENNS UP',
    subTitle:
      '2 Electrostatic Driver + 4BA + 1DD Hybrid Driver In-ear Earphone',
    price: '109',
    rating: [20, 3],
    description: [
      'Hand-painted Faceplate+Resin Shell',
      '6N OCC Silver-plated Detachable Cable',
      '2EST+4BA+1DD Driver ',
    ],
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0040/7201/3924/products/KZ-ZSNPRO-IEM-1.jpg?v=1567348966',
    brand: 'KZ',
    name: 'ZSN PRO',
    subTitle: '1BA+1DD HiFi Hybrid Dual Driver In Ear Earbuds',
    price: '17.85',
    rating: [20, 3],
    description: [
      'Improved Hybrid Drivers',
      'Exquisite Metal and Resin Design',
      'Improved 0.75mm 2 Pin Detachable Cable',
      'Ergonomic Design for Stable Wear',
    ],
  },
];

const ProductContainer = () => {
  return (
    <>
      <div className='ProductContainer-body'>
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
        <div className='ProductContainer-body-products'>
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
