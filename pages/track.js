import React from 'react';
import Layout from '../components/Layout';
import TrackProductsContainer from '../components/TrackProductsContainer';
const Track = () => {
  return (
    <Layout footer={false}>
      <TrackProductsContainer />
    </Layout>
  );
};

export default Track;
