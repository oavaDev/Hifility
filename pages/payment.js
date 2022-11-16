import React from 'react';
import Layout from '../components/Layout';
import PaymentContainer from '../components/PaymentContainer';

const Payment = () => {
  return (
    <Layout footer={false}>
      <PaymentContainer />
    </Layout>
  );
};

export default Payment;
