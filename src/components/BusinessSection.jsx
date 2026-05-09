import React, { useState } from "react";

export default function BusinessSection() {
  const businesses = [
    {
      title: "Oil & Gas",
      desc: "Energy production and refining solutions powering industrial growth across Africa.",
      bg: "/images/oilgas.jpg",
    },
    {
      title: "Construction",
      desc: "Large scale infrastructure development including roads, bridges and industrial complexes.",
      bg: "/images/construction.jpg",
    },
    {
      title: "Power",
      desc: "Sustainable energy systems ensuring reliable electricity across regions.",
      bg: "/images/power.jpg",
    },
    {
      title: "Agriculture",
      desc: "Modern food production and processing systems for national food security.",
      bg: "/images/agric.jpg",
    },
  ];

  const [activeBg, setActiveBg] = useState(businesses[0].bg);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative min-h-[80vh] flex items-center transition-all duration-700 bg-cover bg-center"
      style={{
        backgroundImage: `url(${activeBg})`,
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 w-full gap-0">

        {businesses.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setActiveBg(item.bg);
              setActiveIndex(index);
            }}
            className="relative group p-16 border border-white/10 cursor-pointer overflow-hidden"
          >

            {/* card background image */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: `url(${item.bg})` }}
            ></div>

            {/* overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-500"></div>

            {/* content */}
            <div className="relative z-10 text-white">

              {/* TITLE (always visible) */}
              <h2 className="text-3xl font-semibold">
                {item.title}
              </h2>

              {/* DESCRIPTION (slides in on hover) */}
              <div
                className={`mt-4 text-white/80 transition-all duration-500 ease-out transform ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-6"
                }`}
              >
                <p className="text-sm leading-relaxed max-w-md">
                  {item.desc}
                </p>
                 {/* READ MORE BUTTON */}
                <button
                  onClick={() => navigate(item.path)}
                  className={`mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold tracking-wide transition-all duration-300 ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  Read More →
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}