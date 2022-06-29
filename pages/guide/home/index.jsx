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
        <h3 className="h3 pt-4 text-center p-3">Pilih Sesuai Kebutuhanmu</h3>
        <hr />
        <div className="row my-3">
          <div className="col-12 col-xl-4 mb-4 d-flex justify-content-center">
            <div className="card shadow-card" style={{ width: "100%" }}>
              <div
                className="row d-flex align-items-center justify-content-center"
                style={{ height: "8rem" }}
              >
                <div className="col-2">
                  <FiCalendar size="4rem" color="white" />
                </div>
                <div className="col-10">
                  <div className="card-body">
                    <h5 className="card-title text-white">Jadwal Bertugas</h5>
                    <small className="card-text text-white">
                      Lihat jadwal bertugasmu disini!
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 mb-4 d-flex justify-content-center">
            <div className="card shadow-card" style={{ width: "100%" }}>
              <a
                href="https://forms.gle/HDTQXceAD47qiWNi9"
                className="nav-link"
              >
                <div
                  className="row d-flex align-items-center justify-content-center"
                  style={{ height: "8rem" }}
                >
                  <div className="col-2">
                    <FiBookOpen size="4rem" color="white" />
                  </div>
                  <div className="col-10">
                    <div className="card-body">
                      <h5 className="card-title text-white">Surat Tugas</h5>
                      <small className="card-text text-white">
                        Ajukan permohonan surat tugasmu disini!
                      </small>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-12 col-xl-4 mb-4 d-flex justify-content-center">
            <div className="card shadow-card" style={{ width: "100%" }}>
              <a
                href="https://forms.gle/i6SMZzL9gdWasR7u9"
                className="nav-link"
              >
                <div
                  className="row d-flex align-items-center justify-content-center"
                  style={{ height: "8rem" }}
                >
                  <div className="col-2">
                    <FiStar size="4rem" color="white" />
                  </div>
                  <div className="col-10">
                    <div className="card-body">
                      <h5 className="card-title text-white">
                        Surat Rekomendasi Sertifikasi
                      </h5>
                      <small className="card-text text-white">
                        Ajukan permohonan surat rekomendasi sertifikasimu
                        disini!
                      </small>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GuideHomePage;
