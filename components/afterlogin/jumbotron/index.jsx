import React from "react";
import Image from "next/image";
import Heroimg from "../../../public/images/heropic.png";

function Jumbotron({ cities, handleChange, handleCity }) {
  console.log(cities);
  return (
    <div className="container">
      <div className="row mt-5 pt-3">
        <div className="col-lg-6 my-auto">
          <Image src={Heroimg} width={500} height={300} alt="hero image" />
        </div>
        <div className="col-lg-6 my-auto">
          <h1 className="h1 text-center my-2 pt-5">Mau Pergi Kemana?</h1>
          <div className="d-block justifi-content-center-align-items-center">
            <form onSubmit={handleCity} method="post">
              <div className="mb-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue="DEFAULT"
                  name="city"
                  onChange={handleChange}
                >
                  <option value="DEFAULT">Pilih kota tujuan</option>
                  {cities
                    ? cities.map((city, index) => (
                        <option key={index} value={city.id}>
                          {city.name}
                        </option>
                      ))
                    : null}
                </select>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn-orange">
                  Lanjut
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
