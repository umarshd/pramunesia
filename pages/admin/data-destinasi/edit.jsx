import React, { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiDatabase,
  FiUsers,
  FiLogOut,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import BlankUser from "../../../public/images/blank-user.png";

export default function e() {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const router = useRouter();
  const hadlerToggle = () => {
    setToggle(!toggle);
  };
  const hadlerToggle2 = () => {
    setToggle2(!toggle2);
  };
  const logoutHandler = () => {
    router.push("/");
  };
  const batalHandler = () => {
    router.push("/admin/data-destinasi");
  };
  const simpanHandler = () => {
    router.push("/admin/data-destinasi/data");
  };
  return (
    <div>
      {/* logout-modal */}
      <div id="myModal2" className="modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered mx-auto">
          <div className="modal-content">
            <div className="modal-body">
              <div className="mb-4">
                <h4 className="text-center">Apakah Kamu Yakin Ingin Keluar?</h4>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn-abu me-3"
                  data-bs-dismiss="modal"
                >
                  Tidak
                </button>
                <button
                  type="button"
                  className="btn-orange"
                  data-bs-dismiss="modal"
                  onClick={logoutHandler}
                >
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* logout-modal */}
      {/* offcanvasmode */}
      <div className="offcanvas offcanvas-start w-75" id="menu">
        <div className="offcanvas-header">
          <div className="d-flex justify-content-start align-items-center">
            <button
              type="button"
              className="menu-button"
              data-bs-dismiss="offcanvas"
            >
              <FiMenu size="34" />
            </button>
            <h3 className="ms-2 text-orange brand fw-600">PRAMUNESIA</h3>
          </div>
        </div>
        <div className="offcanvas-body">
          <div className="mt-1 admin-profile">
            <Image src={BlankUser} width={60} height={60} />
          </div>
          <div className="mt-2">
            <h6>Halo, Admin</h6>
            <p>Posisi Admin</p>
          </div>
          <hr className="bg-orange border-2 border-top border-danger mt-2" />
          <div className="d-flex flex-column justify-content-start mt-5">
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiHome size="24" />
              <h6 className="ms-2">Beranda</h6>
            </div>
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiDatabase size="24" />
              <h6 className="ms-2">Data Master</h6>
              <button
                type="button"
                className="btn-circle btn-sm d-flex align-items-center ms-auto button-shadow"
                onClick={hadlerToggle2}
              >
                {toggle2 ? (
                  <FiChevronUp size="24" />
                ) : (
                  <FiChevronDown size="24" />
                )}
              </button>
            </div>
            <div className={toggle2 ? "ms-1 mb-3" : "d-none"}>
              <ul>
                <li>
                  {" "}
                  <Link href="/admin/data-pemesanan">Data Pemesanan</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/admin/data-kota">Data Kota</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/admin/data-destinasi">Data Destinasi</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiUsers size="24" />
              <h6 className="ms-2">Manajemen User</h6>
              <button
                type="button"
                className="btn-circle btn-sm d-flex align-items-center ms-auto button-shadow"
                onClick={hadlerToggle}
              >
                {toggle ? (
                  <FiChevronUp size="24" />
                ) : (
                  <FiChevronDown size="24" />
                )}
              </button>
            </div>
            <div className={toggle ? "ms-1 mb-3" : "d-none"}>
              <ul>
                <li>
                  {" "}
                  <a href="/">Wisatawan</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">Pemandu Wisata</a>{" "}
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiLogOut size="24" />
              <a
                role="button"
                className="ms-2 h6"
                data-bs-toggle="modal"
                data-bs-target="#myModal2"
              >
                Keluar
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start align-items-center d-block d-sm-none p-3">
        <button
          type="button"
          className="menu-button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menu"
        >
          <FiMenu size="34" />
        </button>
        <h3 className="m-auto text-orange brand fw-600">PRAMUNESIA</h3>
      </div>
      {/* offcanvasmode */}
      <div className="row min-vh-100">
        <div className="col-sm-12 col-md-4 col-lg-4 bg-soft-peace  d-none d-sm-block p-3">
          <div className="d-flex justify-content-start align-items-center">
            <button type="button" className="menu-button">
              <FiMenu size="34" />
            </button>
            <h3 className="ms-2 text-orange brand fw-600">PRAMUNESIA</h3>
          </div>
          <div className="mt-4">
            <Image src={BlankUser} width={60} height={60} />
          </div>
          <div className="mt-2">
            <h6>Halo, Admin</h6>
            <p>Posisi Admin</p>
          </div>
          <hr className="bg-orange border-2 border-top border-danger mt-2" />
          <div className="d-flex flex-column justify-content-start mt-5">
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiHome size="24" />
              <h6 className="ms-2">Beranda</h6>
            </div>
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiDatabase size="24" />
              <h6 className="ms-2">Data Master</h6>
              <button
                type="button"
                className="btn-circle btn-sm d-flex align-items-center ms-auto button-shadow"
                onClick={hadlerToggle2}
              >
                {toggle2 ? (
                  <FiChevronUp size="24" />
                ) : (
                  <FiChevronDown size="24" />
                )}
              </button>
            </div>
            <div className={toggle2 ? "ms-1 mb-3" : "d-none"}>
              <ul>
                <li>
                  {" "}
                  <Link href="/admin/data-pemesanan">Data Pemesanan</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/admin/data-kota">Data Kota</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/admin/data-destinasi">Data Destinasi</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiUsers size="24" />
              <h6 className="ms-2">Manajemen User</h6>
              <button
                type="button"
                className="btn-circle btn-sm d-flex align-items-center ms-auto button-shadow"
                onClick={hadlerToggle}
              >
                {toggle ? (
                  <FiChevronUp size="24" />
                ) : (
                  <FiChevronDown size="24" />
                )}
              </button>
            </div>
            <div className={toggle ? "ms-1 mb-3" : "d-none"}>
              <ul>
                <li>
                  {" "}
                  <a href="/">Wisatawan</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/">Pemandu Wisata</a>{" "}
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiLogOut size="24" />
              <a
                role="button"
                className="ms-2 h6"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Keluar
              </a>
            </div>
            {/* logout-modal */}
            <div id="myModal" className="modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered mx-auto">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="mb-4">
                      <h4 className="text-center">
                        Apakah Kamu Yakin Ingin Keluar?
                      </h4>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn-abu me-3"
                        data-bs-dismiss="modal"
                      >
                        Tidak
                      </button>
                      <button
                        type="button"
                        className="btn-orange"
                        data-bs-dismiss="modal"
                        onClick={logoutHandler}
                      >
                        Ya
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* logout-modal */}
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="mx-auto">
            <div className="row pt-3 justify-content-center">
              <h3 className="mt-2">Data Destinasi</h3>
              <div className="col-lg-6 p-2">
                {/* <div className="card p-5 bg-light shadow p-3 my-5 bg-white rounded border-0"> */}
                <div className="card p-3">
                  <h5 className="text-center p-2">Edit Data Destinasi</h5>
                  <form>
                    <div className="col-12 p-2">
                      <label htmlFor="InputNamaDestinasi">Nama Destinasi</label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaDestinasi"
                        placeholder="Masukkan Nama Destinasi"
                      />
                    </div>
                    <div className="col-12 p-2">
                      <label htmlFor="InputFoto">Foto</label>
                      <input
                        type="file"
                        className="form-control"
                        id="foto"
                        placeholder="Unggah Foto"
                      />
                    </div>
                    <div className="col-12 p-2">
                      <label htmlFor="InputRekomendasi">Rekomendasi</label>
                      <select
                        className="form-select"
                        aria-label="Pilih Opsi Rekomendasi"
                      >
                        <option selected>Select Option</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </div>
                    <div className="text-center p-4">
                      <button
                        type="submit"
                        className="btn-abu me-2 mr-4"
                        onClick={batalHandler}
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="btn-orange mr-4"
                        onClick={simpanHandler}
                      >
                        Selesai
                      </button>
                    </div>
                  </form>
                </div>
                {/* </div>s */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
