import React, { useState, useEffect } from "react";
import Image from "next/image";
// import Link from 'next/link';
import Logobig from "../../../public/images/logo-big.png";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import Cookies from "js-cookie";

export default function index() {
  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const [input, setInput] = useState(false);

  const handleChange = async (e) => {
    await setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/auth/admin`;

    try {
      const response = await axios({
        url: api,
        method: "POST",
        data: {
          email: input.email,
          password: input.password,
        },
      });
      await Cookies.set("pramunesiaAppToken", response.data.token);
      await Cookies.set("pramunesiaIdUser", response.data.id);
      await Cookies.set("pramunesiaRole", "admin");

      MySwal.fire({
        position: "center",
        icon: "success",
        title: `${"Login successfully"}`,
        showConfirmButton: false,
        timer: 1500,
      });
      router.replace("/admin/beranda");
    } catch (error) {
      console.log(error);
      MySwal.fire({
        position: "center",
        icon: "error",
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
          <Image src={Logobig} width={500} height={450} alt="logo big" />
        </div>
      </div>
      <div className="col-lg-6 bg-firefly py-4 px-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="content text-white">
            <div className="text-center mb-5">
              <h6>Masuk sebagai Admin</h6>
              <h3 className="my-5">Selamat Datang, Admin!</h3>
            </div>
            <div className="row px-1">
              <form method="post" onSubmit={handleLogin}>
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
            {/* <div className="text-center my-5">
              <p>
                <span>
                  <Link href="/login-wisatawan">
                    Masuk sebagai Wisatawan
                  </Link>
                </span>
              </p>
              <p>atau</p>
              <p>
                <span>
                  <Link href="/regist-tour-guide">
                    Masuk Sebagai Pemandu Wisata
                  </Link>
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
