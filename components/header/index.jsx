import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { FiUser, FiUserPlus, FiLogOut } from 'react-icons/fi';
import logoutUser from '../../pages/auth/logoutUser';
import Navlogo from '../../public/nav-brand.png';

export default function Header() {
  const router = useRouter();
  const pramuClickHandler = () => {
    router.push('/guide/registrasi');
  };
  const wisatawanClickHandler = () => {
    router.push('/user/registrasi');
  };
  const loginUserHandler = () => {
    router.push('/user/login');
  };
  const [isLogin, setIsLogin] = useState(false);

  const hasBeenLogin = async () => {
    try {
      if (Cookies.get('pramunesiaAppToken')) {
        await setIsLogin(true);
      } else {
        await setIsLogin(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(isLogin);

  useEffect(() => {
    if (Cookies.get('pramunesiaAppToken')) {
      hasBeenLogin();
    }
  });
  return (
    <nav className="navbar navbar-expand-md">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navToggler"
        aria-controls="navToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="d-md-none">
        <h1 className="h1 text-uppercase text-orange">Pramunesia</h1>
      </div>
      {isLogin ? (
        <div className="dropdown d-md-none ms-1">
          <a
            className="nav-link dropdown-toggle"
            id="dropdownMenu"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FiUser size={36} />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
            aria-labelledby="dropdownMenu"
          >
            <li>
              <Link href="/user/profile">
                <a className="dropdown-item">
                  <FiUserPlus size={24} />
                  {' '}
                  Akun
                </a>
              </Link>
            </li>
            <li>
              <a className="dropdown-item text-danger" onClick={logoutUser}>
                <FiLogOut size={24} />
                {' '}
                Keluar
              </a>
            </li>
          </ul>
        </div>
      ) : null }
      <a className="navbar-brand d-none d-md-block" href="#d">
        <Image src={Navlogo} width={65} height={60} alt="navbar logo" />
      </a>
      <div
        className="collapse navbar-collapse align-items-center"
        id="navToggler"
      >
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link active" aria-current="page">
                Beranda
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/tentang-kami">
              <a className="nav-link">Tentang Kami</a>
            </Link>
          </li>
          {isLogin ? (
            <div className="d-none d-sm-none d-md-block d-flex justify-content-center align-items-center py-auto">
              <li className="nav-item dropdown-center">
                <a
                  className="nav-link dropdown-toggle"
                  id="dropdownMenu"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FiUser size={24} />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenu"
                >
                  <li>
                    <Link href="/user/profile">
                      <a className="dropdown-item">
                        <FiUserPlus size={24} />
                        {' '}
                        Akun
                      </a>
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item text-danger"
                      onClick={logoutUser}
                    >
                      <FiLogOut size={24} />
                      {' '}
                      Keluar
                    </button>
                  </li>
                </ul>
              </li>
            </div>
          ) : null}
        </ul>
        <div
          className="modal fade mx-auto"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered mx-auto">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Pilih Akun
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="d-block">
                  <div
                    className="card shadow-card mb-3"
                    onClick={wisatawanClickHandler}
                    data-bs-dismiss="modal"
                  >
                    <div className="card-body">
                      <h5 className="card-title h1 text-light mb-2">
                        Wisatawan
                      </h5>
                      <p className="card-text text-light">
                        Untuk Wisatawan
                      </p>
                    </div>
                  </div>
                  <div
                    className="card shadow-card"
                    onClick={pramuClickHandler}
                    data-bs-dismiss="modal"
                  >
                    <div className="card-body">
                      <h5 className="card-title h1 text-light mb-2">
                        Pemandu Wisata
                      </h5>
                      <p className="card-text text-light">
                        Untuk Pemandu Wisata
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isLogin ? null : (
          <div className="d-flex">
            <button
              className="btn-abu me-3"
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              data-backdrop="false"
            >
              Registrasi
            </button>
            <button
              className="btn-orange"
              type="submit"
              onClick={loginUserHandler}
            >
              Masuk
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
