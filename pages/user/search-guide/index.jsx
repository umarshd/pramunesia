import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/afterlogin/layout";
import GuideList from "../../../components/afterlogin/guide-list-card";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function index() {
  const router = useRouter();

  const [guides, setGuides] = useState(false);

  const getGuides = async (e) => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/guides`;

    try {
      const response = await axios({
        method: "GET",
        url: api,
        headers: {
          authorization: `Bearer ${Cookies.get("pramunesiaAppToken")}`,
        },
      });

      await setGuides(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuides();
  }, []);

  return (
    <Layout pageTitle="Search Guide">
      <div className="container mx-auto">
        <h2 className="text-center mb-4">Daftar Pemandu Wisata</h2>
        <div className="row justify-content-center my-5">
          <div className="col-lg-3 mb-3">
            <label htmlFor="">Tanggal Keberangkatan</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-lg-3">
            <label htmlFor="">Tanggal Berakhir</label>
            <input type="date" className="form-control" />
          </div>
        </div>
        <div className="row mb-5">
          {guides
            ? guides.map((guide) => (
                <div
                  className="col-lg-6 col-md-6 col-sm-12"
                  onClick={() => router.push(`/user/search-guide/${guide.id}`)}
                  key={guide.id}
                >
                  <GuideList
                    picture="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    namaPemandu={guide.name}
                    title={guide.city}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </Layout>
  );
}
