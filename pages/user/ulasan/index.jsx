import React from 'react';
import Image from 'next/image';
import Navigation from '../../../components/afterlogin/navbar';

function UserReview() {
  return (
    <div className="container mx-auto">
      <Navigation />
      <h2>Ulasan Saya</h2>
      <div className="row my-5">
        <div className="col-12 p-0 mb-3">
          <div className="col bg-soft-peace p-3 soft-shadow rounded">
            <div className="d-flex flex-column">
              <div className="col">
                <div className="d-flex gap-2 mb-2">
                  <Image
                    src="https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png"
                    width="45"
                    height="30"
                  />
                  <div className="ms-sm-2">
                    <h5>Nama User</h5>
                    <p>Lokasi wisata bersama @pemandu</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita deserunt cumque ex quisquam ut, provident aliquam nulla
                  debitis ducimus saepe ea reprehenderit nesciunt placeat modi
                  sint excepturi sapiente possimus dolor veritatis dolorum aperiam
                  magnam necessitatibus temporibus! Dolores cumque nihil
                  cupiditate?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReview;
