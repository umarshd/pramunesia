import React, { useState, useEffect } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Carousel() {
  const [images, setImages] = useState(false);
  const propertiesImage = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    scale: 0.4,
  };

  const getImages = async () => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/cities/${Cookies.get('idCity')}/images/${Cookies.get('imagename')}`;

    try {
      const response = await axios({
        method: 'GET',
        url: api,
        headers: {
          authorization: `Bearer ${Cookies.get('pramunesiaAppToken')}`,
        },
      });
      await setImages(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="slide-container">
      <Zoom {...propertiesImage}>
        {images ? images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="slide" className="rounded image-slide" />
          </div>
        )) : <div>Loading...</div>}
      </Zoom>

    </div>
  );
}
