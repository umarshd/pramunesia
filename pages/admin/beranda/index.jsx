import React, { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiDatabase,
  FiUsers,
  FiLogOut,
  FiChevronDown,
  FiChevronUp,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import BlankUser from "../../../public/images/blank-user.png";
import Card from "../../../components/afterlogin/admin-card";
import sessionAdminLogin from "../../auth/sessionAdminLogin";

export default function index() {
  sessionAdminLogin();
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
            <h3 className="mb-3 pt-3">Hello, Admin</h3>
            <div className="">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 text-white mb-3">
                  <Card jumlah="2.567" title="Wisatawan" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 text-white mb-3">
                  <Card jumlah="2.567" title="Pemandu Wisata" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 text-white mb-3">
                  <Card jumlah="2.567" title="Pemesanan" />
                </div>
              </div>
            </div>
            <h3 className="my-3">Pemesanan Terakhir</h3>
            <div className="mx-auto">
              <div className="card border-0">
                <table className="table table-responsive table-bordred table-striped border-2 text-center my-auto">
                  <thead className="bg-secondary">
                    <tr>
                      <th scope="col">First</th>
                      <th scope="col">second</th>
                      <th scope="col">third</th>
                      <th scope="col">last</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary mx-1"
                          data-title="Edit"
                        >
                          <FiEdit size="12" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-title="Edit"
                        >
                          <FiTrash2 size="12" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Mark</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary mx-1"
                          data-title="Edit"
                        >
                          <FiEdit size="12" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-title="Edit"
                        >
                          <FiTrash2 size="12" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td>Thornton</td>
                      <td>@twitter</td>
                      <td>Mark</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary mx-1"
                          data-title="Edit"
                        >
                          <FiEdit size="12" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-title="Edit"
                        >
                          <FiTrash2 size="12" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="py-4">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-end">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1">
                          Sebelumnya
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Selanjutnya
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
