import React from "react";
import { FiCalendar, FiBookOpen, FiStar } from "react-icons/fi";
import Layout from "../../../components/afterlogin/layout";
import Card from "../../../components/afterlogin/home-card";
import Heroimg from "../../../public/images/heropic.png";
import Image from "next/image";

function GuideHomePage() {
  return (
    <Layout pageTitle="user-home-guide">
      <h2 className="mb-4 text-center mt-3">Selamat Datang, Pemandu Wisata!</h2>
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <div className="my-auto py-5 pt-3 d-flex justify-content-center flex-column align-items-center">
          <Image src={Heroimg} width={600} height={400} alt="hero image" />
        </div>
      </div>
      <div className="my-1">
        <h3 className="h3 pt-4 text-center p-3">Pilih sesuai kebutuhanmu</h3>
        <hr />
        <div className="row my-3">
          <div className="col-lg-4 mb-4 d-flex justify-content-center">
            <Card
              icons={<FiCalendar size="4rem" color="white" />}
              title="Jadwal Bertugas"
              desc="Kamu bisa melihat jadwal bertugasmu
          disini!"
            />
          </div>
          <div className="col-lg-4 mb-4 d-flex justify-content-center">
            <Card
              icons={<FiBookOpen size="4rem" color="white" />}
              title="Surat Tugas"
              desc="Ajukan permohonan surat tugasmu
          disini!"
            />
          </div>
          <div className="col-lg-4 mb-4 d-flex justify-content-center">
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
