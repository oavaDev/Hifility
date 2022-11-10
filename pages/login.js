import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Navbar';
import LoginContainer from '../components/LoginContainer';
import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout title='Log in' footer={false}>
      <LoginContainer />
    </Layout>
  );
}
