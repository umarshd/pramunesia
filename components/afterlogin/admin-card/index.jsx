import React from 'react';

function Card({ jumlah, title }) {
  return (
    <div className="card shadow-card d-flex flex-column justify-content-center align-items-center" style={{ height: '6.8rem' }}>
      <div className="card-body text-center">
        <h2>{jumlah}</h2>
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default Card;
