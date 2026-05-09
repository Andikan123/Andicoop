import React from "react";
import {FileText, Egg, Factory, Paintbrush, Leaf, Home, Hotel, Fuel, GraduationCap, Star } from "lucide-react";


const roadmap = [
  {
    title: "Poultry Farm",
    description: "Started with 100 chicks, expansion into large-scale poultry in progress.",
    progress: 80,
    status: "Ongoing",
    target: "2025",
    icon: <Egg className="w-6 h-6 text-yellow-600" />,
  },
   {
    title: "Registering the Company",
    description: "Establish the legal foundation for the cooperative, ensuring proper structure and recognition.",
    progress: 0,
    status: "Completed",
    target: "2025",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Cement Dealership",
    description: "Partnership with Dangote to supply cement regionally.",
    progress: 0,
    status: "Upcoming",
    target: "2026",
    icon: <Factory className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "Paint & Materials",
    description: "Expand into paint and dealership for other construction materials.",
    progress: 0,
    status: "Planned",
    target: "2027",
    icon: <Paintbrush className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Food Crops",
    description: "Develop farms for cocoa, rice, beans, and other food crops.",
    progress: 0,
    status: "Planned",
    target: "2028",
    icon: <Leaf className="w-6 h-6 text-green-600" />,
  },
  {
    title: "Real Estate",
    description: "Build houses and rental properties across communities.",
    progress: 0,
    status: "Planned",
    target: "2029",
    icon: <Home className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Hotel Project",
    description: "Construct a world-class hotel powered by previous ventures.",
    progress: 0,
    status: "Planned",
    target: "2030",
    icon: <Hotel className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Petroleum Dealership",
    description: "Expand into petroleum, opening filling stations nationwide.",
    progress: 0,
    status: "Planned",
    target: "2032",
    icon: <Fuel className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "World-Class School",
    description: "Education beyond academics—real life skills and excellence.",
    progress: 0,
    status: "Dream in Motion",
    target: "2035",
    icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
  },
];

export default function PlansPage() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-16">
        Our Roadmap to the Future
      </h1>

      <div className="relative border-l-4 border-blue-600 ml-6">
        {roadmap.map((step, idx) => (
          <div key={idx} className="mb-12 ml-6 relative">
            {/* Dot */}
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full ring-4 ring-white">
              {step.icon}
            </span>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                    style={{ width: `${step.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-gray-500">{step.progress}% complete</p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium 
                  ${
                    step.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : step.status === "Ongoing"
                      ? "bg-yellow-100 text-yellow-700"
                      : step.status === "Planned"
                      ? "bg-gray-100 text-gray-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {step.status}
                </span>
                <span className="text-sm text-gray-500">Target: {step.target}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Vision */}
      <div className="mt-20 bg-linear-to-r from-blue-700 via-indigo-700 to-purple-700 text-white rounded-2xl shadow-2xl p-10 text-center">
        <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
        <h2 className="text-3xl font-bold mb-4">The Final Vision</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Unite industries into one cooperative empire that redefines Africa’s future—
          agriculture, construction, energy, hospitality, petroleum, and education
          working together to build a stronger continent.
        </p>
        <span className="mt-3 inline-block px-6 py-2 rounded-full bg-white/20 text-sm font-semibold">
          Beyond 2035
        </span>
      </div>
    </section>
  );
}
