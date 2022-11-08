import React from 'react';
import ProductContainer from '../../components/ProductContainer';
import Layout from '../../components/Layout';
const Products = ({ productData }) => {
  return (
    <>
      <Layout>
        <ProductContainer productData={productData.data} />;
      </Layout>
    </>
  );
};

export default Products;

export async function getServerSideProps(ctx) {
  const productApi = await fetch(`http://localhost:8080/product/show`, {
    method: 'GET',
  });
  const productData = await productApi.json();
  console.log(ctx);
  return {
    props: {
      productData,
    },
  };
}
