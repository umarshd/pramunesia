import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/afterlogin/navbar';

function LookProfileUser() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <h3 className="text-center mb-3">Profil</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex flex-column justify-content-center align-items-center h-75  bg-soft-peace rounded">
            <div className="rounded-circle overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                width="100"
                height="100"
              />
            </div>
            <h4>Nama Wisatawan</h4>
            <span>
              <Link href="/">
                Ubah Foto Profil
              </Link>
            </span>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ms-auto rounded">
          <div className="p-4 text-white bg-firefly rounded">
            <form>
              <div className="mb-3">
                <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" id="namaLengkap" placeholder="Nama Lengkap" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="alamat" className="form-label">Alamat</label>
                <input type="text" className="form-control" id="alamat" placeholder="Alamat" />
              </div>
              <div className="mb-3">
                <label htmlFor="noTelepon" className="form-label">No Telepon</label>
                <input type="text" className="form-control" id="noTelepon" placeholder="No Telepon" />
              </div>
              <div className="mb-3">
                <label htmlFor="jenisKelamin" className="form-label">Jenis Kelamin</label>
                <input type="text" className="form-control" id="jenisKelamin" placeholder="Jenis Kelamin" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Masukan Email" />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button type="submit" className="btn-orange">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookProfileUser;
