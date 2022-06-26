import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "../../../components/afterlogin/navbar";
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
    <div className="container mx-auto">
      <Navigation />
      <h2 className="text-center mb-4">Daftar Pemandu Wisata Cirebon</h2>
      <div className="row">
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
  );
}
