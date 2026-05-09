import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import businessData from "../data/businessData";

export default function SingleSubPage() {
  const { name, subpage } = useParams();
  const navigate = useNavigate();

  const business = businessData[name];
  const sub = business?.subPages?.find((s) => s.slug === subpage);

  if (!business || !sub) {
    return <div className="p-10">Not Found</div>;
  }

  return (
    <div>

      {/* 🔥 HERO */}
      <div className="relative h-[50vh]">
        <img
          src={business.heroImage}
          alt={sub.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#050F1C]/90 via-[#061a33]/70 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            {sub.title}
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 text-sm text-blue-300 hover:text-white transition"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <section className="relative max-w-4xl mx-auto px-6 py-20">

        {/* background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="w-72 h-72 bg-blue-100/40 rounded-full blur-3xl absolute top-10 left-0"></div>
          <div className="w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl absolute bottom-0 right-0"></div>
        </div>

        {/* header */}
        <div className="mb-10">
          <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
            Details
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B1F3A]">
            {sub.title}
          </h2>

          <div className="w-16 h-1 bg-linear-to-r from-blue-600 to-indigo-500 mt-4 rounded-full"></div>
        </div>

        {/* content card */}
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8 md:p-10">
          <p className="text-gray-700 text-lg leading-relaxed">
            {sub.content}
          </p>
        </div>
      </section>

      {/* 🔥 RELATED NAVIGATION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-6">
          Explore Other Areas
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {business.subPages
            .filter((s) => s.slug !== sub.slug)
            .map((item, i) => (
              <div
                key={i}
                onClick={() =>
                  navigate(`/business/${name}/${item.slug}`)
                }
                className="
                  group cursor-pointer
                  bg-white border border-gray-100
                  rounded-xl p-5
                  shadow-sm hover:shadow-lg
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <h4 className="font-semibold text-[#0B1F3A] group-hover:text-blue-600 transition">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 mt-2">
                  {item.content}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}