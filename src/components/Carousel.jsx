// components/Carousel.jsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "images/chachaji.jpg",
  },
  {
    id: 2,
    image: "images/transit-bg-02.png",
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <section className="max-w-8xl mx-auto">
      <div className="relative overflow-hidden rounded-sm shadow-lg">
        <img src={slides[currentIndex].image} alt="" className="w-full h-[auto] object-cover"/> 

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 text-center transform translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-[9px] h-[9px] rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"}`}>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
