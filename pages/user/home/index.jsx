import React from 'react';
import { FiUsers } from 'react-icons/fi';
import Link from 'next/link';
import Carousel from '../../../components/afterlogin/carousel';
import Card from '../../../components/afterlogin/home-card';
import Layout from '../../../components/afterlogin/layout';
import sessionUserLogin from '../../auth/sessionUserLogin';

function UserHomePage() {
  sessionUserLogin();
  return (
    <Layout pageTitle="user-home">
      <h3 className="h3 my-3 mx-4">Rekomendasi Wisata di </h3>
      <Carousel />
      <div className="my-5">
        <h3 className="h3 my-3 mx-4">Pilih sesuai kebutuhanmu</h3>
        <div className="row my-3">
          <div className="col-sm-12 col-md-6 col-lg-6 px-4">
            <Link href="user/search-guide">
              <Card
                icons={<FiUsers size="4rem" color="white" />}
                title="Cari Pemandu Wisata"
                desc="Temukan pemandu wisata andalanmu
                disini!"
              />
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6" />
        </div>
      </div>
    </Layout>
  );
}

export default UserHomePage;
