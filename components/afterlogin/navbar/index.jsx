import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiUser, FiUserPlus, FiLogOut } from 'react-icons/fi';
import Navlogo from '../../../public/nav-brand.png';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-md py-4">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggler" aria-controls="navToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="d-md-none">
        <h1 className="h1 text-uppercase">Pramunesia</h1>
      </div>
      <div className="dropdown d-md-none ms-1">
        <a className="nav-link dropdown-toggle" id="dropdownMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FiUser size={36} />
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="dropdownMenu">
          <li>
            <Link href="/useChoosePage">
              <a className="dropdown-item">
                <FiUserPlus size={24} />
                {' '}
                Akun
              </a>
            </Link>
          </li>
          <li>
            <Link href="/useChoosePage">
              <a className="dropdown-item text-danger">
                <FiLogOut size={24} />
                {' '}
                Keluar
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <a className="navbar-brand d-none d-md-block">
        <Image src={Navlogo} width={65} height={60} alt="navbar logo" />
      </a>
      <div className="collapse navbar-collapse align-items-center" id="navToggler">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link active" aria-current="page">Beranda</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/tentang-kami">
              <a className="nav-link">Tentang Kami</a>
            </Link>
          </li>
          <div className="d-none d-sm-none d-md-block d-flex justify-content-center align-items-center py-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="dropdownMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FiUser size={24} />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="dropdownMenu">
                <li>
                  <Link href="/useChoosePage">
                    <a className="dropdown-item">
                      <FiUserPlus size={24} />
                      {' '}
                      Akun
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/useChoosePage">
                    <a className="dropdown-item text-danger">
                      <FiLogOut size={24} />
                      {' '}
                      Keluar
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
