import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen text-gray-900">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-10 pt-28 pb-20 flex flex-col md:flex-row items-center gap-16">

        {/* Left */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Empowering Africa Together
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-6">
            Building shared wealth through{" "}
            <span className="text-[#0B1F3A]">
              Andikan Cooperation
            </span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-xl">
            A Pan-African cooperative committed to empowering communities,
            strengthening education, and building long-term sustainable value.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#vision"
              className="bg-[#0B1F3A] text-white px-6 py-3 text-sm uppercase tracking-wide hover:opacity-90 transition"
            >
              Get Started
            </a>

            <a
              href="#about"
              className="border border-gray-300 px-6 py-3 text-sm uppercase tracking-wide hover:border-gray-600 transition"
            >
              Learn More
            </a>
          </div>

          <div className="flex gap-12 mt-10">
            <div>
              <p className="text-3xl font-semibold">1,254+</p>
              <p className="text-gray-500 text-sm">Active Members</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">18</p>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/images/hero2.jpeg"
            alt="Andikan"
            className="w-full h-[34rem] object-cover"
          />
        </div>

      </section>

      {/* Vision / Mission / Goal */}
      <section id="vision" className="max-w-7xl mx-auto px-10 pb-24 grid md:grid-cols-3 gap-10">

        <div className="border border-gray-200 p-8">
          <h3 className="text-lg font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To build a pan-African institution that empowers communities and drives sustainable growth.
          </p>
        </div>

        <div className="border border-gray-200 p-8">
          <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To provide world-class services and create opportunities that transform lives across Africa.
          </p>
        </div>

        <div className="border border-gray-200 p-8">
          <h3 className="text-lg font-semibold mb-3">Our Goal</h3>
          <p className="text-gray-600">
            To establish a sustainable and respected institution built on integrity and innovation.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Andikan Cooperation. All rights reserved.
      </footer>

    </div>
  );
}