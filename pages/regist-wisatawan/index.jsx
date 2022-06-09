
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logobig from "../../public/images/logo-big.png";
import Head from "next/head";
import axios from "axios";
import Router from "next/router";
=======
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logobig from "../../public/images/logo-big.png";

function RegistWisatawan() {
  const [dataWisata, setDataWisatawan] = useState(false);
  const [input, setInput] = useState(false);

  const getDataWisatawan = async () => {
    const api = `http://localhost:3010/users`;
    try {
      const respnse = await axios({
        url: api,
        method: "GET",
      });
      console.log(respnse);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (e) => {
    await setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRegisterWisatawan = async (e) => {
    e.preventDefault();

    console.log(input);
    const api = `http://localhost:3010/users`;

    try {
      const response = await axios({
        url: api,
        method: "POST",
        data: {
          name: input.name,
          email: input.email,
          address: input.address,
          telp: input.telp,
          password: input.password,
        },
      });
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataWisatawan();
  }, []);
  return (
    <>
      <Head>
        <title>Pramunesia | Registrasi Wisatawan</title>
      </Head>
      <div className="row vh-100 w-100">
        <div className="col-lg-6 d-none d-xl-block d-xxl-none d-md-block">
          <div className="d-flex justify-content-center align-items-center h-100">
            <Image src={Logobig} width={500} height={450} alt="logo big" />
          </div>
        </div>

        <div className="col-lg-6 bg-firefly py-4">
          <div className="d-flex justify-content-center align-items-center">
            <div className="content text-white">
              <div className="text-center">
                <h6>Registrasi Wisatawan</h6>
                <h3 className="my-4">Buat Akunmu!</h3>
                <p>Untuk mendapatkan pengalaman terbaik di Pramunesia</p>
                <p className="mb-3">
                  Sudah punya akun?{" "}
                  <span>
                    <Link href="/login-wisatawan">Masuk sekarang</Link>
                  </span>
                </p>
              </div>
              <div className="row">
                <form onSubmit={handleRegisterWisatawan}>
                  <div className="mb-3">
                    <label htmlFor="namaLengkap" className="form-label">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="namaLengkap"
                      placeholder="Masukan Nama Lengkap"
                      name="name"
                      onChange={handleChange}
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
                      placeholder="Masukan Email"
                      name="email"
                      onChange={handleChange}
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
                      placeholder="Masukan No Telepon"
                      name="telp"
                      onChange={handleChange}
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
                      placeholder="Masukan Alamat"
                      name="address"
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 d-flex justify-content-center">
                    <button type="submit" className="btn-orange">
                      Registrasi
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-center">
                <p>
                  Dengan menekan tombol Registrasi, Anda setuju <br /> dengan{" "}
                  <span>
                    <a href="/">Syarat & Ketentuan</a>
                  </span>{" "}
                  kami
                </p>
      </div>
      <div className="col-lg-6 bg-firefly py-4 px-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="content text-white">
            <div className="text-center mb-5">
              <h6>Registrasi Wisatawan</h6>
              <h3 className="my-4">Buat Akunmu!</h3>
              <p>Untuk mendapatkan pengalaman terbaik di Pramunesia</p>
              <p className="mb-3">
                Sudah punya akun?{" "}
                <span>
                  <Link href="/login-wisatawan">Masuk sekarang</Link>
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6 pr-0 ml-0 bg-firefly py-4">
            <div className="container px-lg-5">
              <div className="content text-white">
                <div className="text-center">
                  <h6>Registrasi Wisatawan</h6>
                  <h3 className="my-4">Buat Akunmu!</h3>
                  <p>Untuk mendapatkan pengalaman terbaik di Pramunesia</p>
                  <p className="mb-3">
                    Sudah punya akun?{" "}
                    <span>
                      <Link href="/login-wisatawan">Masuk sekarang</Link>
                    </span>
                  </p>
                </div>
                <div className="row">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="namaLengkap" className="form-label">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaLengkap"
                        placeholder="Masukan Nama Lengkap"
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
                        placeholder="Masukan Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="noTelepon" className="form-label">
                        No Telepon
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="noTelepon"
                        placeholder="Masukan No Telepon"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="alamat" className="form-label">
                        Alamat
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="alamat"
                        placeholder="Masukan Alamat"
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
                      />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                      <button type="submit" className="btn-orange">
                        Registrasi
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mb-3 mt-5 d-flex justify-content-center">
                  <button type="submit" className="btn-orange">
                    Registrasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistWisatawan;
