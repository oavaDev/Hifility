import React from 'react';
import Layout from '../components/Layout';
import UserContainer from '../components/UserContainer';

const User = () => {
  return (
    <>
      <Layout title='User ' footer={false}>
        <UserContainer />
      </Layout>
    </>
  );
};

export default User;
