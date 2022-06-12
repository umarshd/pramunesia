import React from 'react';
import Image from 'next/image';
import Navigation from '../../components/afterlogin/navbar';

function UserProfile() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <div className="bg-firefly p-5 rounded h-75 w-100 ">
        <div className="d-flex align-items-center justify-content-center bg-secondary rounded h-60">
          <div className="row h-60 w-100">
            <div className="col-6 text-white profile">
              <div className="d-flex justify-content-center align-items-center">
                <div className="rounded-circle border-5 overflow-hidden mt-5 d-flex align-items-center justify-content-center">
                  <Image
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    width="150"
                    height="150"
                  />
                </div>
              </div>
              <h4 className="d-flex justify-content-center align-items-center my-4 text-dark font-weight-bold">Halo, Pemandu Wisata</h4>
              <div className="text-center">
                <h5>
                  <span>
                    <a href="/">Lihat Profil</a>
                  </span>
                </h5>
              </div>
            </div>
            <div className="col-6 text-white bg-white">
              <h6 className="d-flex justify-content-center align-items-center my-4 text-dark font-weight-bold">Akun</h6>
              <p className="d-flex align-items-center my-4 mx-4 text-dark font-weight-bold">Sertifikat</p>
              <hr className="hr" />
              <p className="d-flex align-items-center my-4 mx-4 text-dark font-weight-bold">Pelatihan</p>
              <hr className="hr" />
              <p className="d-flex align-items-center my-4 mx-4 text-dark font-weight-bold">Tamu yang Dibawa</p>
              <hr className="hr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
