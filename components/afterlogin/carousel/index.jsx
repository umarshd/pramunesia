import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import Cookies from "js-cookie";

export default function ComponentCarousel() {
  const [images, setImages] = useState(false);

  const = [name , setName] = useState(null)

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
    <div className="carousel-wrapper">
      <Carousel>
        {images ? (
          images.map((image, index) => (
            <div key={index} className="img-container d-flex">
              <div></div>
              <img
                src={`${process.env.NEXT_PUBLIC_ENDPOINT}/cities/${Cookies.get(
                  "idCity"
                )}/destinations/image/${image.image}`}
                alt="slide"
                className="rounded center-cropped d-block"
                style={{ flexBasis: "70%" }}
              />
              <div className="flex-grow-1" style={{ flexBasis: "30%" }}>
                <h3 className="text-center">{image.name}</h3>
              </div>

              {/* <div className="centered-caption">
                <h3 className="text-center">{image.name}</h3>
              </div> */}
            </div>
          ))
        ) : (
          <div className="loader">
            <div className="spinner" />
          </div>
        )}
      </Carousel>
    </div>
  );
}
