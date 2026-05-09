import React from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessSection() {
  const navigate = useNavigate();

 const businesses = [
  {
    title: "Construction",
    desc: "Delivering large-scale construction projects with precision, innovation, and world-class engineering standards.",
    image: "/images/construction.jpg",
    link: "/business/construction",
  },
  {
    title: "Agriculture",
    desc: "Driving food security through modern farming, agribusiness innovation, and sustainable agricultural practices.",
    image: "/images/agric.jpg",
    link: "/business/agriculture",
  },
  {
    title: "Health & Research",
    desc: "Advancing healthcare systems and medical research to improve lives and strengthen communities.",
    image: "/images/health.jpg",
    link: "/business/health",
  },
  {
    title: "Power & Energy",
    desc: "Providing reliable and sustainable energy solutions to power industries and economic development.",
    image: "/images/power.jpg",
    link: "/business/power",
  },
  {
    title: "Technology",
    desc: "Building innovative digital solutions that drive efficiency, connectivity, and future-ready systems.",
    image: "/images/tech.jpg",
    link: "/business/technology",
  },
  {
    title: "Real Estate & Housing",
    desc: "Developing modern residential and commercial spaces that redefine urban living and infrastructure.",
    image: "/images/house.jpg",
    link: "/business/estate",
  },
  {
    title: "Education",
    desc: "Empowering future leaders through quality education, skill development, and knowledge innovation.",
    image: "/images/edu.jpg",
    link: "/business/education",
  },
  {
  title: "Logistics & Transportation",
  desc: "Enabling seamless movement of goods and services through efficient and integrated logistics systems.",
  image: "/images/logistics.jpg",
  link: "/business/logistics",
},
  {
  title: "Manufacturing ",
  desc: "Enabling seamless movement of goods and services through efficient and integrated logistics systems.",
  image: "/images/manufacturing.jpg",
  link: "/business/manufacturing",
},
  {
  title: "Sports ",
  desc: "Enabling seamless movement of goods and services through efficient and integrated logistics systems.",
  image: "/images/sports.jpg",
  link: "/business/sports",
},
  {
  title: "Media ",
  desc: "Enabling seamless movement of goods and services through efficient and integrated logistics systems.",
  image: "/images/media.jpg",
  link: "/business/media",
},
  {
  title: "Music and Entertainment",
  desc: "Enabling seamless movement of goods and services through efficient and integrated logistics systems.",
  image: "/images/music.jpg",
  link: "/business/music",
},
  {
  title: "Marketing",
  desc: "Enabling seamless movement of goods and services through efficient and integrated logistics systems.",
  image: "/images/market.jpg",
  link: "/business/marketing",
},

];

  return (
    <section className="w-full">

      <div className="grid grid-cols-1 md:grid-cols-3">

        {businesses.map((item, index) => (
          <div
            key={index}
            className="group relative h-105 overflow-hidden cursor-pointer"
          >

            {/* BACKGROUND IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
            />

            {/* BLUE GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-b from-[#050F1C]/90 via-[#061a33]/70 to-[#061a33]/40"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">

              {/* TITLE (always visible) */}
              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>

              {/* HIDDEN CONTENT (reveals on hover) */}
              <div className="overflow-hidden">
                <div className="
  transform
  translate-y-0 opacity-100
  md:translate-y-10 md:opacity-0
  md:group-hover:translate-y-0
  md:group-hover:opacity-100
  transition duration-500
">

                  <p className="mt-4 text-sm text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center justify-between">

                    <button
                      onClick={() => navigate(item.link)}
                      className="text-sm uppercase tracking-wider"
                    >
                      Read More
                    </button>

                    {/* PLUS ICON */}
                    <div
                      onClick={() => navigate(item.link)}
                      className="w-10 h-10 flex items-center justify-center border border-white hover:bg-white hover:text-black transition"
                    >
                      +
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}