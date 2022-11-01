import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
const Offer = () => {
  return (
    <div className='Offer__body'>
      <div className='Offer__body-image'>
        <Image
          width='500'
          height='500'
          style={{
            width: '100%',
            height: '100%',
            minWidth: '15rem',
            minHeight: '1rem',
          }}
          src='https://cdn.shopify.com/s/files/1/0040/7201/3924/files/sale-home-min.png?v=1667181347'
          alt='img'
        />
      </div>
      <div className='Offer__body-content'>
        <div>
          <p>Sign up now and get a 5% discount on your next product</p>
        </div>
        <div>
          <Button auto>Sign up here</Button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
