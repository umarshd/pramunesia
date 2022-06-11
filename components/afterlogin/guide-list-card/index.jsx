import React from 'react';
import Image from 'next/image';

export default function GuideList({ namaPemandu, rating }) {
  return (
    <div className="card mb-3 shadow-card">
      <div className="row d-flex align-items-center justify-content-center" style={{ height: '8rem' }}>
        <div className="col-4">
          <div className="rounded">
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="col-8">
          <div className="card-body text-white">
            <h5 className="card-title">{namaPemandu}</h5>
            <p className="card-text">
              <small className="text-muted">
                &#10030;
                {rating}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
