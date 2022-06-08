import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logobig from '../../public/images/logo-big.png';

function RegistTourGuide({ data }) {
  return (
    <div className="row vh-100 vw-100">
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
              <p>
                Untuk mendapatkan
                pengalaman terbaik di Pramunesia
              </p>
              <p className="mb-3">
                Sudah punya akun?
                {' '}
                <span>
                  <Link href="/login-tour-guide">
                    Masuk sekarang
                  </Link>
                </span>
              </p>
            </div>
            <div className="row px-1">
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
                  <button type="submit" className="btn-orange">Registrasi</button>
                </div>
              </form>
            </div>
            <div className="text-center">
              <p>
                Dengan menekan tombol Registrasi, Anda setuju
                {' '}
                <br />
                {' '}
                dengan
                {' '}
                <span><a href="/">Syarat & Ketentuan</a></span>
                {' '}
                kami
              </p>
            </div>
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

export default RegistTourGuide;
