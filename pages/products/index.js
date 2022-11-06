import React from 'react';
import ProductContainer from '../../components/ProductContainer';
import Footer from '../../components/Footer';
import Nav from '../../components/Navbar';
const Products = ({ productData }) => {
  return (
    <>
      <Nav />
      <ProductContainer productData={productData.data} />;
      <Footer />
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
