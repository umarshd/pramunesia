import Head from 'next/head';
import React from 'react';
import Footer from '../../footer';
import Navigation from '../navbar';

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

      <div className="container mx-auto">
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
