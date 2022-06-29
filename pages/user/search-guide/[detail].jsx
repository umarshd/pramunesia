import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import axios from "axios";
import Cookies from "js-cookie";
import Navigation from "../../../components/afterlogin/navbar";

export default function detail() {
  const router = useRouter();
  const { detail } = router.query;
  console.log(detail);

  const [guide, setGuide] = useState(false);

  const getGuide = async (e) => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/guides/${detail}`;

    try {
      const response = await axios({
        url: api,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("pramunesiaAppToken")}`,
        },
      });
      await setGuide(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(guide);

  useEffect(() => {
    if (detail) {
      getGuide();
    }
  }, [detail]);

  return (
    <div className="container mx-auto">
      <Navigation />
      <div className="d-flex flex-column justify-content-center align-items-center bg-firefly p-3 soft-shadow rounded">
        <div className="rounded-circle overflow-hidden soft-shadow border border-5">
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            width="100"
            height="100"
          />
        </div>
        <h4 className="text-center py-2 pt-4 text-white">
          {guide.name} <span className="fw-light">{guide.email}</span>
        </h4>
        <h6 className="text-center text-white">Harga : 300.000/Hari</h6>
        <p className="text-center text-white">{guide.noTelp}</p>
        <p className="text-center text-white">
          {guide.alamat}, {guide.city} {guide.province}
        </p>
        <div className="mt-3">
          <button
            type="button"
            className="btn-orange"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Pesan
          </button>
        </div>
        {/* modal */}
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered mx-auto">
            <div className="modal-content">
              <div className="modal-body">
                <div className="mb-4">
                  <h4 className="text-center">
                    Apakah Kamu Sudah Yakin Ingin Melakukan Pemesanan?
                  </h4>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn-abu me-3"
                    data-bs-dismiss="modal"
                  >
                    Kembali
                  </button>
                  <button
                    type="button"
                    className="btn-orange"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal2"
                  >
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        {/* modal */}
        <div id="myModal2" className="modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered mx-auto">
            <div className="modal-content">
              <div className="modal-body">
                <div className="mb-4">
                  <h4 className="text-center">
                    Terimakasih Telah Melakukan Pemesanan!
                  </h4>
                  <p className="text-center">
                    Silahkan menunggu pemandu wisata kami menghubungimu ya!
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn-orange"
                    data-bs-dismiss="modal"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
      </div>
      <div className="row gap-0 mt-5 bg-firefly rounded text-center pb-5 mb-5">
        <h4 className="mb-2 text-white mt-3">Sertifikat</h4>
        <div className="col-lg-4 mt-3">
          <div className=" bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">
            Sertifikat 1
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className=" bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">
            Sertifikat 1
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className=" bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">
            Sertifikat 1
          </div>
        </div>
      </div>
    </div>
  );
}
