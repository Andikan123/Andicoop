import React, { useState, useEffect } from "react";

export default function HeroCarousel() {
  const slides = [
    {
      image: "/images/turk.jpg",
      title: "Building Modern Infrastructure",
      desc: "We develop world-class infrastructure that drives economic growth across regions.",
    },
    {
      image: "/images/energy.jpg",
      title: "Energy & Industrial Development",
      desc: "Powering industries with sustainable and large-scale energy solutions.",
    },
    {
      image: "/images/bild.jpg",
      title: "Urban Transformation Projects",
      desc: "Creating smart cities and modern urban environments for the future.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // slightly slower for premium feel

    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % slides.length);
};
const prevSlide = () => {
  setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
};

  return (
   <div className="relative w-full h-[85vh] max-h-[700px] pb-24 overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1500 ease-in-out ${
            index === current
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105"
            style={{ filter: "contrast(1.05) brightness(0.95)" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-4xl text-white transition-all duration-1000 ease-in-out">

              <p className="uppercase tracking-[0.3em] text-sm text-gray-300">
                Infrastructure & Development
              </p>

              <h1 className="text-5xl md:text-7xl font-semibold mt-6 leading-tight">
                {slide.title}
              </h1>

              <p className="mt-8 text-lg md:text-2xl text-gray-200 leading-relaxed">
                {slide.desc}
              </p>

              <div className="mt-10 flex justify-center">
                <button className="px-8 py-4 border border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition">
                  Explore More
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}
      {/* Floating Stats Card */}


      {/* Indicators */}
      <div className="absolute bottom-10 left-10 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-10 h-1 cursor-pointer transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* NAVIGATION BUTTONS */}
{/* LEFT BUTTON */}
<button
  onClick={prevSlide}
  className="absolute left-5 top-1/2 -translate-y-1/2 z-20
  w-12 h-12 flex items-center justify-center rounded-full text-3xl
  bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition"
>
  ←
</button>

{/* RIGHT BUTTON */}
<button
  onClick={nextSlide}
  className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-3xl
  w-12 h-12 flex items-center justify-center rounded-full
  bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition"
>
  →
</button>

    </div>
  );
}