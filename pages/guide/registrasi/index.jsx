import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logobig from "../../../public/images/logo-big.png";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const [input, setInput] = useState(false);

  const handleChange = async (e) => {
    await setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/guides`;

    try {
      const response = await axios({
        method: "POST",
        url: api,
        data: input,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User has been created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/guide/login");
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="row vh-100">
      <div className="col-lg-6 ">
        <div className="d-flex justify-content-center align-items-center h-100">
          <Image src={Logobig} width={500} height={450} alt="logo big" />
        </div>
      </div>
      <div className="col-lg-6 bg-firefly py-4 px-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="content text-white">
            <div className="text-center mb-5">
              <h6>Registrasi Pemandu Wisata</h6>
              <h3 className="my-4">Buat Akunmu!</h3>
              <p>Untuk mendapatkan pengalaman terbaik di Pramunesia</p>
              <p className="mb-3">
                Sudah punya akun?{" "}
                <span>
                  <Link href="/guide/login">Masuk sekarang</Link>
                </span>
              </p>
            </div>
            <div className="row px-1">
              <form method="post" onSubmit={handleRegister}>
                <div className="mb-3">
                  <label htmlFor="lisensi" className="form-label">
                    No. KTA/Lisensi{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lisensi"
                    placeholder="Masukan No. KTA/Lisensi"
                    name="noKta"
                    onChange={handleChange}
                  />
                </div>
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
                    name="noTelp"
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
                    name="alamat"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="provinsi" className="form-label">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="provinsi"
                    placeholder="Masukan Provinsi"
                    name="province"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="kota" className="form-label">
                    Kota
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="kota"
                    placeholder="Masukan Kota"
                    name="city"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="organization" className="form-label">
                    Organisasi/Lembaga/Individu
                  </label>
                  <select
                    className="form-select"
                    aria-label="Pilih "
                    name="status"
                    onChange={handleChange}
                  >
                    <option>Pilih Status</option>
                    <option value="Organisasi">Organisasi</option>
                    <option value="Lembaga">Lembaga</option>
                    <option value="Individu">Individu</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Masukan Password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 mt-5 d-flex justify-content-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
