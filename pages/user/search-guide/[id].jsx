import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navigation from '../../../components/afterlogin/navbar';

export async function getStaticPaths() {
  const res = await fetch('https://dummyapi.io/data/v1/user', {
    headers: {
      'Content-Type': 'application/json',
      'app-id': '62aed33d9e68d01b5b186d7f',
    },
  });
  const dataUsers = await res.json();
  const { data } = await dataUsers;
  const paths = data.map((user) => ({
    params: { id: `${user.id}` },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'app-id': '62aed33d9e68d01b5b186d7f',
    },
  });
  const guide = await res.json();
  return {
    props: {
      guide,
    },
  };
}

function DetailTourGuide({ guide }) {
  const router = useRouter();
  const okButtonHandler = () => {
    router.push('/user/riwayat-pemesanan');
  };
  return (
    <div className="container mx-auto">
      <Navigation />
      <div className="d-flex flex-column justify-content-center align-items-center bg-soft-peace p-3 soft-shadow rounded">
        <div className="rounded-circle overflow-hidden soft-shadow border border-5">
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            width="100"
            height="100"
          />
        </div>
        <h4 className="text-center">
          {guide.firstName}
          {' '}
          <span className="fw-light">{guide.email}</span>
        </h4>
        <p>{guide.gender}</p>
        <p>{guide.phone}</p>
        <p>
          {guide.location.city}
          ,
          {' '}
          {guide.location.state}
          {' '}
          {guide.phone}
        </p>
        <div className="mt-3">
          <button type="button" className="btn-orange" data-bs-toggle="modal" data-bs-target="#myModal">
            Pesan
          </button>
        </div>
        {/* modal */}
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered mx-auto">

            <div className="modal-content">
              <div className="modal-body">
                <div className="mb-4">
                  <h4 className="text-center">
                    Apakah Kamu Sudah Yakin
                    Ingin Melakukan
                    Pemesanan?
                  </h4>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn-abu me-3" data-bs-dismiss="modal">Kembali</button>
                  <button type="button" className="btn-orange" data-bs-toggle="modal" data-bs-target="#myModal2">Pesan</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* modal */}
        {/* modal */}
        <div id="myModal2" className="modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered mx-auto">

            <div className="modal-content">
              <div className="modal-body">
                <div className="mb-4">
                  <h4 className="text-center">
                    Terimakasih  Telah
                    Melakukan Pemesanan!
                  </h4>
                  <p className="text-center">
                    Silahkan menunggu
                    pemandu wisata kami
                    menghubungimu ya!
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn-orange" onClick={okButtonHandler} data-bs-dismiss="modal">OK</button>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* modal */}
      </div>
      <div className="row gap-0 mt-5">
        <div className="col-lg-3 col-md-3 col-sm-12 p-0 mb-3">
          <div className=" d-flex justify-content-center flex-column align-items-center bg-soft-peace soft-shadow rounded h-100 p-4">
            <h4 className="mb-2">Sertifikat</h4>
            <div className="d-flex justify-content-center flex-md-column align-items-center gap-2 h-100 w-100">
              <div className="col bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">Sertifikat 1</div>
              <div className="col bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">Sertifikat 2</div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 p-0 ms-auto">
          <div className="d-flex flex-column">
            <div className="col bg-soft-peace p-3 soft-shadow rounded">
              <div className="d-flex flex-column">
                <div className="col">
                  <div className="d-flex gap-2 mb-2">
                    <Image
                      src="https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png"
                      width="45"
                      height="30"
                    />
                    <div className="">
                      <h5>{guide.firstName}</h5>
                      <p>Lokasi wisata bersama @wisatawan</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita deserunt cumque ex quisquam ut, provident aliquam nulla
                    debitis ducimus saepe ea reprehenderit nesciunt placeat modi
                    sint excepturi sapiente possimus dolor veritatis dolorum aperiam
                    magnam necessitatibus temporibus! Dolores cumque nihil
                    cupiditate?
                  </p>
                </div>
              </div>
            </div>
            <div className="col bg-soft-peace p-3 soft-shadow rounded mt-3">
              <div className="d-flex flex-column">
                <div className="col">
                  <div className="d-flex gap-2 mb-2">
                    <Image
                      src="https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png"
                      width="45"
                      height="30"
                    />
                    <div className="">
                      <h5>{guide.firstName}</h5>
                      <p>Lokasi wisata bersama @wisatawan</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita deserunt cumque ex quisquam ut, provident aliquam nulla
                    debitis ducimus saepe ea reprehenderit nesciunt placeat modi
                    sint excepturi sapiente possimus dolor veritatis dolorum aperiam
                    magnam necessitatibus temporibus! Dolores cumque nihil
                    cupiditate?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTourGuide;
