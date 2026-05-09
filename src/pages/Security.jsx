import React from "react";
import { Shield } from "lucide-react";

const projects = [
  {
    name: "Community Patrol Program",
    info: "Engage local volunteers to ensure neighborhood safety.",
    img: "/images/security1.jpg",
  },
  {
    name: "Emergency Response Training",
    info: "Train citizens in first response and emergency preparedness.",
    img: "/images/security2.jpg",
  },
  {
    name: "Surveillance & Monitoring",
    info: "Install monitoring systems for high-risk areas.",
    img: "/images/security3.jpg",
  },
];

export default function Security() {
  return (
    <section className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Shield className="w-32 h-32 text-blue-700" />
        <div>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Security Department
          </h1>
          <p className="text-gray-700 text-lg">
            Our Security Department focuses on community safety, emergency response, and protecting assets across all regions.
          </p>
        </div>
      </div>

      {/* Projects / Initiatives */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Key Projects
        </h2>
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
