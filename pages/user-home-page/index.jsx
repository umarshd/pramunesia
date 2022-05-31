import Image from 'next/image';
import React from 'react';
import Layout from '../../components/afterlogin/layout';

function UserHomePage({ data }) {
  return (
    <Layout pageTitle="user-home">
      <h2 className="text-center mb-3">Rekomendasi Wisata di Cirebon</h2>
      <div className="home-container" style={{ borderRadius: '1rem', height: '50vh' }}>
        {
        data.map((pic) => (
          <div className="home-inner" key={pic.id}>
            <Image
              src={pic.largeImageURL}
              width={pic.imageWidth}
              height={pic.webformatHeight}
              alt={pic.tag}
            />
          </div>
        ))
      }
      </div>
      <div className="mt-5">
        <h3 className="mb-4 text-center">Pilih sesuai kebutuhanmu</h3>
        <div className="mt-3 d-flex d-flex justify-content-center align-items-center">
          <div className="card shadow-card my-4 to-guide">
            <div className="card-body to-guide">
              <h5 className="card-title h1">Wisatawan</h5>
              <p className="card-text">Untuk Wisatawan</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const API_KEY = '27591509-67fde677ea61701e69579415e';
export async function getServerSideProps() {
  const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`);
  const data = await res.json();

  return {
    props: {
      data: data.hits,
    },
  };
}

export default UserHomePage;
