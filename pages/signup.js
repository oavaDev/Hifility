import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Navbar';
import SignUpContainer from '../components/SignUpContainer';
import Layout from '../components/Layout';

export default function SignUp() {
  return (
    <Layout title='Sign up' footer={false}>
      <SignUpContainer />
    </Layout>
  );
}
