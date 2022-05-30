import React from 'react';
import Image from 'next/image';
import Logobig from '../../public/images/logo-big.png';

function RegistWisatawan() {
  return (
    <div className="row vh-100 w-100">
      <div className="col-lg-6 ">
        <div className="d-flex justify-content-center align-items-center h-100">
          <Image src={Logobig} width={500} height={450} alt="logo big" />
        </div>
      </div>
      <div className="col-lg-6 bg-firefly py-4">
        <div className="d-flex justify-content-center align-items-center">
          <div className="content text-white">
            <div className="text-center">
              <h6>Registrasi Pemandu Wisata</h6>
              <h3 className="my-4">Buat Akunmu!</h3>
              <p>
                Untuk mendapatkan
                pengalaman terbaik di Pramunesia
              </p>
              <p className="mb-3">
                Sudah punya akun?
                {' '}
                <span><a href="/">Masuk sekarang</a></span>
              </p>
            </div>
            <div className="row px-1">
              <form>
                <div className="mb-3">
                  <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
                  <input type="text" className="form-control" id="namaLengkap" placeholder="Masukan Nama Lengkap" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Masukan Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="noTelepon" className="form-label">No Telepon</label>
                  <input type="email" className="form-control" id="noTelepon" placeholder="Masukan No Telepon" />
                </div>
                <div className="mb-3">
                  <label htmlFor="alamat" className="form-label">Alamat</label>
                  <input type="email" className="form-control" id="alamat" placeholder="Masukan Alamat" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Masukan Email" />
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <button type="submit" className="btn-orange">Registrasi</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistWisatawan;
