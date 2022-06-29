import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  FiMapPin, FiCalendar, FiUsers, FiMessageSquare, FiMessageCircle, FiMail, FiPhoneCall,
} from 'react-icons/fi';
import Header from '../../components/header';
import About from '../../public/images/about.png';
import FooterLogo from '../../public/images/footer-logo.png';

export default function TentangKami() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pramunesia | Tentang Kami</title>
      </Head>
      <div className="container mx-auto">
        <Header />
        <section className="about-section mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <Image src={About} width={1000} height={450} alt="about image" />
          </div>
          <h1 className="h1 text-center">Jelajahi Tempat Indah Bersama Kami!</h1>
        </section>
        <div className="soft-shadow bg-soft-peace  my-5 p-3 d-flex flex-column justify-content-center align-items-center rounded shadow-custom-3">
          <h2>Pramunesia!</h2>
          <small className="text-pumpkin fw-600 my-2">#GuideYoutoAmazingJourney</small>
          <div className="paragraph mt-3">
            <p className="p mb-3 text-center">
              Merupakan sebuah platform penyedia layanan sewa pemandu wisata untuk
              memudahkan Anda dalam mengatur perjalanan selama liburan
              di destinasi wisata tujuan.
            </p>
            <p className="p mb-3 text-center ">
              Pramunesia sebagai penghubung antara pemandu wisata dan wisatawan
              untuk menghasilkan pengalaman terbaik selama berwisata
            </p>
            <p className="p mb-3 text-center">
              Memilki komitmen untuk menjadi teman terbaik perjalanan Anda dengan
              menyediakan berbagai layanan yang dapat memudahkan Anda
            </p>
          </div>
        </div>
        <div className="features d-flex flex-column justify-content-center align-items-center my-5">
          <h2>Bersama Pramunesia</h2>
          <div className="row mt-4">
            <div className="col-md-3 col-sm-6">
              <div className="smooth-shadow d-flex flex-column justify-content-center align-items-center p-3 h15 rounded">
                <FiMapPin size={80} />
                <p className="text-center my-2">
                  Dapat memilih
                  destinasi wisata
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="smooth-shadow d-flex flex-column justify-content-center align-items-center p-3 h15 rounded">
                <FiCalendar size={80} />
                <p className="text-center my-2">
                  Dapat memilih
                  waktu untuk
                  berwisata

                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="smooth-shadow d-flex flex-column justify-content-center align-items-center p-3 h15 rounded">
                <FiUsers size={80} />
                <p className="text-center my-2">
                  Dapat memilih
                  pemandu wisata
                  dengan mudah

                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="smooth-shadow d-flex flex-column justify-content-center align-items-center p-3 h15 rounded">
                <FiMessageSquare size={80} />
                <p className="text-center my-2">
                  Dapat membuat dan
                  melihat ulasan para
                  wisatawan lainnya

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="help d-flex flex-column justify-content-center align-items-center text-white py-4 rounded my-5">
          <div className="row">
            <h2 className="mb-4 text-center">Butuh Bantuan? Hubungi Kami</h2>
            <div className="col-md-4 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <FiMessageCircle size={80} />
                <p className="text-center my-2">
                  Whatsapp
                  {' '}
                  <br />
                  +6287362123456
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <FiMail size={80} />
                <p className="text-center my-2">
                  Email
                  {' '}
                  <br />
                  pramunesia@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <FiPhoneCall size={80} />
                <p className="text-center my-2">
                  Call Center
                  {' '}
                  <br />
                  +62823641873492
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 bg-soft-peace d-flex justify-content-center align-items-center">
        <div className="py-4 py-lg-5 container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 text-center text-lg-start d-flex flex-column align-items-center item">
              <Image src={FooterLogo} width={100} height={90} alt="footer-logo" />
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 text-center text-lg-start d-flex flex-column item">
              <h3 className="fs-6">Tentang Kami</h3>
              <ul className="list-unstyled">
                <li>
                  <a className="link-secondary" href="#">
                    Pramunesia
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Bersama Pramunesia
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 text-center text-lg-start d-flex flex-column item">
              <h3 className="fs-6">Layanan</h3>
              <ul className="list-unstyled">
                <li>
                  <a className="link-secondary" href="#">
                    Pramunesia
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Bersama Pramunesia
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 text-center text-lg-start d-flex flex-column item">
              <h3 className="fs-6">Lainnya</h3>
              <ul className="list-unstyled">
                <li>
                  <a className="link-secondary" href="#">
                    Pramunesia
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Bersama Pramunesia
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
