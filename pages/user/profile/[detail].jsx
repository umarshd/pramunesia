import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import Navigation from "../../../components/afterlogin/navbar";
import sessionUserLogin from "../../auth/sessionUserLogin";

export default function detail() {
  sessionUserLogin();
  const router = useRouter();
  const { detail } = router.query;

  const [user, setUser] = useState(false);

  const getUser = async (e) => {
    const api = await `${process.env.NEXT_PUBLIC_ENDPOINT}/users/${detail}`;

    try {
      const response = await axios({
        method: "GET",
        url: api,
        headers: {
          authorization: `Bearer ${Cookies.get("pramunesiaAppToken")}`,
        },
      });
      await setUser(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (detail) {
      getUser();
    }
  }, [detail]);
  return (
    <div className="container mx-auto">
      <Navigation />
      <h3 className="text-center pb-5">Profil</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex flex-column justify-content-center align-items-center h-75  bg-soft-peace rounded shadow-custom-2">
            <div className="rounded-circle overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                width="100"
                height="100"
              />
            </div>
            <h4>{user ? user.name : ""}</h4>
            <span>
              <Link href="/">Ubah Foto Profil</Link>
            </span>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ms-auto rounded">
          <div className="p-4 text-white bg-firefly rounded">
            <form>
              <div className="mb-3">
                <label htmlFor="namaLengkap" className="form-label">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="namaLengkap"
                  placeholder="Nama Lengkap"
                  name="name"
                  defaultValue={user ? user.name : ""}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  defaultValue={user ? user.email : ""}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="alamat" className="form-label">
                  Alamat
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="alamat"
                  placeholder="Alamat"
                  name="address"
                  defaultValue={user ? user.address : ""}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="noTelepon" className="form-label">
                  No Telepon
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="noTelepon"
                  placeholder="No Telepon"
                  name="telp"
                  defaultValue={user ? user.telp : ""}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="jenisKelamin" className="form-label">
                  Jenis Kelamin
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="jenisKelamin"
                  placeholder="Jenis Kelamin"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Masukan Email"
                  name="password"
                />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button type="submit" className="btn-orange">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
