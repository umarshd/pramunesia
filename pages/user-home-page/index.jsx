import React from "react";
import { FiUsers } from "react-icons/fi";
import Carousel from "../../components/afterlogin/carousel";
import Card from "../../components/afterlogin/home-card";
import Layout from "../../components/afterlogin/layout";
import sessionUserLogin from "../auth/sessionUserLogin";

function UserHomePage() {
  sessionUserLogin();
  return (
    <Layout pageTitle="user-home">
      <Carousel />
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
              icons={<FiUsers size="4rem" color="white" />}
              title="Cari Pemandu Wisata"
              desc="Lihat transaksi pembayaran
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
