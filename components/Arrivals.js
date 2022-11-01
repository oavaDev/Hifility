import React from 'react';
import Image from 'next/image';
const Arrivals = () => {
  return (
    <div className='Arrivals__body'>
      <div className='Arrivals__body-image'>
        <Image
          width='512'
          height='512'
          style={{
            width: '512px',
            height: '212px',
            minWidth: '15rem',
            minHeight: '1rem',
          }}
          src='https://cdn.shopify.com/s/files/1/0040/7201/3924/files/thieaudio-oraclemkii-min.png?v=1663719288'
          alt='img'
        />
      </div>
      <div className='Arrivals__body-content'>
        <div>
          <p>New Arrival</p>
        </div>
        <div>
          <span>Coming on 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
