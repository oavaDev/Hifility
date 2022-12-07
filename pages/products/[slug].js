import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout.js';
import FullProductCard from '../../components/FullProductCard.js';
const ProductScreen = ({ productData }) => {
  const { query } = useRouter();
  const { slug } = query;
  const product = productData.data.find((x) => x._id === slug);
  const quantity = 1;
  const quantityStock = 20;
  return (
    <Layout>
      <div>
        <FullProductCard
          id={product.id}
          name={product.name}
          brand={product.brand}
          image={product.image}
          price={product.price}
          description={product.description}
          subtitle={product.subTitle}
          quantity={quantity}
          quantityStock={quantityStock}
        />
      </div>
    </Layout>
  );
};
export default ProductScreen;

export async function getServerSideProps() {
  const productApi = await fetch(`https://hifility.onrender.com/product/show`, {
    method: 'GET',
  });
  const productData = await productApi.json();
  return {
    props: {
      productData,
    },
  };
}
