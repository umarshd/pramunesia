import React from 'react';
// import { FiUsers, FiCalendar, FiBookOpen, FiStar } from 'react-icons/fi';
// import { icons } from 'react-icons/lib';

export default function Card({ icons, title, desc }) {
  return (
    <div>
      <div className="card  shadow-card" style={{ maxWidth: '25rem'}}>
        <div className="row">
          <div className="col-2">
            {icons}
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
