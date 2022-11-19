import React, { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import ProductCard from '../components/ProductCard';
import {
  Container,
  Card,
  Row,
  Col,
  Text,
  Grid,
  Spacer,
} from '@nextui-org/react';
const OrderContainer = () => {
  const getFromStorage = () => {
    let token = '';
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('hifility');
    }
    return token;
  };
  const user = getFromStorage('hifility');
  const { isExpired } = useJwt(user);
  const isItExpired = isExpired;
  const [data, setData] = useState();
  useEffect(() => {
    if (!isItExpired) {
      fetch('https://hifility.onrender.com/auth/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [isItExpired, user]);
  return (
    <>
      <Container>
        <Card>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                h1
                size={30}
                weight='bold'
                transform='uppercase'
                color='#ffffffAA'
              >
                Products to be shipped
              </Text>
              <Text h3 color='white'>
                They will be leaving our headquarters within 24 hours
                {data ? (
                  ` to go to ${data.country} and be received by ${
                    data.fullName.slice(0, 1).toUpperCase() +
                    data.fullName.slice(1, data.fullName.length)
                  } in ${data.city}`
                ) : (
                  <></>
                )}
              </Text>
              <Text h4 color='white'>
                Shipping info
              </Text>
              <Text h5 color='white'>
                Country: {data ? ` ${data.country}` : <></>}
              </Text>
              <Text h5 color='white'>
                City: {data ? ` ${data.city}` : <></>}
              </Text>
              <Text h5 color='white'>
                Address: {data ? ` ${data.adress}` : <></>}
              </Text>
              <Text h5 color='white'>
                Contact Number: {data ? ` ${data.phoneNumber}` : <></>}
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668622433/150800-dark-grey-diagonal-shiny-lines-background-vector-art-2955080594_ndnfs4.jpg'
            objectFit='cover'
            width='100%'
            height={340}
            alt='Card image background'
          />
        </Card>
      </Container>
      <Grid.Container gap={2} justify='center'>
        {data ? (
          data.products.map((item, index) => {
            return (
              <Grid key={index} xs={4}>
                <Card isHoverable variant='bordered'>
                  <Card.Header
                    css={{ position: 'absolute', zIndex: 1, top: 5 }}
                  >
                    <Col>
                      <Text
                        size={12}
                        weight='bold'
                        transform='uppercase'
                        color='black'
                      >
                        {item.brand}
                      </Text>
                      <Text h4 color='black'>
                        {item.name}
                      </Text>
                    </Col>
                  </Card.Header>
                  <Card.Image
                    src={`${item.image}`}
                    objectFit='cover'
                    width='70%'
                    height={340}
                    alt='Card image background'
                  />
                </Card>
              </Grid>
            );
          })
        ) : (
          <></>
        )}
      </Grid.Container>
    </>
  );
};

export default OrderContainer;
