import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const images = [
  'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
];

export default function Carousel() {
  const propertiesImage = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    scale: 0.4,
  };
  return (
    <div className="slide-container">
      <Zoom {...propertiesImage}>
        {images.map((image, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <img src={image} alt="slide" className="rounded image-slide" />
          </div>
        ))}
      </Zoom>

    </div>
  );
}
