import React from "react";
import { FiUsers } from "react-icons/fi";
import { useRouter } from "next/router";
import Carousel from "../../../components/afterlogin/carousel";
import Card from "../../../components/afterlogin/home-card";
import Layout from "../../../components/afterlogin/layout";
import sessionUserLogin from "../../auth/sessionUserLogin";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";

function UserHomePage() {
  sessionUserLogin();
  const router = useRouter();
  const searchHandler = () => {
    router.push("/user/search-guide");
  };

  const [city, setCity] = useState(false);

  const getCity = async () => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/cities/${Cookies.get(
      "idCity"
    )}`;

    try {
      const response = await axios({
        url: api,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get("pramunesiaAppToken")}`,
        },
      });

      await setCity(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getCity();
  }, []);

  return (
    <Layout pageTitle="user-home">
      <h3 className="h3 my-3">
        Rekomendasi Wisata di {city ? city.name : null}{" "}
      </h3>
      <Carousel />
      <div className="my-5">
        <h3 className="h3 my-3">Pilih sesuai kebutuhanmu</h3>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 ps-0">
            <div onClick={searchHandler}>
              <Card
                icons={<FiUsers size="4rem" color="white" />}
                title="Cari Pemandu Wisata"
                desc="Temukan pemandu wisata andalanmu
                disini!"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6" />
        </div>
      </div>
    </Layout>
  );
}

export default UserHomePage;
