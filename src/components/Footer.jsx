import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#06048a] via-[#020353] to-[#04070F] text-white pt-24 pb-10 px-6 overflow-hidden">

      {/* subtle glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* BRAND */}
        <div className="md:col-span-5">

  {/* BRAND TITLE */}
  <h2 className="text-3xl font-bold tracking-tight">
    Andikan Cooperation
  </h2>

  {/* TAGLINE */}
  <p className="mt-4 text-blue-200 leading-relaxed max-w-md">
    Building sustainable infrastructure and delivering essential services that
    empower communities and drive long-term economic growth across Africa.
  </p>

  {/* MINI HIGHLIGHTS */}
  <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">

    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
      <p className="text-white font-semibold text-sm">Infrastructure</p>
      <p className="text-blue-300 text-xs mt-1">Development & Engineering</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
      <p className="text-white font-semibold text-sm">Energy</p>
      <p className="text-blue-300 text-xs mt-1">Power & Industrial growth</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
      <p className="text-white font-semibold text-sm">Community</p>
      <p className="text-blue-300 text-xs mt-1">Social impact programs</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
      <p className="text-white font-semibold text-sm">Sustainability</p>
      <p className="text-blue-300 text-xs mt-1">Long-term growth focus</p>
    </div>

  </div>

  {/* SOCIAL SECTION */}
  <div className="mt-8">
    <p className="text-xs text-blue-400 uppercase tracking-widest">
      Follow Us
    </p>

    <div className="flex gap-5 mt-3 text-sm text-blue-300">

      {["Facebook", "X", "Instagram", "YouTube", "LinkedIn"].map((item) => (
        <span
          key={item}
          className="hover:text-white cursor-pointer transition"
        >
          {item}
        </span>
      ))}

    </div>
  </div>

</div>

        {/* CONTACT PANEL */}
<div className="md:col-span-3 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">

  <h3 className="text-lg font-semibold tracking-wide">
    Contact Us
  </h3>

  <p className="mt-2 text-blue-200 text-sm">
    We’re available for inquiries, partnerships, and investor relations.
  </p>

  {/* CONTACT ITEMS */}
  <div className="mt-6 space-y-4 text-sm">

    {/* PHONE */}
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 flex items-center justify-center bg-red-600/20 text-red-400 rounded-md">
        📞
      </div>
      <div>
        <p className="text-white font-medium">Phone</p>
        <p className="text-blue-200">+234 1 448 0815</p>
      </div>
    </div>

    {/* EMAIL */}
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 flex items-center justify-center bg-red-600/20 text-red-400 rounded-md">
        ✉️
      </div>
      <div>
        <p className="text-white font-medium">Email</p>
        <p className="text-blue-200">communications@andikan.com</p>
      </div>
    </div>

    {/* LOCATION */}
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 flex items-center justify-center bg-red-600/20 text-red-400 rounded-md">
        📍
      </div>
      <div>
        <p className="text-white font-medium">Head Office</p>
        <p className="text-blue-200">Mersin, Turkey</p>
      </div>
    </div>

  </div>

</div>
{/* NEWSLETTER PANEL */}
<div className="md:col-span-4 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">

  <h3 className="text-lg font-semibold tracking-wide">
    Stay Connected
  </h3>

  <p className="mt-2 text-blue-200 text-sm leading-relaxed">
    Subscribe to receive updates on projects, investments, and strategic developments
    across our operations.
  </p>

  {/* INPUT BOX */}
  <div className="mt-6">

    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">

      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full px-4 py-3 text-black outline-none text-sm"
      />

      <button className="bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition">
        Subscribe
      </button>

    </div>

    {/* small trust note */}
    <p className="mt-3 text-xs text-blue-300">
      No spam. Only important company updates.
    </p>

  </div>

</div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-blue-300 text-sm">

  {/* LEFT */}
  <p>
    © {new Date().getFullYear()} Andikan Cooperation. All rights reserved.
  </p>

  {/* CENTER (optional subtle branding) */}
  <p className="mt-2 md:mt-0 text-blue-400">
    Built for impact • Designed for growth
  </p>

  {/* RIGHT - LEGAL LINKS */}
  <div className="flex gap-6 mt-3 md:mt-0">

    <a
      href="/terms"
      className="hover:text-white transition underline underline-offset-4 decoration-white/20"
    >
      Terms of Service
    </a>

    <a
      href="/privacy"
      className="hover:text-white transition underline underline-offset-4 decoration-white/20"
    >
      Privacy Policy
    </a>

  </div>

</div>

    </footer>
  );
}