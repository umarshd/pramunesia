import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

import axios from 'axios';
import Cookies from 'js-cookie';
import Logobig from '../../../public/images/logo-big.png';

export default function index() {
  const router = useRouter();
  const [input, setInput] = useState(false);

  const handleChange = async (e) => {
    await setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hanldeLogin = async (e) => {
    e.preventDefault();
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/auth/guide`;

    try {
      const response = await axios({
        method: 'POST',
        url: api,
        data: input,
      });

      await Cookies.set('pramunesiaAppTokenGuide', response.data.token);
      await Cookies.set('pramunesiaIdUser', response.data.id);
      await Cookies.set('pramunesiaRole', 'guide');

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${'Login successfully'}`,
        showConfirmButton: false,
        timer: 1500,
      });

      router.replace('/guide/home');
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="row vh-100 w-100">
      <div className="col-lg-6">
        <div className="d-flex justify-content-center align-items-center h-100">
          <Image src={Logobig} width={500} height={450} alt="logo big" priority />
        </div>
      </div>
      <div className="col-lg-6 bg-firefly py-4 px-md-4 px-sm-0">
        <div className="d-flex justify-content-center align-items-center">
          <div className="content text-white">
            <div className="text-center mb-5">
              <h6>Masuk sebagai Pemandu Wisata</h6>
              <h3 className="my-4">Selamat Datang</h3>
              <p>Masuk Sekarang dan Mulai perjalanan Anda bersama kami</p>
            </div>
            <div className="row px-1">
              <form method="post" onSubmit={hanldeLogin}>
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
                    Masuk
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center">
              <p className="my-3">
                <span>
                  <Link href="/user/login">Masuk sebagai Wisatawan</Link>
                </span>
              </p>
              <p className="mt-4">Belum punya akun?</p>
              <p>
                <span>
                  <Link href="/guide/registrasi">Registrasi Sekarang!</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
