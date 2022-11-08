import React from 'react';
import Head from 'next/head';
import Nav from './Navbar';
import Footer from './Footer';
import styles from '../styles/Home.module.css';

const Layout = ({ footer, title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '- Hifility' : 'Hifility'}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <Nav />
        <main>{children}</main>
        {footer ? <Footer /> : <></>}
      </div>
    </>
  );
};

export default Layout;
