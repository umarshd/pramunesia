import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navigation from "../../../components/afterlogin/navbar";

export async function getStaticPaths() {
  const res = await fetch("https://dummyapi.io/data/v1/user", {
    headers: {
      "Content-Type": "application/json",
      "app-id": "62aed33d9e68d01b5b186d7f",
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
      "Content-Type": "application/json",
      "app-id": "62aed33d9e68d01b5b186d7f",
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
    router.push("/user/riwayat-pemesanan");
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
          {guide.firstName} <span className="fw-light">{guide.email}</span>
        </h4>
        <h6>Harga : 300.000/Hari</h6>
        <p>{guide.phone}</p>
        <p>
          {guide.location.city}, {guide.location.state} {guide.phone}
        </p>
        <div className="mt-3">
          <button
            type="button"
            className="btn-orange"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
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
                    Apakah Kamu Sudah Yakin Ingin Melakukan Pemesanan?
                  </h4>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn-abu me-3"
                    data-bs-dismiss="modal"
                  >
                    Kembali
                  </button>
                  <button
                    type="button"
                    className="btn-orange"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal2"
                  >
                    Pesan
                  </button>
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
                    Terimakasih Telah Melakukan Pemesanan!
                  </h4>
                  <p className="text-center">
                    Silahkan menunggu pemandu wisata kami menghubungimu ya!
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn-orange"
                    onClick={okButtonHandler}
                    data-bs-dismiss="modal"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
      </div>
      <div className="row gap-0 mt-5">
        <div className="col-12 p-0 mb-3">
          <div className=" d-flex justify-content-center flex-column align-items-center bg-soft-peace soft-shadow rounded h-100 p-4">
            <h4 className="mb-2">Sertifikat</h4>
            <div className="d-flex justify-content-center align-items-center gap-2 h-100 w-100">
              <div className=" bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">
                Sertifikat 1
              </div>
              <div className=" bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">
                Sertifikat 2
              </div>
              <div className=" bg-dark-grey d-flex justify-content-center align-items-center p-1 w-100 rounded mh-12rm">
                Sertifikat 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailTourGuide;
