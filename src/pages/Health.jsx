import React from "react";
import { Heart } from "lucide-react";

const projects = [
  {
    name: "Community Clinics",
    info: "Set up accessible health clinics in rural and underserved areas.",
    img: "/images/health1.jpg",
  },
  {
    name: "Vaccination Programs",
    info: "Run mass vaccination campaigns to improve public health.",
    img: "/images/health2.jpg",
  },
  {
    name: "Health Education Workshops",
    info: "Educate communities on hygiene, nutrition, and disease prevention.",
    img: "/images/health3.jpg",
  },
];

export default function Health() {
  return (
    <section className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Heart className="w-32 h-32 text-red-600" />
        <div>
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Health Department
          </h1>
          <p className="text-gray-700 text-lg">
            Our Health Department works to improve community health through accessible clinics, vaccination programs, and health education initiatives.
          </p>
        </div>
      </div>

      {/* Projects / Initiatives */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden">
              <img
                src={proj.img}
                alt={proj.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {proj.name}
                </h3>
                <p className="text-gray-600">{proj.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
