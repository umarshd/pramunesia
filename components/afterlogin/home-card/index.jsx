import React from 'react';
import { FiUsers } from 'react-icons/fi';

export default function Card({ title, desc }) {
  return (
    <div>
      <div className="card  shadow-card" style={{ maxWidth: '25rem' }}>
        <div className="row">
          <div className="col-2">
            <FiUsers
              size="4rem"
              color="white"
            />
          </div>
          <div className="col-10">
            <div className="card-body">
              <h5 className="card-title text-white">{title}</h5>
              <small className="card-text text-white">{desc}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
