import React from 'react';
import Image from 'next/image';
import Heroimg from '../../../public/images/heropic.png';

function Jumbotron() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-6 my-auto">
          <Image src={Heroimg} width={500} height={300} alt="hero image" />
        </div>
        <div className="col-lg-6 my-auto">
          <h1 className="h1 text-center my-2">Mau Pergi Kemana?</h1>
          <div className="d-block justifi-content-center-align-items-center">
            <div className="mb-3">
              <select className="form-select" aria-label="Default select example" defaultValue="DEFAULT">
                <option value="DEFAULT">Pilih kota tujuan</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn-orange">Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
