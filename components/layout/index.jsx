import Head from 'next/head';
import React from 'react';
import Footer from '../footer';
import Header from '../header';

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Pramunesia |
          {' '}
          {pageTitle}
        </title>
      </Head>

      <div className="container d-flex flex-column vh-100">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
