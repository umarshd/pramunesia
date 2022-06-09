import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logobig from '../../public/images/logo-big.png';

function LoginTouGuide() {
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
              <h6>Masuk sebagai Pemandu Wisata</h6>
              <h3 className="my-4">Selamat Datang</h3>
              <p>
                Masuk Sekarang dan
                Mulai perjalanan Anda bersama kami
              </p>
            </div>
            <div className="row px-1">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Masukan Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Masukan Password" />
                </div>
                <div className="mb-3 mt-5 d-flex justify-content-center">
                  <button type="submit" className="btn-orange">Masuk</button>
                </div>
              </form>
            </div>
            <div className="text-center">
              <p>
                <span>
                  <Link href="/login-wisatawan">
                    Masuk sebagai Wisatawan
                  </Link>
                </span>
              </p>
              <p>Belum punya akun?</p>
              <p>
                <span>
                  <Link href="/regist-tour-guide">
                    Registrasi Sekarang!
                  </Link>
                </span>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginTouGuide;
