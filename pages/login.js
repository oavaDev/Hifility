import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Navbar';
import LoginContainer from '../components/LoginContainer';
export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hifility</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main>
        <LoginContainer />
      </main>
    </div>
  );
}