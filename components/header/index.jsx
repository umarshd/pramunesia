import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navlogo from '../../public/nav-brand.png';

function Header() {
  const router = useRouter();
  const pramuClickHandler = () => {
    router.push('/regist-tour-guide');
  };
  const wisatawanClickHandler = () => {
    router.push('/regist-wisatawan');
  };
  const loginUserHandler = () => {
    router.push('/user/login');
  };
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navToggler"
            aria-controls="navToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="d-md-none">
            <h1 className="h1 text-uppercase me-auto">Pramunesia</h1>
          </div>
          <a className="navbar-brand d-none d-md-block" href="#d">
            <Image src={Navlogo} width={65} height={60} alt="navbar logo" />
          </a>
          <div
            className="collapse navbar-collapse align-items-center"
            id="navToggler"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Beranda
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tentang-kami">
                  <a className="nav-link">Tentang Kami</a>
                </Link>
              </li>
            </ul>
            <div
              className="modal fade mx-auto"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered mx-auto">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Pilih Akun
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="d-block">
                      <div
                        className="card shadow-card mb-3"
                        onClick={wisatawanClickHandler}
                        data-bs-dismiss="modal"
                      >
                        <div className="card-body">
                          <h5 className="card-title h1 text-light mb-2">Wisatawan</h5>
                          <p className="card-text text-light">Untuk Wisatawan</p>
                        </div>
                      </div>
                      <div
                        className="card shadow-card"
                        onClick={pramuClickHandler}
                        data-bs-dismiss="modal"
                      >
                        <div className="card-body">
                          <h5 className="card-title h1 text-light mb-2">Pemandu Wisata</h5>
                          <p className="card-text text-light">Untuk Pemandu Wisata</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <p>@pramunesia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <button
                className="btn-abu me-3"
                type="submit"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                data-backdrop="false"
              >
                Registrasi
              </button>
              <button
                className="btn-orange"
                type="submit"
                onClick={loginUserHandler}
              >
                Masuk
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
