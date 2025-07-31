import React, { useState,useEffect } from "react";
import img1 from "../images/safiah_laptop.jpg";
import img2 from "../images/safiah_aset_laptop.jpg"; 
import img3 from "../images/tez.png";

const images = [img1, img2, img3];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`carousel-image ${index === current ? "active" : ""}`}
            alt={`slide-${index}`}
          />
        ))}
      </div>

      <button className="carousel-btn left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
