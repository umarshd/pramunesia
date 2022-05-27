import Image from 'next/image';
import React from 'react';
import Heroimg from '../../public/images/heropic.png';

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-lg-6 my-auto">
          <Image src={Heroimg} width={500} height={300} alt="hero image" />

        </div>
        <div className="col-lg-6 my-auto">
          <h1 className="h1 text-uppercase">pramunesia</h1>
          <p className="hero-desc">
            Platform Penyedia Layanan Pramuwisata
            {' '}
            <br />
            {' '}
            Berbasis Website dalam Pengembangan Pariwisata di daerah Cirebon
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
