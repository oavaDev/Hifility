import React from 'react';
import Layout from '../components/Layout';
import OrderContainer from '../components/OrderContainer';
const Order = () => {
  return (
    <Layout footer={false}>
      <OrderContainer />
    </Layout>
  );
};

export default Order;
