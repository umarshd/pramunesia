import React from "react";
import Carousel from "../../components/afterlogin/carousel";
import Card from "../../components/afterlogin/home-card";
import Layout from "../../components/afterlogin/layout";

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
      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner"></div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only visually-hidden">Next</span>
        </button>
      </div> */}
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
        </div>
      </div>
    </Layout>
  );
}

export default UserHomePage;
