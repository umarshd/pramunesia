import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import Head from "next/head";
import Cookies from "js-cookie";
import axios from "axios";
import sessionUserLogin from "../../auth/sessionUserLogin";
import Navigation from "../../../components/afterlogin/navbar";

export default function index() {
  sessionUserLogin();
  const [user, setUser] = useState(null);

  const getDataUser = async (e) => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/users/${Cookies.get(
      "pramunesiaIdUser"
    )}`;

    try {
      const response = await axios({
        headers: {
          authorization: `Bearer ${Cookies.get("pramunesiaAppToken")}`,
        },
        url: api,
        method: "GET",
      });
      return await setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <Head>
        <title>Pramunesia | User Profile</title>
      </Head>
      <div className="container mx-auto">
        <Navigation />
        <div className="bg-firefly p-4 rounded">
          <div className="row h-60">
            <div className="col-lg-6 col-md-6 col-sm-12 bg-soft-peace">
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <div className="rounded-circle overflow-hidden">
                  <Image
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    width="100"
                    height="100"
                  />
                </div>
                <h4>Halo, {user ? user.name : "User"}</h4>
                <span>
                  <Link
                    href={user ? `/user/profile/${user.id}` : "/user/profile"}
                  >
                    Lihat Profil
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bg-white p-4">
              <div className="">
                <h3 className="text-center">Akun</h3>
                <div className="mt-4">
                  <div className="border border-secondary border-start-0 border-end-0 p-4">
                    <Link href="/">
                      <div className="d-flex align-items-center justify-content-between">
                        <h4> Pemesanan </h4>
                        <button
                          type="button"
                          className="btn-circle btn-sm d-flex align-items-center"
                        >
                          <FiChevronRight size="1.25rem" color="white" />
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
