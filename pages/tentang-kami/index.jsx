import React from 'react';
import Head from 'next/head';
import Header from '../../components/header';

export default function TentangKami() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pramunesia | Tentang Kami</title>
      </Head>
      <div className="container mx-auto">
        <Header />

      </div>
    </>
  );
}
