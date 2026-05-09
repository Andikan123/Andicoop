import { Coffee, Drumstick, Fish,  Apple, Leaf, Factory } from "lucide-react";

const farmDivision = [
  {
    name: "Poultry",
    info: "Large-scale poultry farming for meat and eggs.",
    icon: <Drumstick className="w-10 h-10 text-yellow-600" />,
  },
  {
    name: "Cattle Rearing",
    info: "Partnership with the North to raise cattle for dairy and beef.",
    icon: <Leaf className="w-10 h-10 text-brown-600" />,
  },
  {
    name: "Fishery",
    info: "Modern fish farming to boost protein availability.",
    icon: <Fish className="w-10 h-10 text-blue-600" />,
  },
  {
    name: "Orchard",
    info: "Fruits and vegetables for local consumption and export.",
    icon: <Apple className="w-10 h-10 text-green-600" />,
  },
  {
    name: "Cash Crops",
    info: "Cocoa, rice, beans, and other key agricultural products.",
    icon: <Leaf className="w-10 h-10 text-indigo-600" />,
  },
];

const manufacturingDivision = [
  {
    name: "Processing",
    info: "Transform raw produce into finished food products.",
    icon: <Factory className="w-10 h-10 text-red-600" />,
  },
  {
    name: "Packaging",
    info: "Ensure hygienic and market-ready packaging for products.",
    icon: <Factory className="w-10 h-10 text-orange-600" />,
  },
  {
    name: "Marketing",
    info: "Distribute and sell produce locally and internationally.",
    icon: <Factory className="w-10 h-10 text-purple-600" />,
  },
];

export default function FoodDep() {
  return (
    <section className="container mx-auto px-6 py-12 space-y-16">
      {/* Intro */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Coffee className="w-32 h-32 text-green-600" />
        <div>
          <h1 className="text-4xl font-bold text-green-600 mb-4">Food Department</h1>
          <p className="text-gray-700 text-lg">
            The Food Department is the backbone of the cooperation. It consists of 
            two main divisions: <span className="font-semibold">the Farm</span> and 
            <span className="font-semibold"> Manufacturing</span>, ensuring food 
            production, processing, and distribution across Africa.
          </p>
        </div>
      </div>

      {/* Farm Division */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Farm Division</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farmDivision.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col items-center text-center"
            >
              {proj.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{proj.name}</h3>
              <p className="text-gray-600 mt-2">{proj.info}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Manufacturing Division */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manufacturing Division</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manufacturingDivision.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col items-center text-center"
            >
              {proj.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{proj.name}</h3>
              <p className="text-gray-600 mt-2">{proj.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
