import React from 'react';
import Carousel from '../../components/afterlogin/carousel';
import Layout from '../../components/afterlogin/layout';

function UserHomePage() {
  return (
    <Layout pageTitle="user-home">
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
        </div>
      </div>
    </Layout>
  );
}

export default UserHomePage;
