import React from "react";
import { BookOpen } from "lucide-react";

const projects = [
  {
    name: "Scholarship Programs",
    info: "Provide 1000 scholarships to African students annually.",
    img: "/images/education1.jpg",
  },
  {
    name: "Community Libraries",
    info: "Build accessible libraries in rural communities.",
    img: "/images/education2.jpg",
  },
  {
    name: "Teacher Training Workshops",
    info: "Train educators for modern teaching methods.",
    img: "/images/education3.jpg",
  },
];

export default function EducationDept() {
  return (
    <section className="container mx-auto px-6 py-12 space-y-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <BookOpen className="w-32 h-32 text-blue-700" />
        <div>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Education Department</h1>
          <p className="text-gray-700 text-lg">
            Our Education Department aims to empower communities through access to quality education, scholarships, and training programs.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden">
              <img src={proj.img} alt={proj.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{proj.name}</h3>
                <p className="text-gray-600">{proj.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
