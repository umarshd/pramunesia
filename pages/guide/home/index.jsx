import React from "react";
import { FiCalendar, FiBookOpen, FiStar } from "react-icons/fi";
import Layout from "../../../components/afterlogin/layout";
import Card from "../../../components/afterlogin/home-card";
import Heroimg from "../../../public/images/heropic.png";
import Image from "next/image";

function GuideHomePage() {
  return (
    <Layout pageTitle="user-home-guide">
      <h2 className="mb-4 text-center">Selamat Datang, Pemandu Wisata!</h2>
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <div className="my-auto py-5 pt-3 d-flex justify-content-center flex-column align-items-center">
          <Image src={Heroimg} width={600} height={400} alt="hero image" />
        </div>
      </div>
      <div className="my-1">
        <h3 className="h3 pt-1">Pilih sesuai kebutuhanmu</h3>
        <div className="row my-3">
          <div className="col-12 mb-4 ">
            <Card
              icons={<FiCalendar size="4rem" color="white" />}
              title="Jadwal Bertugas"
              desc="Lihat jadwal bertugasmu
          disini!"
            />
          </div>
          <div className="col-12 col-8 mb-4">
            <Card
              icons={<FiBookOpen size="4rem" color="white" />}
              title="Surat Tugas"
              desc="Ajukan permohonan surat tugasmu
          disini!"
            />
          </div>
          <div className="col-12 col-8 mb-4 d-flex justify-content-start">
            <Card
              icons={<FiStar size="4rem" color="white" />}
              title="Surat Rekomendasi Sertifikasi"
              desc="Ajukan permohonan surat rekomendasi sertifikasimu
          disini!"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GuideHomePage;
