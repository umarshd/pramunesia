import React from 'react';
<<<<<<< HEAD
import Carousel from '../../components/afterlogin/carousel';
=======
>>>>>>> parent of 512c825 (Merge branch 'main' into development)
import Layout from '../../components/afterlogin/layout';

function UserHomePage() {
  return (
    <Layout pageTitle="user-home">
<<<<<<< HEAD
      <Carousel />
      <div className="mt-5">
        <h3 className="mb-4 text-center">Pilih sesuai kebutuhanmu</h3>
        <div className="mt-3 d-flex d-flex justify-content-center align-items-center">
          <div className="card shadow-card my-4 to-guide">
            <div className="card-body to-guide">
              <h5 className="card-title h1">Wisatawan</h5>
              <p className="card-text">Untuk Wisatawan</p>
            </div>
          </div>
=======
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
>>>>>>> parent of 512c825 (Merge branch 'main' into development)
        </div>
      </div>
    </Layout>
  );
}

export default UserHomePage;
