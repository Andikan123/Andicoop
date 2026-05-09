import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Our Businesses", path: "/departments" },
    { name: "About Us", path: "/about" },
    { name: "HSSE & Sustainability", path: "/hsse" },
    { name: "Investor Relation", path: "/investor" },
    { name: "Careers", path: "/careers" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="flex items-center justify-between px-6 md:px-10 py-5">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#0B1F3A] flex items-center justify-center text-white font-bold">
            A
          </div>

          <span className="text-xl font-semibold text-gray-900">
            Andikan Cooperation
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-600 text-sm tracking-wider hover:text-red-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl text-gray-800 transition-all duration-300"
>
  <span className="inline-block transform transition duration-300">
    {menuOpen ? "✕" : "☰"}
  </span>
</button>

      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-70 bg-[#061426] text-white z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

       

        {/* LINKS */}
        <div className="flex flex-col text-blue-200">

          {links.map((link, index) => (
            <div key={link.name}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-4 hover:bg-white/5 transition"
              >
                {link.name}
              </Link>

              {index !== links.length - 1 && (
                <div className="h-px bg-white/10"></div>
              )}
            </div>
          ))}

        </div>

      </div>

    </nav>
  );
}