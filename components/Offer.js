import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { Text, Link } from '@nextui-org/react';
import styles from '../styles/components/Offer.module.css';
const Offer = () => {
  return (
    <div className={styles.Offer__body}>
      <div className={styles.Offer__body_image}>
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
      <div className={styles.Offer__body_content}>
        <div>
          <Text
            h1
            size={30}
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
            }}
            weight='bold'
          >
            Sign up now and get a 5% discount on your next product
          </Text>
        </div>
        <div>
          <Button
            className={styles.signup_button_orange}
            flat
            auto
            as={Link}
            href='#'
          >
            <Text
              h1
              size={20}
              css={{
                margin: 'auto',
                color: 'white',
              }}
              weight='light'
            >
              Sign Up
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
