import React from 'react';
import {
  FiCalendar, FiDollarSign, FiBookOpen, FiStar,
} from 'react-icons/fi';
import Layout from '../../components/afterlogin/layout';
import Card from '../../components/afterlogin/home-card';

function UserHomePage() {
  return (
    <Layout pageTitle="user-home-guide">
      <h2 className="mb-4 text-center">Selamat Datang!</h2>
      <div className="my-1">
        <h3 className="h3">Pilih sesuai kebutuhanmu</h3>
        <div className="row my-3">
          <div className="col-sm-12 col-md-6 col-lg-6  mb-4">
            <Card
              icons={<FiCalendar size="4rem" color="white" />}
              title="Jadwal Bertugas"
              desc="Lihat jadwal bertugasmu
          disini!"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6  mb-4">
            <Card
              icons={<FiDollarSign size="4rem" color="white" />}
              title="Pembayaran"
              desc="Lihat transaksi pembayaran
          disini!"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6  mb-4">
            <Card
              icons={<FiBookOpen size="4rem" color="white" />}
              title="Surat Tugas"
              desc="Ajukan permohonan surat tugasmu
          disini!"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6  mb-4">
            <Card
              icons={<FiStar size="4rem" color="white" />}
              title="Surat Rekomendasi Sertifikasi"
              desc="Ajukan permohonan surat rekomendasi sertifikasimu
          disini!"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-4" />
        </div>
      </div>
    </Layout>
  );
}

export default UserHomePage;
