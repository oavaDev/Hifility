import { Image } from '@nextui-org/react';
import React from 'react';
import { Text } from '@nextui-org/react';

const ProductCard = ({ image, brand, name, price }) => {
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
          src={`${image}`}
        />
      </div>
      <div className='ProductCard__body-content'>
        <div>
          <Text
            h1
            size={40}
            css={{
              textAlign: 'center',
              textGradient: '0deg, grey 50%, black',
            }}
            weight='light'
          >
            {brand}
          </Text>
        </div>
        <div>
          <Text
            h1
            size={30}
            css={{
              textAlign: 'center',
              textGradient: '180deg, grey 50%, black',
            }}
            weight='bold'
          >
            {name}
          </Text>
        </div>

        <div className='ProductCard__body-content-shop'>
          <div>
            <Text h1 size={20} weight='light'>
              ${price} USD
            </Text>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
