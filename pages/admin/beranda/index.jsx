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
} from 'react-icons/fi';
import Image from 'next/image';
import BlankUser from '../../../public/images/blank-user.png';
import Card from '../../../components/afterlogin/admin-card';

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
            <h3 className="ms-2 text-orange brand">PRAMUNESIA</h3>
          </div>
        </div>
        <div className="offcanvas-body">
          <div className="mt-4 admin-profile">
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
              <h6 className="ms-2">Data Pemesanan</h6>
              <button
                type="button"
                className="btn-circle btn-sm d-flex align-items-center ms-auto button-shadow"
              >
                <FiPlus size="24" />
              </button>
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
        <h3 className="m-auto text-orange brand">PRAMUNESIA</h3>
      </div>
      {/* offcanvasmode */}
      <div className="row min-vh-100">
        <div className="col-sm-12 col-md-4 col-lg-4 bg-soft-peace  d-none d-sm-block">
          <div className="d-flex justify-content-start align-items-center">
            <button type="button" className="menu-button">
              <FiMenu size="34" />
            </button>
            <h3 className="ms-2 text-orange brand">PRAMUNESIA</h3>
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
              <h6 className="ms-2">Data Pemesanan</h6>
              <button
                type="button"
                className="btn-circle btn-sm d-flex align-items-center ms-auto button-shadow"
              >
                <FiPlus size="24" />
              </button>
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
            <h3 className="mb-3">Hello, Admin</h3>
            <div className="">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 text-white mb-3">
                  <Card jumlah="2.567" title="wisatawan" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 text-white mb-3">
                  <Card jumlah="2.567" title="pemandu wisata" />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 text-white mb-3">
                  <Card jumlah="2.567" title="pemesanan" />
                </div>
              </div>
            </div>
            <h3 className="my-3">Pemesanan Terakhir</h3>
            <div className="mx-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">First</th>
                    <th scope="col">second</th>
                    <th scope="col">third</th>
                    <th scope="col">last</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>Thornton</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
