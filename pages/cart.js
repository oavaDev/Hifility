import React from 'react';
import CartContainer from '../components/CartContainer';
import Layout from '../components/Layout';
const Cart = () => {
  return (
    <>
      <Layout title={'Shopping Cart'}>
        <CartContainer />
      </Layout>
    </>
  );
};

export default Cart;
