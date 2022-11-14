import React, { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';
import Layout from '../components/Layout';
import { useJwt } from 'react-jwt';
const Form = () => {
  return (
    <Layout footer={false}>
      <FormContainer />
    </Layout>
  );
};

export default Form;
