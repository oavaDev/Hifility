import { Image } from '@nextui-org/react';
import React from 'react';
import CartIcon from './CartIcon';
const ProductCard = () => {
  return (
    <div className='ProductCard__body'>
      <div className='ProductCard__body-image'>
        <Image
          alt='img'
          width='500'
          height='500'
          style={{
            width: '100%',
            height: '100%',
            minWidth: '15rem',
            minHeight: '1rem',
          }}
          src='http://cdn.shopify.com/s/files/1/0040/7201/3924/products/7HZTimeless-2_3d709844-2bea-4125-938e-61febf3e320f_300x.jpg?v=1635258287'
        />
      </div>
      <div className='ProductCard__body-content'>
        <div>
          <p>7HZ</p>
        </div>
        <div>
          <span>Timeless</span>
        </div>

        <div className='ProductCard__body-content-shop'>
          <div>
            <span>120usd</span>
          </div>
          <div>
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
