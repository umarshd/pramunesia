import React, { useState } from 'react';
import {
  FiMenu,
  FiHome,
  FiDatabase,
  FiUsers,
  FiLogOut,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiEdit,
  FiTrash2,
} from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import BlankUser from '../../../public/images/blank-user.png';

export default function index() {
  const [toggle, setToggle] = useState(false);
  const hadlerToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
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
                onClick={hadlerToggle}
              >
                {toggle ? <FiChevronUp size="24" /> : <FiChevronDown size="24" />}
              </button>
            </div>
            <div className={toggle ? 'ms-1 mb-3' : 'd-none'}>
              <ul>
                <li>
                  {' '}
                  <Link href="/admin/data-pemesanan">Data Pemesanan</Link>
                  {' '}
                </li>
                <li>
                  {' '}
                  <Link href="/admin/data-kota">Data Kota</Link>
                  {' '}
                </li>
                <li>
                  {' '}
                  <Link href="/admin/data-destinasi">Data Destinasi</Link>
                  {' '}
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
                {toggle ? <FiChevronUp size="24" /> : <FiChevronDown size="24" />}
              </button>
            </div>
            <div className={toggle ? 'ms-1 mb-3' : 'd-none'}>
              <ul>
                <li>
                  {' '}
                  <a href="/">Wisatawan</a>
                  {' '}
                </li>
                <li>
                  {' '}
                  <a href="/">Pemandu Wisata</a>
                  {' '}
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiLogOut size="24" />
              <h6 className="ms-2">Keluar</h6>
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
                onClick={hadlerToggle}
              >
                {toggle ? <FiChevronUp size="24" /> : <FiChevronDown size="24" />}
              </button>
            </div>
            <div className={toggle ? 'ms-1 mb-3' : 'd-none'}>
              <ul>
                <li>
                  {' '}
                  <Link href="/admin/data-pemesanan">Data Pemesanan</Link>
                  {' '}
                </li>
                <li>
                  {' '}
                  <Link href="/admin/data-kota">Data Kota</Link>
                  {' '}
                </li>
                <li>
                  {' '}
                  <Link href="/admin/data-destinasi">Data Destinasi</Link>
                  {' '}
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
                {toggle ? <FiChevronUp size="24" /> : <FiChevronDown size="24" />}
              </button>
            </div>
            <div className={toggle ? 'ms-1 mb-3' : 'd-none'}>
              <ul>
                <li>
                  {' '}
                  <a href="/">Wisatawan</a>
                  {' '}
                </li>
                <li>
                  {' '}
                  <a href="/">Pemandu Wisata</a>
                  {' '}
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center justify-content-start mb-3">
              <FiLogOut size="24" />
              <h6 className="ms-2">Keluar</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="mx-auto">
            <div className="row">
              <div className="col-10 p-2">
                <h3 className="mt-2">Data Pemesanan</h3>
              </div>
              <div className="col-2 p-3">
                <button
                  type="button"
                  className="btn-circle btn-sm d-flex align-items-center ms-auto button-shadow"
                >
                  <FiPlus size="24" />
                </button>
              </div>
            </div>
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
                        <a className="page-link" href="#" tabIndex="-1">Sebelumnya</a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">Selanjutnya</a>
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
