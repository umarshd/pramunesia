import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/afterlogin/navbar';

function LookProfileGuide({ data }) {
  return (
    <div className="container mx-auto">
      <Navigation />
      <h3 className="text-center mb-3">Profile</h3>
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
            <h4>Nama Pemandu Wisata</h4>
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
                <label htmlFor="lisensi" className="form-label">No. KTA/Lisensi </label>
                <input type="text" className="form-control" id="lisensi" placeholder="Masukan No. KTA/Lisensi" />
              </div>
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
                <input type="text" className="form-control" id="noTelepon" placeholder="Masukan No Telepon" />
              </div>
              <div className="mb-3">
                <label htmlFor="alamat" className="form-label">Alamat</label>
                <input type="text" className="form-control" id="alamat" placeholder="Masukan Alamat" />
              </div>
              <div className="mb-3">
                <label htmlFor="provinsi" className="form-label">Provinsi</label>
                <select className="form-select" aria-label="Default select example" id="provinsi" defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled className="text-muted">Masukan Provinsi</option>
                  {data.map((prov) => (
                    <option key={prov.id}>{prov.nama}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="kota" className="form-label">Kota</label>
                <select className="form-select" aria-label="Default select example" id="kota" defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled className="text-muted">Masukan Kota</option>
                  {data.map((prov) => (
                    <option key={prov.id}>{prov.nama}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="organization" className="form-label">Organisasi/Lembaga/Individu</label>
                <input type="text" className="form-control" id="organization" placeholder="Masukan Organisasi/Lembaga" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Masukan Email" />
              </div>
              <div className="mb-3 mt-5 d-flex justify-content-center">
                <button type="submit" className="btn-orange">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const resp = await fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi');
  const dataProv = await resp.json();
  return {
    props: {
      data: dataProv.provinsi,
    },
  };
}

export default LookProfileGuide;
