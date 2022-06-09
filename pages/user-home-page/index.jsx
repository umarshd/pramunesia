import Image from 'next/image';
import React from 'react';
import Card from '../../components/afterlogin/home-card';
import Layout from '../../components/afterlogin/layout';

function UserHomePage({ data }) {
  return (
    <Layout pageTitle="user-home">
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
