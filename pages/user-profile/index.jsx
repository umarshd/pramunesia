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
            <div className="col-6 text-white bg-dark">
              <div className="d-flex justify-content-center align-items-center">
                <div className="rounded-circle border-5 overflow-hidden">
                  <Image
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 text-white bg-warning">
              test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
