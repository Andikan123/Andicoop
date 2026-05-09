import React from "react";
import { FaIndustry, FaBolt, FaCity, FaGlobe, FaLeaf, FaGraduationCap } from "react-icons/fa";

export default function ServicesGrid() {
  const items = [
    { icon: <FaIndustry />, title: "Industrial Development", desc: "Large scale infrastructure projects." },
    { icon: <FaBolt />, title: "Energy Solutions", desc: "Power generation and distribution." },
    { icon: <FaCity />, title: "Urban Projects", desc: "Smart city and urban planning." },
    { icon: <FaGlobe />, title: "Global Operations", desc: "International expansion initiatives." },
    { icon: <FaLeaf />, title: "Sustainability", desc: "Eco-friendly development systems." },
    { icon: <FaGraduationCap />, title: "Education", desc: "Training future leaders." },
  ];

  return (
   <section className="w-full mt-20 px-6">
  <div className="max-w-7xl mx-auto shadow-lg">

    <div className="grid grid-cols-1 md:grid-cols-3">

      {items.map((item, index) => (
        <div
          key={index}
          className="group relative border border-gray-200 px-10 py-16 cursor-pointer overflow-hidden bg-white flex flex-col justify-center min-h-[260px]"
        >

          {/* Hover red background */}
         <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Content */}
          <div className="relative z-10 transition-all duration-300 group-hover:text-white">

            <div className="text-4xl mb-6 text-red-700 group-hover:text-white transition">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 group-hover:text-white/90 mt-3 leading-relaxed">
              {item.desc}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
  );
}