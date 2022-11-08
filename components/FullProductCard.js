import { Image } from '@nextui-org/react';
import React from 'react';
import { Text } from '@nextui-org/react';
import styles from '../styles/components/FullProductCard.module.css';
import CartIcon from './CartIcon';
import { Button, Link } from '@nextui-org/react';

const FullProductCard = ({
  image,
  brand,
  name,
  price,
  subtitle,
  description,
}) => {
  return (
    <div className={styles.FullProductCard__body}>
      <div className={styles.FullProductCard__body_image}>
        <Image
          id='image'
          alt='img'
          width='500'
          height='500'
          style={{
            width: '100%',
            height: '100%',
            minWidth: '15rem',
            minHeight: '1rem',
          }}
          loading={'lazy'}
          src={`${image}`}
        />
      </div>

      <div className={styles.FullProductCard__body_content}>
        <div>
          <Text
            h1
            size={40}
            weight={'light'}
            css={{
              textAlign: 'center',
              textGradient: '0deg, grey 50%, black',
            }}
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
            weight='normal'
          >
            {name}
          </Text>
        </div>
        <div>
          <Text
            h1
            size={18}
            weight={'light'}
            css={{
              textAlign: 'center',
              textGradient: '0deg, grey 50%, black',
            }}
          >
            {subtitle}
          </Text>
        </div>
        <div>
          {description.map((x, i) => {
            return (
              <Text
                key={i}
                h1
                size={12}
                weight={'light'}
                css={{
                  textAlign: 'center',
                  textGradient: '0deg, grey 50%, black',
                }}
              >
                {x}
              </Text>
            );
          })}
        </div>
        <div className={styles.FullProductCard__body_content_shop}>
          <div>
            <Text h1 size={20} weight='light'>
              ${price} USD
            </Text>
          </div>
        </div>
        <div className={styles.cart_button}>
          <Button className={styles.cart_button_button} flat auto as={Link}>
            <CartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FullProductCard;
