import React from 'react';
import ProductContainer from '../../components/ProductContainer';
import Layout from '../../components/Layout';
const Products = ({ productData }) => {
  return (
    <>
      <Layout footer={true} title={'Products'}>
        <ProductContainer productData={productData.data} />;
      </Layout>
    </>
  );
};

export default Products;

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
