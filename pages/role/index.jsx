import React from 'react';
import Image from 'next/image';
import Logobig from '../../public/images/logo-big.png';

export default function Role() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Image src={Logobig} width={573} height={522} alt="logo bigger" />
          </div>
        </div>
        <div className="col-lg-6 bg-firefly">
          <h5 className="h5 text-center">Pilih Akun</h5>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="d-block">
              <div className="card shadow-card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
              <div className="card shadow-card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
