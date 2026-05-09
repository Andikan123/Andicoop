import React from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "./CountUp";

export default function ReportSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT - BIG REPORT */}
      <div className="lg:col-span-6 bg-gradient-to-br from-[#06047c] via-[#0d0463] to-[#050F1C] text-white shadow-lg p-6 md:p-10 relative overflow-hidden group">

  {/* top accent */}
  <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>

  <h2 className="text-3xl md:text-4xl font-bold">
    Sustainability & Impact
  </h2>

  <p className="mt-4 text-blue-100 max-w-xl">
    We are committed to building long-term value that goes beyond business growth —
    shaping resilient communities, responsible industry practices, and sustainable progress
    across all regions we operate in.
  </p>

  {/* Sub section title */}
  <h3 className="mt-8 text-lg font-semibold text-white">
    Our Core Commitments
  </h3>

  {/* Pillars */}
  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-blue-100">

    <div className="bg-white/5 p-3 border-l-2 border-red-500">
      Economic Development
    </div>

    <div className="bg-white/5 p-3 border-l-2 border-red-500">
      Environmental Responsibility
    </div>

    <div className="bg-white/5 p-3 border-l-2 border-red-500">
      Community Empowerment
    </div>

    <div className="bg-white/5 p-3 border-l-2 border-red-500">
      Ethical Governance
    </div>

    <div className="bg-white/5 p-3 border-l-2 border-red-500">
      Innovation & Growth
    </div>

    <div className="bg-white/5 p-3 border-l-2 border-red-500">
      Long-term Value Creation
    </div>

  </div>

  <button
    onClick={() => navigate("/sustainability")}
    className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition"
  >
    Explore Sustainability →
  </button>

  {/* decorative text */}
  <div className="absolute right-0 bottom-0 opacity-10 text-[110px] font-bold text-white">
    IMPACT
  </div>

</div>

        {/* MIDDLE - IMAGE */}
        <div className="lg:col-span-3 bg-black overflow-hidden shadow-lg">
          <img
            src="/images/engine.jpg"
            alt="Report"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-500"
          />
        </div>

        {/* RIGHT - INVESTOR RELATIONS */}
        <div className="lg:col-span-3">
  <CountUp />
</div>

      </div>
    </section>
  );
}