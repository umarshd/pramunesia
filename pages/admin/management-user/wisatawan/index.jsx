import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import Cookies from 'js-cookie';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/router';
import BlankUser from '../../../../public/images/blank-user.png';

export default function Index() {
  const MySwal = withReactContent(Swal);
  const router = useRouter();

  const [wisatawan, setWisatawan] = useState(false);

  const getDataWisatawan = async () => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/users`;

    try {
      const response = await axios({
        method: 'GET',
        url: api,
        headers: {
          authorization: `Bearer ${Cookies.get('pramunesiaAppToken')}`,
        },
      });

      await setWisatawan(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWisatawan = async (id) => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/users/${id}`;

    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        const response = await axios({
          url: api,
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${Cookies.get('pramunesiaAppToken')}`,
          },
        });
        window.location.href = '/admin/management-user/wisatawan';
      }
    } catch (error) {}
  };
  const [toggle, setToggle] = useState(false);
  const hadlerToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    getDataWisatawan();
  }, []);
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
            <div className="row">
              <div className="col-lg-6">
                <h3 className="mt-2">Data Pemesanan</h3>
              </div>
              <div className="col-lg-6">
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
                      <th scope="col">No</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Email</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wisatawan
                      ? wisatawan.map((wtn, index) => (
                        <tr key={index.toString()}>
                          <td>{index + 1}</td>
                          <td>{wtn.name}</td>
                          <td>{wtn.email}</td>
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
                              data-title="Delete"
                              onClick={(e) => deleteWisatawan(wtn.id)}
                            >
                              <FiTrash2 size="12" />
                            </button>
                          </td>
                        </tr>
                      ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
