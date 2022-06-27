import React, { useState, useEffect } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";
import Cookies from "js-cookie";

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

  const getDestination = async () => {
    const api = `${process.env.NEXT_PUBLIC_ENDPOINT}/cities/${Cookies.get(
      "idCity"
    )}/destinations`;

    try {
      const response = await axios({
        method: "GET",
        url: api,
        headers: {
          authorization: `Bearer ${Cookies.get("pramunesiaAppToken")}`,
        },
      });
      await setImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(images);
  useEffect(() => {
    getDestination();
  }, []);

  return (
    <div className="slide-container">
      <Zoom {...propertiesImage}>
        {images ? (
          images.map((image, index) => (
            <div key={index}>
              <img
                src={`${process.env.NEXT_PUBLIC_ENDPOINT}/cities/${Cookies.get(
                  "idCity"
                )}/destinations/image/${image.image}`}
                alt="slide"
                className="rounded image-slide"
              />
              <div>{`${process.env.NEXT_PUBLIC_ENDPOINT}/cities/${Cookies.get(
                "idCity"
              )}/destinations/image/${image.image}`}</div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Zoom>
    </div>
  );
}
