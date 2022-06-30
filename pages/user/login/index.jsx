import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/router';
import Logobig from '../../../public/images/logo-big.png';

export default function index() {
  console.log(process.env.NEXT_PUBLIC_ENDPOINT);
  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const [input, setInput] = useState(false);

  const handleChange = async (e) => {
    await setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/auth`;

    try {
      const response = await axios({
        url: api,
        method: 'POST',
        data: {
          email: input.email,
          password: input.password,
        },
      });
      await Cookies.set('pramunesiaAppToken', response.data.token);
      await Cookies.set('pramunesiaIdUser', response.data.id);
      await Cookies.set('pramunesiaRole', 'wisatawan');

      MySwal.fire({
        position: 'center',
        icon: 'success',
        title: `${'Login successfully'}`,
        showConfirmButton: false,
        timer: 1500,
      });
      router.replace('/user/choose-destination');
    } catch (error) {
      MySwal.fire({
        position: 'center',
        icon: 'error',
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  console.log(input);
  return (
    <>
      <Head>
        <title>Login Wisatawan | Pramunesia</title>
      </Head>
      <div className="row vh-100 w-100">
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-center h-100">
            <Image src={Logobig} width={500} height={450} alt="logo big" />
          </div>
        </div>
        <div className="col-lg-6 bg-firefly py-4 px-md-4 px-sm-0">
          <div className="d-flex justify-content-center align-items-center">
            <div className="content text-white">
              <div className="text-center mb-5">
                <h6>Masuk</h6>
                <h3 className="my-4">Selamat Datang</h3>
                <p>Masuk Sekarang dan Mulai perjalanan Anda bersama kami</p>
              </div>
              <div className="row px-1">
                <form onSubmit={handleLogin} method="POST">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Masukan Email"
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
                      name="password"
                      placeholder="Masukan Password"
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
                    <Link href="/guide/login">
                      Masuk sebagai Pemandu Wisata
                    </Link>
                  </span>
                </p>
                <p className="mt-4">Belum punya akun?</p>
                <p>
                  <span>
                    <Link href="/user/registrasi">Registrasi Sekarang</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
