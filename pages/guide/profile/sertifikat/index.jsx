import Image from "next/image";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Cookies from "js-cookie";
import axios from "axios";

import Navigation from "../../../../components/afterlogin/navbar";

export default function index() {
  const router = useRouter();
  const [guide, setGuide] = useState(false);

  const getGuide = async (e) => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/guides/${Cookies.get(
      "pramunesiaIdUser"
    )}`;

    try {
      const response = await axios({
        url: api,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("pramunesiaAppTokenGuide")}`,
        },
      });

      await setGuide(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuide();
  });
  return (
    <div className="container mx-auto">
      <Navigation />
      <div className="d-flex flex-column justify-content-center align-items-center bg-soft-peace p-3 soft-shadow rounded mb-5">
        <div className="rounded-circle overflow-hidden soft-shadow border border-5">
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            width="100"
            height="100"
          />
        </div>
        <h4 className="text-center">
          {guide ? guide.name : null}{" "}
          <span className="fw-light">{guide ? guide.email : null}</span>
        </h4>
        <p>{guide ? guide.noTelp : null}</p>
        <p>
          {guide ? guide.alamat : null}, {guide ? guide.city : null}{" "}
          {guide ? guide.province : null}
        </p>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center pt-5">
          <div className="">
            <h4 className="text-center">Data Sertifikat</h4>
          </div>
          <div className="">
            <button type="button" className="btn-orange">
              Unggah
            </button>
          </div>
        </div>
        <div className="row gap-0 mt-2 bg-firefly rounded text-center pb-5 mb-5">
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
    </div>
  );
}
