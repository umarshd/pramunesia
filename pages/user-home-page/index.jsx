import React from 'react';
<<<<<<< HEAD
import Carousel from '../../components/afterlogin/carousel';
=======
import Card from '../../components/afterlogin/home-card';
>>>>>>> 512c825e60a2cfcd06951711c48872dce78e9ad0
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
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {data.map((pic) => (
            <div className="carousel-item active" key={pic.id}>
              <Image
                src={pic.largeImageURL}
                width={1200}
                height={500}
                alt={pic.tags}
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only visually-hidden">Next</span>
        </button>
      </div>
      <div className="my-5">
        <h3 className="h3 my-3">Pilih sesuai kebutuhanmu</h3>
        <div className="row my-3">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <Card
              title="Cari Pemandu Wisata"
              desc="Temukan pemandu wisata andalanmu
          disini!"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6" />
>>>>>>> 512c825e60a2cfcd06951711c48872dce78e9ad0
        </div>
      </div>
    </Layout>
  );
}

export default UserHomePage;
