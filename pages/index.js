import styles from '../styles/Home.module.css';
import Arrivals from '../components/Arrivals';
import Offer from '../components/Offer';
import ProductCard from '../components/ProductCard';
import ProductContainer from '../components/ProductContainer';
import { Text, Input, Button, Link } from '@nextui-org/react';
import Layout from '../components/Layout';
export default function Home({ productData }) {
  const quantity = 1;
  const quantityStock = 30;
  return (
    <Layout footer={true}>
      <section className={styles.curved}>
        <div className={styles.flex}>
          <Arrivals />
          <Offer />
        </div>
        <Text
          h1
          size={40}
          css={{
            textAlign: 'center',
            textGradient: '45deg, grey, black',
          }}
          weight='bold'
        >
          Featured
        </Text>
        <div className={styles.flexRow}>
          {productData.data.slice(0, 5).map((item, pos) => {
            return (
              <ProductCard
                key={item._id}
                id={item._id}
                name={item.name}
                brand={item.brand}
                image={item.image}
                price={item.price}
                quantity={quantity}
                quantityStock={quantityStock}
              />
            );
          })}
        </div>
      </section>
      <section className={styles.curved2}>
        <div className={styles.flex}>
          <ProductContainer productData={productData.data} />
        </div>
      </section>
      <section>
        <div>
          <Text
            h1
            size={40}
            css={{
              width: '60%',
              margin: '1rem auto',
              marginTop: '4rem',
              textAlign: 'center',
              textGradient: '45deg, grey, black',
            }}
            weight='bold'
          >
            Submit and get notifications for featured products, deals, and much
            more!
          </Text>
          <div className={styles.flex}>
            <Input
              aria-label='email'
              css={{
                backgroundColor: 'black',
                padding: '0.2rem',
                width: '30%',
                margin: '1rem auto',
                marginTop: '4rem',
                textAlign: 'center',
              }}
              placeholder='Enter your email address'
            />
          </div>
          <Button
            css={{
              backgroundColor: 'black',
              color: ' white',
              margin: '0rem auto',
              textAlign: 'center',
              marginBottom: '5rem',
            }}
            flat
            as={Link}
            href='#'
          >
            Submit
          </Button>
        </div>
      </section>
    </Layout>
  );
}
export async function getServerSideProps() {
  const productApi = await fetch(
    `https://hifilityback-production.up.railway.app/product/show`,
    {
      method: 'GET',
    }
  );
  const productData = await productApi.json();
  return {
    props: {
      productData,
    },
  };
}
