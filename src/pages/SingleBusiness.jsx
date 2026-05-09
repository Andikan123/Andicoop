import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import businessData from "../data/businessData";

export default function SingleBusiness() {
  const { name } = useParams();
  const navigate = useNavigate();

  const business = businessData[name];

  if (!business) return <div className="p-10">Not Found</div>;

  return (
    <div>

      {/* HERO */}
      <div className="relative h-[60vh]">
        <img
          src={business.heroImage}
          alt={business.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#050F1C]/90 via-[#061a33]/70 to-transparent"></div>

        <h1 className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl text-white font-bold">
          {business.title}
        </h1>
      </div>

      {/* 🔥 DYNAMIC SECTIONS */}
      {business.sections.map((section, index) => {

        // OVERVIEW
        if (section.type === "overview") {
          return (
            <section
              key={index}
              className="relative max-w-6xl mx-auto px-6 py-20"
            >
              <div className="absolute inset-0 -z-10">
                <div className="w-72 h-72 bg-blue-100/40 rounded-full blur-3xl absolute top-10 left-0"></div>
                <div className="w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl absolute bottom-0 right-0"></div>
              </div>

              <div className="mb-8">
                <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
                  Overview
                </span>

                <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
                  {section.title}
                </h2>

                <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-indigo-500 mt-4 rounded-full"></div>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-8 md:p-10">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide">
                  {section.content}
                </p>
              </div>
            </section>
          );
        }

        // 🔥 GRID (NOW WITH BACKGROUND IMAGES)
        if (section.type === "grid") {
          return (
            <section
              key={index}
              className="relative py-20 px-6 bg-linear-to-b from-white to-gray-50"
            >
              <div className="max-w-6xl mx-auto">
                
                {/* header */}
                <div className="mb-12">
                  <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
                    Focus Areas
                  </span>

                  <h2 className="mt-3 text-4xl font-bold text-[#0B1F3A]">
                    {section.title}
                  </h2>

                  <div className="w-16 h-1 bg-linear-to-r from-blue-600 to-indigo-500 mt-4 rounded-full"></div>
                </div>

                {/* 🔥 IMAGE GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="relative group h-75 rounded-2xl overflow-hidden cursor-pointer"
                    >
                      {/* background image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />

                      {/* overlay */}
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition"></div>

                      {/* content */}
                      <div className="relative h-full flex flex-col justify-end p-6 text-white">
                        <h3 className="text-xl font-semibold">
                          {item.title}
                        </h3>

                        <div className="w-10 h-0.5 bg-blue-400 mt-2 mb-3 rounded-full"></div>

                        <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition duration-300">
                          {item.desc}
                        </p>

                        <div className="mt-3 text-sm text-blue-300 opacity-0 group-hover:opacity-100 transition">
                          Learn more →
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // STATS
        if (section.type === "stats") {
          return (
            <section
              key={index}
              className="relative py-24 px-6 bg-[#0B1F3A]"
            >
              <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">
                  <span className="text-sm uppercase tracking-widest text-blue-300">
                    Impact
                  </span>

                  <h2 className="mt-3 text-4xl font-bold text-white">
                    Measurable Results
                  </h2>

                  <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-10 text-center">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-10 px-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-2xl"></div>

                      <h2 className="text-5xl md:text-6xl font-bold text-white">
                        {item.value}
                      </h2>

                      <p className="text-blue-200 mt-4 text-sm md:text-base tracking-wide uppercase">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // CTA
        if (section.type === "cta") {
          return (
            <section
              key={index}
              className="relative py-24 px-6 bg-linear-to-br from-[#0B1F3A] via-[#0F2A4D] to-[#0B1F3A] text-white overflow-hidden"
            >
              <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-25 -left-25"></div>
              <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -bottom-30 -right-30"></div>

              <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  {section.title}
                </h2>

                <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>

                <p className="mt-6 text-blue-200 text-lg md:text-xl leading-relaxed">
                  {section.desc}
                </p>

                <div className="mt-10 flex justify-center">
                  <button className="px-10 py-4 rounded-full bg-white text-[#0B1F3A] font-semibold text-lg hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                    {section.button}
                  </button>
                </div>

                <p className="mt-6 text-sm text-blue-300">
                  Let’s build something impactful together
                </p>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* SUBPAGES (unchanged) */}
      {business.subPages && (
        <section className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
              Discover
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B1F3A]">
              Explore More
            </h2>

            <div className="w-16 h-1 bg-linear-to-r from-blue-600 to-indigo-500 mt-4 rounded-full"></div>

            <p className="mt-4 text-gray-600 max-w-2xl">
              Dive deeper into specialized areas and learn more about what we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {business.subPages.map((sub, i) => (
              <div
                key={i}
                onClick={() =>
                  navigate(`/business/${name}/${sub.slug}`)
                }
                className="group relative cursor-pointer bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="relative">
                  <h3 className="text-xl font-semibold text-[#0B1F3A] group-hover:text-blue-700 transition">
                    {sub.title}
                  </h3>

                  <div className="w-10 h-0.5 bg-blue-500 mt-3 mb-4 rounded-full"></div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {sub.content || sub.desc}
                  </p>

                  <div className="mt-6 flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}