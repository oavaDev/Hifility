import React, { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import ProductCard from '../components/ProductCard';
import { useRouter } from 'next/router';
import {
  Container,
  Card,
  Row,
  Col,
  Text,
  Grid,
  Spacer,
} from '@nextui-org/react';
const TrackProductsContainer = () => {
  const router = useRouter();

  const handleOrder = () => {
    router.push('/order');
  };

  return (
    <>
      <div>
        <Spacer y={2} />
        <Container>
          <Card>
            <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight='bold'
                  transform='uppercase'
                  color='#ffffffAA'
                >
                  There you are!
                </Text>
                <Text h4 color='white'>
                  Here you can track your orders
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620503/HD-DJ-Headphones-Wallpaper-3860258731_gmced3.jpg'
              objectFit='cover'
              width='100%'
              height={340}
              alt='Card image background'
            />
          </Card>
        </Container>
        <Spacer y={3} />
        <Grid.Container gap={2} justify='center'>
          <Grid xs={4}>
            <Card isHoverable variant='bordered'>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight='bold'
                    transform='uppercase'
                    color='#ffffffAA'
                  >
                    Click to see the products
                  </Text>
                  <Text h4 color='white'>
                    Orders created
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                onClick={handleOrder}
                src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620919/657417-867137095_m1i39p.jpg'
                objectFit='cover'
                width='100%'
                height={340}
                alt='Card image background'
              />
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card isHoverable variant='bordered'>
              <Card.Header
                css={{ position: 'absolute', zIndex: 1, top: 5, left: 5 }}
              >
                <Col>
                  <Text
                    size={12}
                    weight='bold'
                    transform='uppercase'
                    color='#ffffffAA'
                  >
                    Click to see your shipped products
                  </Text>
                  <Text h4 color='white'>
                    Shipped
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620919/HiFiMan-HE400se-7-4150916903_uwltoj.jpg'
                objectFit='cover'
                width='100%'
                height={340}
                alt='Card image background'
              />
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card isHoverable variant='bordered'>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight='bold'
                    transform='uppercase'
                    color='#ffffffAA'
                  >
                    Click to see your delivered products
                  </Text>
                  <Text h4 color='white'>
                    Delivered
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620918/Sundara-4-2488557909_yudzcr.jpg'
                objectFit='cover'
                width='100%'
                height={340}
                alt='Card image background'
              />
            </Card>
          </Grid>
        </Grid.Container>
      </div>
    </>
  );
};

export default TrackProductsContainer;
